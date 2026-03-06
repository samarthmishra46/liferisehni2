# LifeRise HNI - Setup Instructions

## Payment & Email Integration Setup

This project includes Razorpay payment integration and Nodemailer email notifications.

### Prerequisites

1. Node.js installed
2. Razorpay account (create at https://razorpay.com)
3. Gmail account with App Password enabled

### Environment Variables Setup

1. Copy `.env.example` to create `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Fill in the following credentials in your `.env` file:

#### Razorpay Configuration
- **RAZORPAY_KEY_ID**: Your Razorpay Key ID (from Razorpay Dashboard)
- **RAZORPAY_KEY_SECRET**: Your Razorpay Key Secret (from Razorpay Dashboard)
- **VITE_RAZORPAY_KEY_ID**: Same as RAZORPAY_KEY_ID (used by frontend)

To get Razorpay credentials:
1. Sign up at https://razorpay.com
2. Go to Settings → API Keys
3. Generate Test/Live keys
4. Copy Key ID and Key Secret

#### Gmail/Nodemailer Configuration
- **NODEMAILER_EMAIL**: Your Gmail address (e.g., youremail@gmail.com)
- **NODEMAILER_PASSWORD**: Gmail App Password (NOT your regular password)

To generate Gmail App Password:
1. Enable 2-Factor Authentication on your Google Account
2. Go to https://myaccount.google.com/apppasswords
3. Select "Mail" and your device
4. Google will generate a 16-character password
5. Copy this password to NODEMAILER_PASSWORD (without spaces)

#### Admin Configuration
- **ADMIN_EMAIL**: Email address where admin notifications will be sent

#### Server Configuration
- **PORT**: Server port (default: 3001)

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

You need to run both the frontend and backend servers:

**Terminal 1 - Frontend (Vite):**
```bash
npm run dev
```
This will start the frontend at http://localhost:8080

**Terminal 2 - Backend (Express):**
```bash
npm run server
```
This will start the backend API server at http://localhost:3001

### Testing the Integration

1. Click any "SECURE YOUR FREE EVALUATION" button on the website
2. Fill in the form with your details
3. Click "Next" to proceed to payment
4. Complete the Razorpay payment (use test card for testing)
5. Upon successful payment:
   - User receives confirmation email
   - Admin receives notification with user details

### Test Card Details (for Razorpay Test Mode)

When using Razorpay test keys, use these test card details:
- **Card Number**: 4111 1111 1111 1111
- **CVV**: Any 3 digits
- **Expiry**: Any future date

### Important Notes

1. Never commit `.env` file to version control
2. Use test keys during development
3. Switch to live keys only in production
4. Keep your API keys secure

### Troubleshooting

**Email not sending?**
- Verify Gmail App Password is correct (16 characters, no spaces)
- Ensure 2FA is enabled on your Google account
- Check if "Less secure app access" is enabled (if using old method)

**Payment not working?**
- Verify Razorpay keys are correct
- Check if using test/live mode consistently
- Check browser console for errors

**Server connection issues?**
- Ensure both servers (frontend and backend) are running
- Check if ports 8080 and 3001 are available
- Verify proxy configuration in vite.config.ts

### Project Structure

```
├── server.js                    # Express backend server
├── .env                         # Environment variables (create from .env.example)
├── .env.example                 # Environment variables template
├── src/
│   ├── components/
│   │   ├── EvaluationForm.tsx  # User form component
│   │   ├── PaymentModal.tsx    # Razorpay payment integration
│   │   └── ...                 # Other sections with CTA buttons
```

### API Endpoints

- `POST /api/create-order` - Creates Razorpay order
- `POST /api/verify-payment` - Verifies payment and sends emails
- `GET /api/health` - Health check endpoint

## Support

For issues or questions, please refer to the documentation or contact the development team.
