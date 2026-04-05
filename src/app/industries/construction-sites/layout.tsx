import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Construction Site Security Trailer | 24/7 Mobile Surveillance Solutions | Z1 Trailers",
  description: "Protect your construction site with mobile security trailers. Reduce theft by 87% with autonomous surveillance, night vision & real-time alerts. Rent or buy from Z1 Trailers.",
  keywords: [
    "construction site security trailer",
    "mobile surveillance trailer rental",
    "construction site camera trailer",
    "job site security camera system",
    "construction theft prevention",
    "solar powered security trailer",
    "construction site surveillance",
    "mobile security trailer for construction",
  ],
  openGraph: {
    title: "Construction Site Security Trailer | Z1 Trailers",
    description: "Protect your construction site with mobile security trailers. Reduce theft by 87% with autonomous surveillance, night vision & real-time alerts.",
    url: "https://z1trailers.com/industries/construction-sites",
    siteName: "Z1 Trailers",
    type: "article",
  },
  alternates: {
    canonical: "https://z1trailers.com/industries/construction-sites",
  },
};

export default function ConstructionSitesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
