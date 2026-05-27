export type HomeStat = {
  value: string;
  label: string;
  source: string;
  href: string;
};

export const HOME_STAT_BAR: HomeStat[] = [
  {
    value: "88%",
    label: "Provider win rate at federal IDR",
    source: "CMS Q1/Q2 2025 Public Use File · January 2026",
    href: "https://www.cms.gov/nosurprises/policies-and-resources/reports",
  },
  {
    value: "87%",
    label: "of IDR awards exceeded the insurer qualifying payment amount",
    source: "Same source",
    href: "https://www.cms.gov/nosurprises/policies-and-resources/reports",
  },
  {
    value: "~4.5x",
    label: "Median provider award vs. in network rate",
    source: "Georgetown CHIR · Health Affairs · March 2026",
    href: "https://www.healthaffairs.org/",
  },
  {
    value: "$2.2B",
    label: "Provider IDR recoveries above in network rates through 2024",
    source: "Brookings Institution · April 2026",
    href: "https://www.brookings.edu/articles/no-surprises-act-arbitration-databook/",
  },
  {
    value: "~10%",
    label: "Estimated share of eligible claims actually being filed",
    source: "ACEP analysis of CMS data",
    href: "https://www.cms.gov/nosurprises/policies-and-resources/reports",
  },
];
