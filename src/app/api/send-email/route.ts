import { NextRequest, NextResponse } from "next/server";
import { sendConfirmationEmail, sendAdminNotification } from "@/lib/email";

export interface FormData {
  name: string;
  email: string;
  mobileNumber: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

interface SendEmailBody {
  formData: FormData;
  paymentId: string;
  orderId: string;
  type?: "user" | "admin" | "both";
}

export async function POST(request: NextRequest) {
  try {
    const body: SendEmailBody = await request.json();
    const { formData, paymentId, orderId, type = "both" } = body;

    if (!formData || !paymentId || !orderId) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailData = { formData, paymentId, orderId };

    if (type === "user" || type === "both") {
      await sendConfirmationEmail(emailData);
    }

    if (type === "admin" || type === "both") {
      await sendAdminNotification(emailData);
    }

    return NextResponse.json({
      success: true,
      message: "Email(s) sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
