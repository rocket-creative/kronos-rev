import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { PageTransition } from "@/components/animations";
import SkipLink from "@/components/SkipLink";
import { createPageMetadata } from "@/lib/metadata";
import { MAIN_TOP_OFFSET, MOBILE_CTA_CLEARANCE, SHELL_MAX } from "@/lib/layout";
import { PAGE_SEO } from "@/lib/page-seo";
import { SITE_URL } from "@/lib/site";
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
  ...createPageMetadata({
    title: PAGE_SEO.home.title,
    description: PAGE_SEO.home.description,
    path: "/",
  }),
  metadataBase: new URL(SITE_URL),
  title: {
    default: PAGE_SEO.home.title,
    template: "%s",
  },
  authors: [{ name: "Heisha Rivera", url: `${SITE_URL}/team` }],
  creator: "Kronos Revenue",
  publisher: "Kronos Revenue",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${openSans.variable} antialiased bg-kronos-frame text-kronos-text-dark`}
      >
        <SkipLink />
        <div
          className={`relative mx-auto w-full ${SHELL_MAX} min-h-dvh bg-white shadow-[0_0_50px_rgba(0,0,0,0.12)]`}
        >
          <Nav />
          <main
            id="main-content"
            className={`${MAIN_TOP_OFFSET} ${MOBILE_CTA_CLEARANCE} scroll-mt-28`}
            role="main"
          >
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
          <MobileStickyCTA />
        </div>
      </body>
    </html>
  );
}
