import { SITE_URL } from "@/lib/site";

export type NavLink = {
  href: string;
  label: string;
  shortLabel?: string;
  ariaLabel?: string;
  external?: boolean;
};

export const mainNavLinks: NavLink[] = [
  {
    href: "/lawyer-problem",
    label: "Traditional approach",
    shortLabel: "Traditional",
    ariaLabel: "Traditional attorney approach to NSA IDR",
  },
  {
    href: "/how-we-work",
    label: "NSA IDR Process",
    shortLabel: "Process",
    ariaLabel: "NSA IDR Process",
  },
  { href: "/specialties", label: "Specialties" },
  { href: "/results", label: "IDR Results" },
  { href: "/pricing", label: "Pricing" },
  { href: "/team", label: "Team" },
  { href: "/faq", label: "NSA IDR FAQ" },
  { href: "/case-review", label: "Free IDR Review" },
];

/** @deprecated Use mainNavLinks. Kept for legacy page redirects. */
export const serviceLinks: NavLink[] = mainNavLinks;

export const homeSectionLinks: NavLink[] = mainNavLinks;

/** First six items shown in the desktop header cluster (excludes FAQ and case review). */
export const headerNavLinks: NavLink[] = mainNavLinks.slice(0, 6);

export function homeAnchor(href: string): string {
  return href.startsWith("#") ? `/${href}` : href;
}

export function breadcrumbItems(
  segments: { name: string; path: string }[]
): { name: string; url: string }[] {
  return [
    { name: "Home", url: SITE_URL },
    ...segments.map((s) => ({
      name: s.name,
      url: absolutePath(s.path),
    })),
  ];
}

function absolutePath(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}
