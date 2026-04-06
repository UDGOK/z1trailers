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
    "@id": "https://www.z1trailers.com/#organization",
    "name": "Z1 Trailers",
    "description": "Z1 Trailers provides solar-powered, AI-equipped mobile security surveillance trailers for rent and purchase nationwide. Serving construction sites, parking lots, oil and gas sites, auto dealerships, and municipalities across all 50 US states. Deployable in under 15 minutes with no infrastructure required.",
    "url": "https://www.z1trailers.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.z1trailers.com/Logo.png",
      "width": 300,
      "height": 100
    },
    "image": "https://www.z1trailers.com/Logo.png",
    "telephone": ["+19492489748", "+19185203823"],
    "email": "contact@z1trailers.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1518 Paloma St",
      "addressLocality": "Los Angeles",
      "addressRegion": "CA",
      "postalCode": "90021",
      "addressCountry": "US"
    },
    "location": [
      {
        "@type": "Place",
        "name": "Z1 Trailers — Tulsa Branch",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Tulsa",
          "addressRegion": "OK",
          "addressCountry": "US"
        }
      },
      {
        "@type": "Place",
        "name": "Z1 Trailers — Houston Branch",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      }
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "serviceArea": [
      {"@type": "State", "name": "Oklahoma"},
      {"@type": "State", "name": "Texas"},
      {"@type": "State", "name": "Louisiana"},
      {"@type": "State", "name": "Arkansas"},
      {"@type": "State", "name": "Kansas"},
      {"@type": "State", "name": "Alabama"}
    ],
    "foundingDate": "2026",
    "slogan": "Autonomy By Design",
    "knowsAbout": [
      "Mobile Security Surveillance Trailers",
      "Solar-Powered Surveillance Systems",
      "AI-Powered Video Analytics",
      "Construction Site Security",
      "License Plate Recognition",
      "Edge Computing Surveillance",
      "Thermal Imaging Security"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Z1 Trailers Security Surveillance Units",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Z1 Scout",
            "description": "Entry-level mobile security surveillance trailer with dual 4MP AI cameras, 18ft telescopic mast, 5-day battery autonomy, and 4G LTE connectivity.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "42"
            }
          },
          "price": "999",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "999",
            "priceCurrency": "USD",
            "unitText": "month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Z1 Guardian",
            "description": "Standard mobile security surveillance trailer with quad 4MP AI cameras, bi-directional loudspeaker and strobe, and 10-day battery autonomy.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "89"
            }
          },
          "price": "1750",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "1750",
            "priceCurrency": "USD",
            "unitText": "month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Z1 Apex",
            "description": "Advanced mobile security surveillance trailer with thermal imaging, license plate recognition, radar detection, and 15-day battery autonomy.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "34"
            }
          },
          "price": "2800",
          "priceCurrency": "USD",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "price": "2800",
            "priceCurrency": "USD",
            "unitText": "month"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Z1 Command",
            "description": "Elite mobile security surveillance trailer with StarLink satellite, pan-tilt-zoom cameras, seismic sensors, and 20+ day battery autonomy.",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "12"
            }
          },
          "price": "0",
          "priceCurrency": "USD",
          "description": "Custom pricing — contact for quote"
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/z1trailers",
      "https://www.facebook.com/z1trailers",
      "https://www.youtube.com/@z1trailers",
      "https://www.instagram.com/z1trailers"
    ]
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
