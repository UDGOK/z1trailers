import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Security Trailer Rental | Mobile Surveillance for Festivals & Concerts | Z1 Trailers",
  description: "Rent mobile security trailers for events, festivals & concerts. Rapid deployment, crowd monitoring, live feeds & instant alerts. Get quote today.",
  keywords: [
    "event security trailer rental",
    "festival security camera rental",
    "concert surveillance trailer",
    "mobile event security",
    "crowd monitoring camera system",
    "outdoor event surveillance",
    "temporary event security",
    "festival security solutions",
  ],
  openGraph: {
    title: "Event Security Trailer Rental | Z1 Trailers",
    description: "Rent mobile security trailers for events, festivals & concerts. Rapid deployment, crowd monitoring, live feeds & instant alerts.",
    url: "https://www.z1trailers.com/industries/events",
    siteName: "Z1 Trailers",
    type: "article",
  },
  alternates: {
    canonical: "https://www.z1trailers.com/industries/events",
  },
};

export default function EventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
