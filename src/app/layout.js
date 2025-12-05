import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


export const metadata = {
  title: "S. Kins Pharma | Top Pharmaceutical Manufacturer in India",
  description:
    "S. Kins Pharma is a leading pharmaceutical company providing high-quality pharma products including syrups, suspensions, capsules, protein powders, and third-party manufacturing services.",
  keywords: [
    "S. Kins Pharma",
    "pharmaceutical company India",
    "pharma manufacturer",
    "third party pharma manufacturing",
    "PCD pharma franchise",
    "pharma syrup",
    "pharma suspension",
    "pharma capsules",
    "protein powder manufacturer",
  ],
  openGraph: {
    title: "S. Kins Pharma | Trusted Pharmaceutical Manufacturer",
    description:
      "Explore high-quality pharmaceutical products manufactured by S. Kins Pharma including syrups, suspensions, capsules, and protein powders.",
    url: "https://www.skinspharma.com",
    siteName: "S. Kins Pharma",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "S. Kins Pharma Manufacturing Unit",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://s-kins-pharma.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
