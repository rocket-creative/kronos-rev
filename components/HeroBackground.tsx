"use client";

import dynamic from "next/dynamic";

const RadialPulse = dynamic(
  () => import("@/components/animations/RadialPulse").then((mod) => mod.RadialPulse),
  { ssr: false },
);

interface HeroBackgroundProps {
  color?: string;
  className?: string;
}

export function HeroBackground({ color, className = "" }: HeroBackgroundProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <RadialPulse color={color || "0, 255, 255"} />
    </div>
  );
}
