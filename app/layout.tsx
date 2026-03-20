import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { DM_Sans, Sora } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});


export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: "Architect AI — Next-Gen Digital Architecture",
  description: "Performance-driven AI software solutions for modern teams. Deploy faster, scale smarter.",
  keywords: ["AI", "SaaS", "Architecture", "Cloud", "Next.js"],
  openGraph: {
    title: "Architect AI — Next-Gen Digital Architecture",
    description: "Performance-driven AI software solutions for modern teams.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Architect AI",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${dmSans.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col font-sans">
        <Navbar/>
        {children}</body>
    </html>
  );
}
