import type { PAGE_SEO } from "@/lib/page-seo";

export type StateSlug =
  | "texas"
  | "new-york"
  | "california"
  | "new-jersey"
  | "florida"
  | "arizona";

export type StatePage = {
  slug: StateSlug;
  name: string;
  seoKey: keyof typeof PAGE_SEO.state;
  h1: string;
  paragraphs: string[];
  ctaLabel: string;
};

export const STATES: StatePage[] = [
  {
    slug: "texas",
    name: "Texas",
    seoKey: "texas",
    h1: "NSA IDR for Texas surgical practices.",
    paragraphs: [
      "Texas operates a bifurcated IDR system: the federal No Surprises Act IDR process applies to fully insured plans regulated by the federal government and all self insured ERISA plans. Texas also has its own IDR law for certain state regulated plans. Kronos Revenue handles both pathways for Texas orthopedic, neurosurgery, spine, and plastic surgery practices.",
      "Texas has one of the highest volumes of IDR disputes nationally. The large ASC and hospital system market means significant out of network exposure for surgical groups, particularly for on call and emergent procedures.",
    ],
    ctaLabel: "Get a free NSA IDR review for your Texas practice",
  },
  {
    slug: "new-york",
    name: "New York",
    seoKey: "newYork",
    h1: "NSA IDR for New York surgical practices.",
    paragraphs: [
      "New York operates a bifurcated system: the federal NSA IDR process governs disputes involving self insured ERISA plans and federally regulated insurers. New York own surprise billing law covers state regulated fully insured commercial plans.",
      "Kronos Revenue is based in West Harrison, New York. Dr. John M. Abrahams, MD, is a New York neurosurgeon and the company founder. Kronos Revenue has direct experience navigating New York payer contracts and IDR timelines.",
    ],
    ctaLabel: "Get a free NSA IDR review for your New York practice",
  },
  {
    slug: "california",
    name: "California",
    seoKey: "california",
    h1: "NSA IDR for California surgical practices.",
    paragraphs: [
      "California combines federal NSA IDR with state surprise billing rules for certain fully insured plans. Kronos Revenue navigates both pathways for orthopedic, neurosurgery, spine, and plastic surgery groups.",
      "High out of network surgical volume in California ASC and hospital markets creates substantial IDR opportunity when claims are filed correctly, one CPT per dispute.",
    ],
    ctaLabel: "Get a free NSA IDR review for your California practice",
  },
  {
    slug: "new-jersey",
    name: "New Jersey",
    seoKey: "newJersey",
    h1: "NSA IDR for New Jersey surgical practices.",
    paragraphs: [
      "New Jersey practices face bifurcated federal and state IDR pathways depending on plan type. Kronos Revenue serves New Jersey orthopedic, neurosurgery, and spine groups from our New York operations base.",
      "Proximity to major payer markets means New Jersey surgical groups often share CPT and QPA patterns with New York. Specialty coded filings matter on both sides of the river.",
    ],
    ctaLabel: "Get a free NSA IDR review for your New Jersey practice",
  },
  {
    slug: "florida",
    name: "Florida",
    seoKey: "florida",
    h1: "NSA IDR for Florida surgical practices.",
    paragraphs: [
      "Florida combines federal NSA IDR with state level dispute processes for certain regulated plans. Kronos Revenue handles eligibility review before submission so the correct pathway is used on every claim.",
      "Florida surgical practices with high out of network volume at in network facilities are among the most underfiled populations in the federal IDR system.",
    ],
    ctaLabel: "Get a free NSA IDR review for your Florida practice",
  },
  {
    slug: "arizona",
    name: "Arizona",
    seoKey: "arizona",
    h1: "NSA IDR for Arizona surgical practices.",
    paragraphs: [
      "Arizona surgical groups with out of network claims at in network hospitals and ASCs can recover through federal IDR when filings follow one CPT per claim rules.",
      "Kronos Revenue serves Arizona orthopedic, neurosurgery, and spine practices with the same specialty coded submission standard used in higher volume IDR states.",
    ],
    ctaLabel: "Get a free NSA IDR review for your Arizona practice",
  },
];

export function getStateBySlug(slug: string): StatePage | undefined {
  return STATES.find((s) => s.slug === slug);
}
