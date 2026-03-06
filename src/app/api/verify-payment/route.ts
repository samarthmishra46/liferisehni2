import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { sendConfirmationEmail, sendAdminNotification } from "@/lib/email";
import { appendToGoogleSheet } from "@/lib/googleSheets";

export interface FormData {
  name: string;
  email: string;
  mobileNumber: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

interface VerifyPaymentBody {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
  formData: FormData;
}

export async function POST(request: NextRequest) {
  try {
    const body: VerifyPaymentBody = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      formData,
    } = body;

    // Verify signature
    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      console.error("Razorpay secret not configured");
      return NextResponse.json(
        { success: false, error: "Payment service not configured" },
        { status: 500 }
      );
    }

    const signaturePayload = razorpay_order_id + "|" + razorpay_payment_id;
    const expectedSignature = crypto
      .createHmac("sha256", secret)
      .update(signaturePayload)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      console.error("Invalid payment signature");
      return NextResponse.json(
        { success: false, error: "Invalid signature" },
        { status: 400 }
      );
    }

    // Payment is verified - now trigger email and Google Sheet save
    // These are done in parallel but we don't fail the payment verification if they fail
    const results = await Promise.allSettled([
      sendConfirmationEmail({
        formData,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      }),
      sendAdminNotification({
        formData,
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
      }),
      appendToGoogleSheet({
        name: formData.name,
        email: formData.email,
        phone: formData.mobileNumber,
        age: formData.age,
        gender: formData.gender,
        height: formData.height,
        weight: formData.weight,
        paymentStatus: "success",
        paymentId: razorpay_payment_id,
        orderId: razorpay_order_id,
        timestamp: new Date().toISOString(),
      }),
    ]);

    // Log any failures for debugging but don't fail the response
    results.forEach((result, index) => {
      if (result.status === "rejected") {
        const operations = ["User email", "Admin email", "Google Sheet"];
        console.error(`${operations[index]} failed:`, result.reason);
      }
    });

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      paymentId: razorpay_payment_id,
      orderId: razorpay_order_id,
    });
  } catch (error) {
    console.error("Error verifying payment:", error);
    return NextResponse.json(
      { success: false, error: "Payment verification failed" },
      { status: 500 }
    );
  }
}
