import type { Metadata, Viewport } from "next";
import { Bebas_Neue, IBM_Plex_Sans, Open_Sans } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";
import { PageTransition } from "@/components/animations";
import SkipLink from "@/components/SkipLink";
import { createPageMetadata } from "@/lib/metadata";
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
    title: "Healthcare IDR & Revenue Cycle Management | Kronos",
    description:
      "Specialty trained revenue cycle for orthopedic, neurosurgery, spine, and plastic surgery. Full NSA IDR case management. Call (914) 705 6830 for a free review.",
    path: "/",
  }),
  metadataBase: new URL("https://www.kronosrevenue.health"),
  title: {
    default: "Healthcare IDR & Revenue Cycle Management | Kronos",
    template: "%s",
  },
  authors: [{ name: "Heisha Rivera", url: "https://www.kronosrevenue.health/#team" }],
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${ibmPlexSans.variable} ${openSans.variable} antialiased bg-white text-kronos-text-dark`}
      >
        <SkipLink />
        <Nav />
        <main
          id="main-content"
          className="pt-14 sm:pt-16 lg:pt-16 xl:pt-20 pb-[4.5rem] lg:pb-0 scroll-mt-20"
          role="main"
        >
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
