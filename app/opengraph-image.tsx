import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Kronos Revenue — Specialty trained NSA IDR for orthopedic, neurosurgery, spine, and plastic surgery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A0A",
          color: "#FFFFFF",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 16,
            padding: 48,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "0.02em",
              textAlign: "center",
              lineHeight: 1,
            }}
          >
            KRONOS REVENUE
          </div>
          <div
            style={{
              width: 120,
              height: 2,
              background: "#00A896",
            }}
          />
          <div
            style={{
              fontSize: 34,
              color: "#A3A3A3",
              textAlign: "center",
              maxWidth: 900,
              lineHeight: 1.2,
            }}
          >
            Specialty trained NSA IDR for orthopedic, neurosurgery, spine & plastic surgery
          </div>
          <div
            style={{
              fontSize: 24,
              color: "#737373",
              marginTop: 24,
            }}
          >
            Get a free NSA IDR review
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
