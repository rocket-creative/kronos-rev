import { ImageResponse } from "next/og";
import { OgImage } from "@/components/OgImage";
import { ogSubtitleForPath } from "@/lib/og-copy";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ specialty: string }>;
}) {
  const { specialty } = await params;
  return new ImageResponse(
    <OgImage subtitle={ogSubtitleForPath(`/specialties/${specialty}`)} />,
    { ...size }
  );
}
