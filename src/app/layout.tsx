import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { DM_Sans, DM_Serif_Display } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
});

export const metadata: Metadata = {
  title: {
    default: "Monteria Legal Services – Abogados en Guatemala",
    template: "%s – Monteria Legal Services",
  },
  description: "Firma de abogados guatemalteca especializada en servicios legales integrales.",
  keywords: ["abogados Guatemala", "servicios legales Guatemala", "Monteria Legal Services"],
  authors: [{ name: "Monteria Legal Services" }],
  creator: "Monteria Legal Services",
  openGraph: {
    title: "Monteria Legal Services – Abogados en Guatemala",
    description: "Firma de abogados guatemalteca con presencia en Ciudad de Guatemala y Antigua Guatemala.",
    url: "https://www.monterialegalservices.com",
    siteName: "Monteria Legal Services",
    locale: "es_GT",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${dmSans.variable} ${dmSerif.variable}`}>
      <body style={{
        fontFamily: "var(--font-dm-sans), Arial, sans-serif",
        backgroundColor: "#ffffff",
        color: "#444444",
      }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}