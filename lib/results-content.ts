export const RESULT_METRICS = [
  {
    label: "Provider win rate at federal IDR (H1 2025)",
    value: "88%",
    source: "CMS Federal IDR Q1/Q2 2025 Public Use File · January 21, 2026",
    href: "https://www.cms.gov/nosurprises/policies-and-resources/reports",
  },
  {
    label: "Awards exceeding insurer QPA (H1 2025)",
    value: "87%",
    source: "Same source",
    href: "https://www.cms.gov/nosurprises/policies-and-resources/reports",
  },
  {
    label: "Median provider award vs. in network rate",
    value: "~4.5x",
    source: "Georgetown University CHIR · Health Affairs · March 2026",
    href: "https://www.healthaffairs.org/",
  },
  {
    label: "Total provider IDR recoveries above in network rates (through 2024)",
    value: "$2.2B",
    source: "Brookings Institution NSA Arbitration Databook · April 2026",
    href: "https://www.brookings.edu/articles/no-surprises-act-arbitration-databook/",
  },
  {
    label: "Disputes filed through June 2025",
    value: "3.4M",
    source: "Georgetown CHIR · March 2026",
    href: "https://www.healthaffairs.org/",
  },
  {
    label: "Estimated eligible claims reaching IDR",
    value: "~10%",
    source: "ACEP analysis of CMS data",
    href: "https://www.cms.gov/nosurprises/policies-and-resources/reports",
  },
] as const;

export const CASE_STORIES = [
  {
    id: "spine-texas",
    lead: "Illustration 1 — Spine surgery group, Texas",
    title: "From batched attorney filings to 84% win rate in one quarter",
    body: "A three surgeon spine surgery group was filing NSA IDR through a contingency attorney at 20%. The attorney bundled CPT 22612 with instrumentation add-ons 22840 and 22842 and decompression 63030 into single IDR submissions. Kronos Revenue filed CPT 22612, 22840, 22842, and 63030 as four separate IDR submissions. Win rate on the same claim population, first full quarter under Kronos: 84%. Practice specific dollar figures available under NDA on request.",
  },
  {
    id: "ortho-ny",
    lead: "Illustration 2 — Orthopedic hand surgery, New York",
    title: "From zero IDR filings to consistent wins",
    body: "A hand surgery practice was filing zero IDR disputes. 30 plus minutes per claim, 8 to 10 out of network cases per month, accepted insurer initial payment on everything. Kronos handled IDR end to end. First full quarter: provider prevailed in 6 of 7 month one, 6 of 7 month two, 7 of 7 month three. The procedures did not change. The filing did. Practice specific dollar figures available under NDA on request.",
  },
  {
    id: "neuro-multi",
    lead: "Illustration 3 — Neurosurgery, multi practice group",
    title: "Cranial cases from below average to 91% win rate",
    body: "A five provider neurosurgery group was using a contingency attorney. Complex cranial cases CPT 61510, 61512, 61520 were filed with generic market rate language. Kronos Revenue took over with procedure specific clinical narrative, surgeon credential block, and prior winning determinations from Sydra library. Win rate on cranial submissions, first two quarters: 91%.",
  },
] as const;
