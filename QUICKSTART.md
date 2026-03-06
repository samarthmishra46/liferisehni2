# Quick Start Guide - Payment Integration

## 🚀 Getting Started

### Step 1: Environment Setup

1. Create your `.env` file:
```bash
cp .env.example .env
```

2. Fill in your `.env` file with these credentials:

```env
# Razorpay (Get from https://dashboard.razorpay.com/app/keys)
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxx
VITE_RAZORPAY_KEY_ID=rzp_test_xxxxxxxxx

# Gmail App Password (See instructions below)
NODEMAILER_EMAIL=your-email@gmail.com
NODEMAILER_PASSWORD=your-16-char-app-password

# Admin Email
ADMIN_EMAIL=admin@liferise.com

# Server Port
PORT=3001
```

### Step 2: Get Gmail App Password

1. Enable 2FA on your Google Account: https://myaccount.google.com/security
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Select "Mail" → Copy the 16-character password
4. Paste it in NODEMAILER_PASSWORD (remove spaces)

### Step 3: Get Razorpay Keys

1. Sign up at: https://razorpay.com
2. Go to: Dashboard → Settings → API Keys
3. Generate Test Keys (for development)
4. Copy Key ID and Key Secret to .env

### Step 4: Run the Application

Open **TWO** terminal windows:

**Terminal 1 (Frontend):**
```bash
npm run dev
```
→ Runs on http://localhost:8080

**Terminal 2 (Backend):**
```bash
npm run server
```
→ Runs on http://localhost:3001

### Step 5: Test the Flow

1. Visit http://localhost:8080
2. Click "SECURE YOUR FREE EVALUATION" button (available in multiple sections)
3. Fill the form with test data
4. Click "Next"
5. Use Razorpay test card:
   - Card: 4111 1111 1111 1111
   - CVV: 123
   - Expiry: 12/25
6. Complete payment
7. Check emails (user + admin)

## 📁 What Was Created

### New Components
- `src/components/EvaluationForm.tsx` - User details form with validation
- `src/components/PaymentModal.tsx` - Razorpay payment integration

### Backend
- `server.js` - Express server with payment & email APIs

### Configuration
- `.env.example` - Template for environment variables
- `SETUP.md` - Detailed setup documentation
- Updated `vite.config.ts` - Added API proxy
- Updated `package.json` - Added server script

### Updated Sections (All have the button now)
- HeroSection.tsx
- CTASection.tsx
- WhoIsItForSection.tsx
- DigitalDelivery.tsx
- ProgramApproach.tsx

## 🔧 API Endpoints

- `POST /api/create-order` - Creates Razorpay order
- `POST /api/verify-payment` - Verifies payment & sends emails
- `GET /api/health` - Health check

## ✅ Features Implemented

✓ Multi-step form (User details → Payment)
✓ Form validation (email, phone, required fields)
✓ Razorpay payment integration (₹1000)
✓ Payment verification with signature
✓ Email to user (confirmation with details)
✓ Email to admin (notification with payment info)
✓ All credentials in .env file
✓ Added button to all major sections
✓ TypeScript type safety
✓ Error handling & loading states
✓ Responsive design
✓ Toast notifications

## 🎨 User Flow

1. User clicks "SECURE YOUR FREE EVALUATION"
2. Form opens with fields:
   - Name → Email → Mobile → Age → Gender → Height → Weight
3. Click "Next" (validates all fields)
4. Payment modal opens (₹1000)
5. Razorpay checkout appears
6. User completes payment
7. Backend verifies payment signature
8. Sends emails to:
   - User email (confirmation)
   - Admin email (notification)
9. Success message displayed
10. Modal closes automatically

## 🔒 Security Notes

- Payment signature verification prevents fraud
- Environment variables not exposed to client
- .env file in .gitignore
- Secure email authentication

## 🐛 Troubleshooting

**"Email not sending"**
→ Check Gmail App Password (must be 16 chars, no spaces)
→ Verify 2FA is enabled on Google account

**"Payment failed"**
→ Verify Razorpay keys are correct
→ Ensure using test mode in development

**"Cannot connect to API"**
→ Make sure backend server is running (npm run server)
→ Check if port 3001 is available

**"Form not opening"**
→ Clear browser cache
→ Check browser console for errors

## 📞 Support

For detailed documentation, see `SETUP.md`

---

**Ready to Test?** Run both servers and click any "SECURE YOUR FREE EVALUATION" button! 🎉
