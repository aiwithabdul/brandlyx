import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Brandlyx | Digital Agency London & Manchester | SEO, Web Development, Marketing",
    template: "%s | Brandlyx",
  },
  description: "Brandlyx is a leading UK digital agency specializing in SEO, web development, digital marketing, and automation services. Serving London, Manchester, and across the United Kingdom.",
  keywords: [
    "digital agency UK",
    "SEO services London",
    "web development Manchester",
    "digital marketing agency",
    "Next.js development",
    "WordPress development UK",
    "chatbot development",
    "automation services",
  ],
  authors: [{ name: "Brandlyx" }],
  creator: "Brandlyx",
  publisher: "Brandlyx",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://brandlyx.co.uk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://brandlyx.co.uk",
    siteName: "Brandlyx",
    title: "Brandlyx | Digital Agency London & Manchester",
    description: "Transform your business with UK's leading digital agency. SEO, Web Development, Marketing & Automation.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brandlyx Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brandlyx | Digital Agency London & Manchester",
    description: "Transform your business with UK's leading digital agency.",
    images: ["/og-image.jpg"],
    creator: "@brandlyx",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
