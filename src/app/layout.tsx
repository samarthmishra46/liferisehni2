import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const neulisCursive = localFont({
  src: [
    {
      path: "../font/fonnts.com-Neulis_Cursive_Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-Neulis_Cursive_Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-Neulis_Cursive_Semi_Bold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../font/fonnts.com-Neulis_Cursive_Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-neulis",
});

export const metadata: Metadata = {
  title: "LifeRise HNI - Transform Your Health After 40",
  description:
    "India's Leading Doctor-guided Online Transformation program for HNIs. Fully online Fitness Transformation tailored to your timeline.",
  keywords: [
    "health transformation",
    "fitness after 40",
    "HNI wellness",
    "executive health",
    "doctor guided fitness",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${neulisCursive.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
