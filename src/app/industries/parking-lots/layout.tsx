import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parking Lot Security Trailer | Mobile Surveillance for Safer Parking Facilities | Z1 Trailers",
  description: "Reduce parking lot crime by 78% with mobile security trailers. License plate capture, live monitoring & rapid deployment. Protect your facility today.",
  keywords: [
    "parking lot security trailer",
    "parking garage security camera",
    "mobile surveillance for parking lots",
    "parking lot crime prevention",
    "license plate recognition parking",
    "parking facility security system",
    "parking lot camera trailer",
    "solar powered parking lot surveillance",
  ],
  openGraph: {
    title: "Parking Lot Security Trailer | Z1 Trailers",
    description: "Reduce parking lot crime by 78% with mobile security trailers. License plate capture, live monitoring & rapid deployment.",
    url: "https://z1trailers.com/industries/parking-lots",
    siteName: "Z1 Trailers",
    type: "article",
  },
  alternates: {
    canonical: "https://z1trailers.com/industries/parking-lots",
  },
};

export default function ParkingLotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
