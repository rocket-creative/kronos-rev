"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoImageProps {
  width?: number;
  className?: string;
  textSize?: string;
  priority?: boolean;
  dark?: boolean;
}

export function LogoImage({
  width = 160,
  className = "",
  textSize = "text-2xl",
  priority = false,
  dark = false,
}: LogoImageProps) {
  const [imgError, setImgError] = useState(false);
  const height = Math.round(width / 2.4);

  if (imgError) {
    return (
      <span
        className={`font-heading ${textSize} ${dark ? "text-gray-900" : "text-white"} tracking-wider`}
      >
        KRONOS <span className="text-kronos-cyan">REVENUE</span>
      </span>
    );
  }

  return (
    <Image
      src="/logo.svg"
      alt="Kronos Revenue logo"
      width={width}
      height={height}
      priority={priority}
      onError={() => setImgError(true)}
      className={className}
      style={{ display: "block", width, height: "auto" }}
    />
  );
}
