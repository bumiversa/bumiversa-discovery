// src/app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Discovery Digital | Petakan Masalah & Solusi Bisnis Anda | BUMIVERSA",
    template: "%s | BUMIVERSA",
  },
  description: "Punya masalah operasional atau digital tapi belum tahu solusinya? Jangan mulai dari teknologi. Mari dengarkan, petakan, dan rancang langkah paling masuk akal bersama BUMIVERSA.",
  metadataBase: new URL("https://discovery.bumiversa.dev"),
  alternates: {
    canonical: "https://discovery.bumiversa.dev",
  },
  openGraph: {
    title: "Discovery Digital | Petakan Masalah & Solusi Bisnis Anda | BUMIVERSA",
    description: "Punya masalah operasional atau digital tapi belum tahu solusinya? Mari dengarkan, petakan, dan rancang langkah paling masuk akal bersama BUMIVERSA.",
    type: "website",
    locale: "id_ID",
    siteName: "BUMIVERSA",
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BUMIVERSA - Discovery Digital',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discovery Digital | Petakan Masalah & Solusi Bisnis Anda | BUMIVERSA",
    description: "Punya masalah operasional atau digital tapi belum tahu solusinya? Mari dengarkan, petakan, dan rancang langkah paling masuk akal bersama BUMIVERSA.",
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/bumiversa_favicon.png',
    apple: '/bumiversa_favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-neutral-850 flex flex-col min-h-screen`}
      >
        <Header />
        <div className="flex-1">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
