"use client";

import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: {
    name: string;
    email: string;
    mobileNumber: string;
    age: string;
    gender: string;
    height: string;
    weight: string;
  };
}

interface RazorpayOrder {
  id: string;
  amount: number;
  currency: string;
}

interface RazorpayResponse {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  formData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [order, setOrder] = useState<RazorpayOrder | null>(null);

  const initializePayment = useCallback(async () => {
    try {
      setIsLoading(true);
      // Create order on backend
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 100000, // ₹1000 in paise
          formData,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      const data = await response.json();
      setOrder(data);
    } catch (error) {
      console.error("Error creating order:", error);
      toast.error("Failed to initialize payment. Please try again.");
      onClose();
    } finally {
      setIsLoading(false);
    }
  }, [formData, onClose]);

  useEffect(() => {
    if (isOpen && !paymentSuccess) {
      initializePayment();
    }
  }, [isOpen, paymentSuccess, initializePayment]);

  const handlePayment = async () => {
    if (!order) return;

    try {
      setIsLoading(true);

      // Load Razorpay script
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const razorpay = window.Razorpay;

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: "INR",
          name: "LifeRise HNI",
          description: "Free Evaluation Program",
          order_id: order.id,
          prefill: {
            name: formData.name,
            email: formData.email,
            contact: formData.mobileNumber,
          },
          handler: async (response: RazorpayResponse) => {
            try {
              // Verify payment on backend
              const verifyResponse = await fetch("/api/verify-payment", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id: response.razorpay_order_id,
                  razorpay_payment_id: response.razorpay_payment_id,
                  razorpay_signature: response.razorpay_signature,
                  formData,
                }),
              });

              if (!verifyResponse.ok) {
                throw new Error("Payment verification failed");
              }

              const verifyData = await verifyResponse.json();

              if (verifyData.success) {
                setPaymentSuccess(true);
                toast.success(
                  "Payment successful! Check your email for details."
                );

                // Close modal after 3 seconds
                setTimeout(() => {
                  onClose();
                }, 3000);
              }
            } catch (error) {
              console.error("Error verifying payment:", error);
              toast.error("Payment verification failed. Please contact support.");
            }
          },
          modal: {
            ondismiss: () => {
              setIsLoading(false);
            },
          },
        };

        const paymentWindow = new razorpay(options);
        paymentWindow.open();
      };
    } catch (error) {
      console.error("Error initiating payment:", error);
      toast.error("Failed to initiate payment. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  if (paymentSuccess) {
    return (
      <Dialog open={isOpen}>
        <DialogContent className="max-w-md text-center">
          <div className="space-y-4">
            <CheckCircle2 size={64} className="mx-auto text-green-500" />
            <DialogTitle className="text-2xl">Payment Successful!</DialogTitle>
            <p className="text-muted-foreground">
              Your evaluation details have been sent to your email. Our team
              will be in touch soon.
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Complete Your Payment</DialogTitle>
          <DialogDescription>
            Pay ₹1,000 to secure your free evaluation
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-secondary/50 p-4 rounded-lg space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Program Fee</span>
              <span className="font-semibold">₹1,000</span>
            </div>
            <div className="border-t pt-2 flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>₹1,000</span>
            </div>
          </div>

          <div className="bg-blue-50 p-3 rounded-lg text-sm text-blue-900">
            ℹ️ This is a one-time payment for your personalized evaluation and
            initial consultation.
          </div>

          <Button
            onClick={handlePayment}
            disabled={isLoading || !order}
            className="w-full bg-primary hover:bg-primary/90"
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 size={18} className="mr-2 animate-spin" />
                Processing...
              </>
            ) : (
              "Pay ₹1,000 Now"
            )}
          </Button>

          <p className="text-xs text-center text-muted-foreground">
            You will be redirected to Razorpay's secure payment gateway
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentModal;
