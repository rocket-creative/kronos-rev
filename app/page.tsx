import type { Metadata } from "next";
import HomePageContent from "./HomePageContent";

export const metadata: Metadata = {
  title: "Revenue Cycle Management & IDR | Kronos Revenue",
  description:
    "Expert arbitration and out of network dispute resolution under the No Surprises Act. Maximize reimbursements with full case management. Request a free revenue review.",
  alternates: {
    canonical: "https://www.kronosrevenue.health",
  },
  openGraph: {
    title: "Revenue Cycle Management & IDR | Kronos Revenue",
    description:
      "Expert arbitration and out of network dispute resolution under the No Surprises Act. Maximize reimbursements. Request a free revenue review.",
    url: "https://www.kronosrevenue.health",
    siteName: "Kronos Revenue",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Kronos Revenue — Revenue Cycle Management & IDR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Cycle Management & IDR | Kronos Revenue",
    description:
      "Expert arbitration and out of network dispute resolution under the No Surprises Act. Request a free revenue review.",
    images: ["/twitter-image"],
  },
};

export default function HomePage() {
  return <HomePageContent />;
}
