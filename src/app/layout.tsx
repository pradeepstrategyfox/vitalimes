import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vita Limes — Pure Lemon, Perfected",
  description:
    "Vitalime Agrotech Pvt. Ltd. crafts premium value-added lemon products — Lemon Powder, Black Lemon, Essential Oils & more. 100% natural, trusted across India.",
  keywords: [
    "lemon powder",
    "black lemon",
    "loomi",
    "lemon essential oil",
    "Vita Limes",
    "Vitalime Agrotech",
  ],
  openGraph: {
    title: "Vita Limes — Pure Lemon, Perfected",
    description:
      "Premium value-added lemon products, 100% natural and trusted across India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
