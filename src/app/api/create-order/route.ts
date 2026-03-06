import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

// Initialize Razorpay lazily to avoid build-time errors
let razorpayInstance: Razorpay | null = null;

function getRazorpayInstance(): Razorpay {
  if (!razorpayInstance) {
    razorpayInstance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });
  }
  return razorpayInstance;
}

export interface FormData {
  name: string;
  email: string;
  mobileNumber: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { amount, formData } = body as { amount: number; formData: FormData };

    if (!amount || !formData) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      console.error("Razorpay credentials not configured");
      return NextResponse.json(
        { error: "Payment service not configured" },
        { status: 500 }
      );
    }

    const razorpay = getRazorpayInstance();
    const order = await razorpay.orders.create({
      amount: amount, // in paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`,
      notes: {
        name: formData.name,
        email: formData.email,
        mobileNumber: formData.mobileNumber,
      },
    });

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Error creating order:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
