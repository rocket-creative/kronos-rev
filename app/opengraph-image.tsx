import { ImageResponse } from "next/og";
import { OgImage } from "@/components/OgImage";
import { DEFAULT_OG_SUBTITLE } from "@/lib/og-copy";

export const runtime = "edge";
export const alt =
  "Kronos Revenue, specialty trained NSA IDR for orthopedic, neurosurgery, spine, and plastic surgery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(<OgImage subtitle={DEFAULT_OG_SUBTITLE} />, { ...size });
}
