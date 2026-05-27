"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
] as const;

export type UtmParams = Partial<Record<(typeof UTM_KEYS)[number], string>>;

export function useUtmParams(): UtmParams {
  const searchParams = useSearchParams();

  return useMemo(() => {
    const params: UtmParams = {};
    for (const key of UTM_KEYS) {
      const value = searchParams.get(key);
      if (value) params[key] = value;
    }
    return params;
  }, [searchParams]);
}

export function isHighVolume(monthlyClaims?: string | null): boolean {
  if (!monthlyClaims) return false;
  return ["51–200", "201–500", "Over 500"].includes(monthlyClaims);
}
