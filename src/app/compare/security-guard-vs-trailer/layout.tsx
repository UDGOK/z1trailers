import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Guard vs. Surveillance Trailer: Cost & Coverage Comparison | Z1 Trailers",
  description: "How does a mobile surveillance trailer compare to a security guard? Side-by-side cost, coverage, response time, and ROI analysis. Z1 Trailers eliminates the force gap at 10% the cost.",
  openGraph: {
    title: "Security Guard vs. Surveillance Trailer | Z1 Trailers",
    description: "Side-by-side comparison of on-site security guards vs. Z1 autonomous surveillance trailers. Cost, coverage, response time, and ROI.",
    url: "https://www.z1trailers.com/compare/security-guard-vs-trailer",
    siteName: "Z1 Trailers",
    type: "article",
  },
  alternates: {
    canonical: "/compare/security-guard-vs-trailer",
  },
};

export default function GuardVsTrailerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
