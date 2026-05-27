import { DEFAULT_OG_SUBTITLE } from "@/lib/og-copy";

type OgImageProps = {
  subtitle?: string;
};

export function OgImage({ subtitle = DEFAULT_OG_SUBTITLE }: OgImageProps) {
  return (
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
        <div style={{ width: 120, height: 2, background: "#00A896" }} />
        <div
          style={{
            fontSize: 28,
            color: "#A3A3A3",
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.25,
          }}
        >
          {subtitle}
        </div>
        <div style={{ fontSize: 24, color: "#737373", marginTop: 24 }}>
          Get a free NSA IDR review
        </div>
      </div>
    </div>
  );
}
