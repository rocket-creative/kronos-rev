import { CTA } from "@/lib/ctas";
import { SYDRA_PLANS_URL, SYDRA_URL } from "@/lib/site";

export type NsaTierId = "self-serve" | "support" | "full-service";

export type NsaTier = {
  id: NsaTierId;
  name: string;
  tagline: string;
  description: string;
  fit: string;
  href: string;
  external: boolean;
  ctaLabel: string;
  ctaAriaLabel: string;
  recommended?: boolean;
  current?: boolean;
};

export const NSA_TIERS: NsaTier[] = [
  {
    id: "self-serve",
    name: "Sydra Self-Serve",
    tagline: "The software, run by your team.",
    description:
      "Comfortable operating software in house. Collapses IDR prep from 30 minutes to under 5 per claim. One claim per CPT, specialty trained.",
    fit: "Your billing team runs the workflow and wants to keep recoveries in house without a 20% attorney.",
    href: SYDRA_URL,
    external: true,
    ctaLabel: CTA.seeSydra.label,
    ctaAriaLabel: CTA.seeSydra.ariaLabel,
  },
  {
    id: "support",
    name: "Sydra + Kronos Support",
    tagline: "The software, with a Kronos specialist on call.",
    description:
      "Same Sydra platform plus live support, monthly account review, and escalation on disputed claims.",
    fit: "Steady OON volume. Software you operate, plus a backstop on tricky cases.",
    href: SYDRA_PLANS_URL,
    external: true,
    ctaLabel: CTA.scheduleSydraDemo.label,
    ctaAriaLabel: CTA.scheduleSydraDemo.ariaLabel,
  },
  {
    id: "full-service",
    name: "Kronos Full-Service",
    tagline: "Every claim handled end to end.",
    description:
      "High volume or no bandwidth to run software. Dedicated specialist on every file — zero biller time on IDR.",
    fit: "Practices that want Kronos to run every NSA IDR file without adding headcount.",
    href: CTA.caseReview.href,
    external: false,
    ctaLabel: CTA.caseReview.label,
    ctaAriaLabel: CTA.caseReview.ariaLabel,
    recommended: true,
    current: true,
  },
];

export const SYDRA_CROSS_LINK_COPY =
  "Want to run NSA IDR in house with software? Sydra is Kronos Health's AI platform — same specialty depth, your team operates it. Sydra saves biller hours; Kronos Full-Service saves headcount entirely.";
