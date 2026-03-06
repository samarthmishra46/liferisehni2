# LifeRise HNI - Next.js 14

A doctor-guided online transformation program for high-net-worth individuals (HNIs) aged 40+.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI
- **Payments**: Razorpay
- **Email**: Nodemailer (SMTP)
- **Data Storage**: Google Sheets API

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── create-order/     # Razorpay order creation
│   │   ├── verify-payment/   # Payment verification + email + sheets
│   │   └── send-email/       # Email sending endpoint
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              # Home page
│   └── not-found.tsx         # 404 page
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── Header.tsx
│   ├── HeroSection.tsx
│   ├── EvaluationForm.tsx    # Registration form modal
│   ├── PaymentModal.tsx      # Razorpay payment modal
│   └── ...                   # Other section components
├── hooks/
│   ├── use-mobile.tsx
│   └── use-toast.ts
└── lib/
    ├── utils.ts
    ├── email.ts              # Nodemailer email functions
    └── googleSheets.ts       # Google Sheets integration
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file (copy from `.env.local.example`):

```bash
cp .env.local.example .env.local
```

Fill in the following environment variables:

```env
# Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
NEXT_PUBLIC_RAZORPAY_KEY_ID=your_razorpay_key_id

# SMTP Configuration (Gmail)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Admin email for notifications
ADMIN_EMAIL=admin@yourdomain.com

# Google Sheets Configuration
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account",...}
GOOGLE_SHEET_ID=your-spreadsheet-id

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 3. Gmail App Password Setup

For Gmail SMTP:
1. Enable 2-Factor Authentication on your Google Account
2. Go to Google Account > Security > App passwords
3. Generate an App Password for "Mail"
4. Use this password as `SMTP_PASS`

### 4. Google Sheets Setup

1. Create a Google Cloud Project
2. Enable Google Sheets API
3. Create a Service Account
4. Download JSON key file
5. Copy the entire JSON content as `GOOGLE_SERVICE_ACCOUNT_KEY`
6. Share your Google Sheet with the service account email (with Editor access)
7. Copy the Sheet ID from the URL as `GOOGLE_SHEET_ID`

### 5. Razorpay Setup

1. Sign up at [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Get your API Key ID and Key Secret from Settings > API Keys
3. For testing, use Test mode credentials

### 6. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Payment Flow

1. **User clicks CTA button** → Opens registration form modal
2. **User fills form** → Validates required fields
3. **User submits** → Creates Razorpay order via `/api/create-order`
4. **Razorpay checkout opens** → User completes payment
5. **Payment success** → Verify signature via `/api/verify-payment`
6. **On verification**:
   - Send confirmation email to user
   - Send notification email to admin
   - Append data to Google Sheet
7. **Show success message** → Close modal after 3 seconds

## API Routes

### POST `/api/create-order`
Creates a Razorpay order.

**Request Body:**
```json
{
  "amount": 100000,
  "formData": {
    "name": "John Doe",
    "email": "john@example.com",
    "mobileNumber": "9876543210",
    "age": "45",
    "gender": "male",
    "height": "175",
    "weight": "80"
  }
}
```

**Response:**
```json
{
  "id": "order_ABC123",
  "amount": 100000,
  "currency": "INR"
}
```

### POST `/api/verify-payment`
Verifies payment signature and triggers email/sheet updates.

**Request Body:**
```json
{
  "razorpay_order_id": "order_ABC123",
  "razorpay_payment_id": "pay_XYZ789",
  "razorpay_signature": "...",
  "formData": { ... }
}
```

### POST `/api/send-email`
Sends confirmation emails (optional standalone endpoint).

## Build for Production

```bash
npm run build
npm start
```

## Error Handling

- Payment verification continues even if email/sheets fail (graceful degradation)
- User-friendly error messages displayed via toast notifications
- Server-side errors logged for debugging

## License

Private - All rights reserved.# liferisehni2
# liferisehni2
# liferisehni2
