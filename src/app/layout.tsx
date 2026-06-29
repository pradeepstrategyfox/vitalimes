import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vita Limes · From the Lemon Groves of Kovilpatti",
  description:
    "Vitalime Agrotech Pvt. Ltd. transforms lemons into value-added products, sourced directly from 250+ farmers across 324 hectares in Kovilpatti, Tamil Nadu. Lemon Powder, Black Lemon, Essential Oils & more.",
  keywords: [
    "lemon powder",
    "black lemon",
    "lemon essential oil",
    "Vita Limes",
    "Vitalime Agrotech",
    "Kovilpatti lemon",
    "lemon value chain",
  ],
  openGraph: {
    title: "Vita Limes · From the Lemon Groves of Kovilpatti",
    description:
      "Value-added lemon products, sourced directly from farmers and processed with science. Strengthening the lemon value chain across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
