import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConstructionNotice from "@/components/layout/ConstructionNotice";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import { SITE_URL } from "@/lib/site";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Monteria Legal Services – Abogados en Guatemala",
    template: "%s – Monteria Legal Services",
  },
  description: "Firma de abogados guatemalteca especializada en servicios legales integrales.",
  keywords: [
    "Monteria Legal Services",
    "Montería Legal Services",
    "Monteria abogados",
    "abogados Guatemala",
    "abogados Antigua Guatemala",
    "servicios legales Guatemala",
    "bufete de abogados Guatemala",
  ],
  alternates: { canonical: "/" },
  authors: [{ name: "Monteria Legal Services" }],
  creator: "Monteria Legal Services",
  openGraph: {
    title: "Monteria Legal Services – Abogados en Guatemala",
    description: "Firma de abogados guatemalteca con presencia en Ciudad de Guatemala y Antigua Guatemala.",
    url: SITE_URL,
    siteName: "Monteria Legal Services",
    locale: "es_GT",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Monteria Legal Services",
  alternateName: "Montería Legal Services",
  url: SITE_URL,
  logo: `${SITE_URL}/logo-monteria.png`,
  image: `${SITE_URL}/logo-monteria.png`,
  description: "Firma de abogados guatemalteca con presencia en Ciudad de Guatemala y Antigua Guatemala.",
  email: "info@monterialegalservices.com",
  telephone: "+502 5865 6566",
  areaServed: { "@type": "Country", name: "Guatemala" },
  address: [
    { "@type": "PostalAddress", addressLocality: "Ciudad de Guatemala", addressCountry: "GT" },
    { "@type": "PostalAddress", addressLocality: "Antigua Guatemala", addressCountry: "GT" },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ConstructionNotice />
      </body>
    </html>
  );
}