"use client";

import { useState } from "react";

interface LogoImageProps {
  /** Rendered width in px */
  width?: number;
  /** Optional className for the wrapper */
  className?: string;
  /** Text size fallback class */
  textSize?: string;
  priority?: boolean;
}

export function LogoImage({
  width = 160,
  className = "",
  textSize = "text-2xl",
  priority = false,
}: LogoImageProps) {
  const [imgError, setImgError] = useState(false);

  // viewBox is 5000 × 2084 → aspect ratio ≈ 2.4 : 1
  const height = Math.round(width / 2.4);

  if (imgError) {
    return (
      <span className={`font-heading ${textSize} text-white tracking-wider`}>
        KRONOS <span className="text-kronos-cyan">REVENUE</span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="Kronos Revenue"
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setImgError(true)}
      className={className}
      style={{ display: "block" }}
    />
  );
}
