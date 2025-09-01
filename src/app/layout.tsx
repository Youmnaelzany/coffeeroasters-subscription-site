import type { Metadata } from "next";
import { Barlow, Fraunces } from "next/font/google";

import Footer from "@/components/Navigation/Footer";
import Header from "@/components/Navigation/Header";

import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Coffeeroasters App",
  description:
    "Discover premium coffee subscriptions from Coffeeroasters. Choose from our curated collection of handcrafted blends, customize your delivery schedule, and enjoy exceptional coffee delivered to your door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${barlow.variable} bg-[#F2F2F2] antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
