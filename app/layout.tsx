import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { PageTransition } from "@/components/animations";
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
  themeColor: "#00542A",
};

export const metadata: Metadata = {
  title: {
    default: "Revenue Cycle Management & IDR | Kronos Revenue",
    template: "%s",
  },
  description:
    "Expert arbitration and out of network dispute resolution under the No Surprises Act. Maximize reimbursements with full case management. Request a free revenue review.",
  metadataBase: new URL("https://www.kronosrevenue.health"),
  alternates: {
    canonical: "https://www.kronosrevenue.health",
  },
  authors: [
    { name: "Heisha Rivera", url: "https://www.kronosrevenue.health" },
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
    url: "https://www.kronosrevenue.health",
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
          url="https://www.kronosrevenue.health"
          serviceType="Healthcare Revenue Services"
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${openSans.variable} antialiased bg-white text-kronos-text-dark`}
      >
        <SkipLink />
        <Nav />
        <main id="main-content" className="pt-14 sm:pt-16 xl:pt-20 pb-24 xl:pb-0" role="main">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
