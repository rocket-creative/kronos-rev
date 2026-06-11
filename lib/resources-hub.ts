import type { NavLink } from "@/lib/navigation";

export type ResourceHubCard = NavLink & {
  eyebrow: string;
  description: string;
};

export const RESOURCE_HUB_PRIMARY: ResourceHubCard[] = [
  {
    href: "/what-is-idr",
    label: "What is federal IDR?",
    eyebrow: "Start here",
    description:
      "Plain English guide to No Surprises Act arbitration: eligibility, deadlines, what claims are worth, and why 88% of provider filings win.",
  },
  {
    href: "/resources/idr-checklist",
    label: "NSA IDR checklist",
    eyebrow: "Free download",
    description:
      "Every document, deadline, and CPT rule you need before submitting to the federal IDRE portal.",
  },
  {
    href: "/resources/articles",
    label: "IDR articles",
    eyebrow: "10 guides",
    description:
      "Deep dives on timelines, open negotiation, attorney economics, evidence, batching, filing fees, and state pathways.",
  },
];
