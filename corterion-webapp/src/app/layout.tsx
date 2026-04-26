import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieBanner } from "@/components/ui/CookieBanner";

const montserrat = Montserrat({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://corterion.com"),
  title: "Corterion | Certainty, Engineered",
  description: "AI-powered diagnostic systems built for precision, early detection, and scalable healthcare delivery.",
  icons: {
    icon: "/logo-icon.png",
    apple: "/logo-icon.png",
  },
  openGraph: {
    title: "Corterion | Certainty, Engineered",
    description: "AI-powered diagnostic systems built for precision, early detection, and scalable healthcare delivery.",
    url: "https://corterion.com",
    siteName: "Corterion",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "Corterion - Certainty, Engineered",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable} antialiased`}>
      <body className="min-h-screen bg-white text-corterion-navy selection:bg-corterion-cyan/30 selection:text-corterion-navy flex flex-col font-sans">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
