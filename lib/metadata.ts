import type { Metadata } from "next";
import {
  OG_IMAGE_URL,
  SITE_NAME,
  SITE_URL,
  TWITTER_IMAGE_URL,
} from "@/lib/site";

const DEFAULT_OG_ALT =
  "Kronos Revenue, specialty trained NSA IDR for orthopedic, neurosurgery, spine, and plastic surgery";

type PageMetadataInput = {
  title: string;
  description: string;
  path: string;
  ogImageAlt?: string;
  robots?: Metadata["robots"];
};

export function absoluteUrl(path: string): string {
  if (path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogImageAlt = DEFAULT_OG_ALT,
  robots,
}: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [TWITTER_IMAGE_URL],
    },
    robots: robots ?? {
      index: true,
      follow: true,
    },
  };
}
