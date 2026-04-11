import type { Metadata } from "next";
import SydraPageContent from "./SydraPageContent";

export const metadata: Metadata = {
  title: "Sydra — AI Powered IDR Submission Platform | Kronos Revenue",
  description:
    "Sydra automates the No Surprises Act IDR workflow for surgical practices. AI generated submissions, automated deadline tracking, and real time analytics. Coming soon.",
  alternates: {
    canonical: "https://kronosrevenue.co/sydra",
  },
  openGraph: {
    title: "Sydra — AI Powered IDR Submission Platform | Kronos Revenue",
    description:
      "Sydra automates the No Surprises Act IDR workflow for surgical practices. AI generated submissions, automated deadline tracking, and real time analytics.",
    url: "https://kronosrevenue.co/sydra",
    siteName: "Kronos Revenue",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Sydra — AI Powered IDR Submission Platform by Kronos Revenue",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sydra — AI Powered IDR Submission Platform | Kronos Revenue",
    description:
      "Sydra automates the No Surprises Act IDR workflow. AI generated submissions, automated deadlines, real time analytics. Coming soon.",
    images: ["/twitter-image"],
  },
};

export default function SydraPage() {
  return <SydraPageContent />;
}
