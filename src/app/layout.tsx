import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
import { AuthProvider } from "@/context/AuthContext";

const tajawal = Tajawal({ 
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"] 
});

export const metadata: Metadata = {
  title: "NexSys Software | حلول تقنية ذكية",
  description: "نظام NexSys لإدارة الحسابات، المخازن، ونقاط البيع ERP - رفيقك نحو النجاح الرقمي",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${tajawal.className} antialiased bg-slate-50 text-slate-900`}>
        <AuthProvider>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow">
              {children}
            </div>
            <Footer />
            <LiveChat />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
