import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ConsentModal from "@/components/layout/ConsentModal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

export const metadata: Metadata = {
  metadataBase: new URL('https://z1trailers.com'),
  title: "Mobile Security Surveillance Trailers — Rent or Buy | Z1 Trailers",
  description: "Deploy solar-powered, AI-equipped tactical surveillance trailers across the Mid-South in under 15 minutes. Pure tactical advantage.",
  openGraph: {
    type: "website",
    url: "https://z1trailers.com",
    title: "Z1 Trailers | Mobile Security Surveillance",
    description: "Autonomous solar-powered, AI-equipped tactical surveillance endpoints.",
    siteName: "Z1 Trailers",
    images: [{
      url: "https://z1trailers.com/Logo.png",
      width: 1200,
      height: 630,
      alt: "Z1 Trailers - Tactical Mobile Security",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Z1 Trailers",
    description: "Tactical Mobile Surveillance Endpoints.",
    images: ["https://z1trailers.com/Logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Z1 Trailers",
    "url": "https://z1trailers.com",
    "logo": "https://z1trailers.com/Logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-918-520-3823",
      "contactType": "sales",
      "areaServed": "US",
      "availableLanguage": "en"
    }
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrains.variable} antialiased selection:bg-brand-teal selection:text-white min-h-screen flex flex-col`}
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <ConsentModal />
        <Navbar />
        <main className="flex-1 w-full flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
