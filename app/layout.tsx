import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import {
  OrganizationSchema,
  ServiceSchema,
  WebSiteSchema,
  BreadcrumbListSchema,
  LocalBusinessSchema,
  FAQPageSchema,
} from "@/components/JsonLd";
import SkipLink from "@/components/SkipLink";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const ibmPlexSans = IBM_Plex_Sans({
  weight: ["300", "400", "700"],
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const openSans = Open_Sans({
  weight: ["400", "700"],
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0A0A",
};

export const metadata: Metadata = {
  title: {
    default: "Revenue Cycle Management & IDR | Kronos Revenue",
    template: "%s",
  },
  description:
    "Expert arbitration and out of network dispute resolution under the No Surprises Act. Maximize reimbursements with full case management. Request a free revenue review.",
  metadataBase: new URL("https://kronosrevenue.co"),
  alternates: {
    canonical: "https://kronosrevenue.co",
  },
  authors: [
    { name: "Heisha Rivera", url: "https://kronosrevenue.co" },
  ],
  creator: "Kronos Revenue",
  publisher: "Kronos Revenue",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Revenue Cycle Management & IDR | Kronos Revenue",
    description:
      "Expert arbitration and out of network dispute resolution under the No Surprises Act. Maximize reimbursements. Request a free revenue review.",
    url: "https://kronosrevenue.co",
    siteName: "Kronos Revenue",
    locale: "en_US",
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <OrganizationSchema />
        <WebSiteSchema />
        <BreadcrumbListSchema />
        <LocalBusinessSchema />
        <FAQPageSchema />
        <ServiceSchema
          name="Revenue Cycle Management & IDR Dispute Resolution"
          description="Expert arbitration and out of network dispute resolution support under the No Surprises Act. Complete case management from negotiation through final arbitration."
          url="https://kronosrevenue.co"
          serviceType="Healthcare Revenue Services"
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${openSans.variable} antialiased bg-kronos-bg text-white`}
      >
        <SkipLink />
        <Nav />
        <main id="main-content" className="pt-14 sm:pt-16 lg:pt-20 pb-24 lg:pb-0" role="main">
          {children}
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
