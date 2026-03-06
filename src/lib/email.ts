import nodemailer from "nodemailer";

export interface FormData {
  name: string;
  email: string;
  mobileNumber: string;
  age: string;
  gender: string;
  height: string;
  weight: string;
}

interface EmailData {
  formData: FormData;
  paymentId: string;
  orderId: string;
}

// Create reusable transporter
function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP configuration incomplete");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT, 10),
    secure: parseInt(SMTP_PORT, 10) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

// Send confirmation email to user
export async function sendConfirmationEmail(data: EmailData): Promise<void> {
  const { formData, paymentId, orderId } = data;
  const transporter = createTransporter();

  const mailOptions = {
    from: `"LifeRise HNI" <${process.env.SMTP_USER}>`,
    to: formData.email,
    subject: "LifeRise HNI - Your Evaluation Has Been Confirmed",
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fff9;">
        <div style="background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0, 48, 35, 0.08);">
          
          <!-- Header -->
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #003023; font-size: 28px; margin: 0;">Welcome to LifeRise HNI!</h1>
            <p style="color: #9EFF00; font-size: 14px; font-weight: 600; margin-top: 8px;">Your Transformation Begins Now</p>
          </div>
          
          <!-- Content -->
          <p style="color: #333; font-size: 16px; line-height: 1.6;">Hi ${formData.name},</p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            Thank you for securing your free evaluation. We've received your payment and are excited to begin your transformation journey.
          </p>
          
          <!-- Payment Details -->
          <div style="background-color: #f0fff4; border-radius: 12px; padding: 20px; margin: 24px 0;">
            <h3 style="color: #003023; font-size: 18px; margin: 0 0 15px 0;">Payment Confirmation</h3>
            <table style="width: 100%; font-size: 14px;">
              <tr>
                <td style="padding: 8px 0; color: #666;">Payment ID:</td>
                <td style="padding: 8px 0; color: #333; font-weight: 600;">${paymentId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">Order ID:</td>
                <td style="padding: 8px 0; color: #333; font-weight: 600;">${orderId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #666;">Amount Paid:</td>
                <td style="padding: 8px 0; color: #333; font-weight: 600;">₹1,000</td>
              </tr>
            </table>
          </div>
          
          <!-- Profile Information -->
          <h3 style="color: #003023; font-size: 18px; margin: 30px 0 15px 0;">Your Profile Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>Name</strong></td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>Email</strong></td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${formData.email}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>Mobile</strong></td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${formData.mobileNumber}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>Age</strong></td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${formData.age}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>Gender</strong></td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${formData.gender}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>Height</strong></td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${formData.height} cm</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #e0e0e0;"><strong>Weight</strong></td>
              <td style="padding: 12px; border: 1px solid #e0e0e0;">${formData.weight} kg</td>
            </tr>
          </table>
          
          <!-- Next Steps -->
          <div style="background-color: #003023; border-radius: 12px; padding: 24px; margin: 30px 0;">
            <h3 style="color: #9EFF00; font-size: 18px; margin: 0 0 15px 0;">What's Next?</h3>
            <ol style="color: #ffffff; margin: 0; padding-left: 20px; line-height: 1.8;">
              <li>Our team will review your information</li>
              <li>You'll receive a call within 24 hours to schedule your consultation</li>
              <li>Your personalized 27-minute physician consultation begins</li>
            </ol>
          </div>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            If you have any questions in the meantime, feel free to reply to this email.
          </p>
          
          <!-- Footer -->
          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center;">
            <p style="color: #666; font-size: 14px; margin: 0;">Best regards,</p>
            <p style="color: #003023; font-size: 16px; font-weight: 600; margin: 8px 0;">LifeRise HNI Team</p>
          </div>
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Send notification email to admin
export async function sendAdminNotification(data: EmailData): Promise<void> {
  const { formData, paymentId, orderId } = data;
  const transporter = createTransporter();
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    console.warn("Admin email not configured, skipping admin notification");
    return;
  }

  const mailOptions = {
    from: `"LifeRise HNI System" <${process.env.SMTP_USER}>`,
    to: adminEmail,
    subject: `🎉 New Evaluation Registration - ${formData.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
        <div style="background-color: #ffffff; border-radius: 16px; padding: 40px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);">
          
          <div style="background-color: #9EFF00; border-radius: 8px; padding: 16px; text-align: center; margin-bottom: 24px;">
            <h2 style="color: #003023; margin: 0;">New Evaluation Registration</h2>
          </div>
          
          <p style="color: #333; font-size: 16px;">A new user has completed their evaluation registration and payment.</p>
          
          <!-- User Details -->
          <h3 style="color: #333; font-size: 18px; margin: 30px 0 15px 0;">User Details</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Name</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Email</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="mailto:${formData.email}">${formData.email}</a></td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Mobile</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;"><a href="tel:${formData.mobileNumber}">${formData.mobileNumber}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Age</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.age}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Gender</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.gender}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Height</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.height} cm</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Weight</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${formData.weight} kg</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Payment ID</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd; font-family: monospace;">${paymentId}</td>
            </tr>
            <tr style="background-color: #f5f5f5;">
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Order ID</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd; font-family: monospace;">${orderId}</td>
            </tr>
            <tr>
              <td style="padding: 12px; border: 1px solid #ddd;"><strong>Timestamp</strong></td>
              <td style="padding: 12px; border: 1px solid #ddd;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td>
            </tr>
          </table>
          
          <div style="margin-top: 30px; padding: 16px; background-color: #fffde7; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; color: #666; font-size: 14px;">
              <strong>Action Required:</strong> Please follow up with this user as per your standard process within 24 hours.
            </p>
          </div>
          
        </div>
      </body>
      </html>
    `,
  };

  await transporter.sendMail(mailOptions);
}
