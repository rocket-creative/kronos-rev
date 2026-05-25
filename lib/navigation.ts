import { SITE_URL } from "@/lib/site";

export type NavLink = { href: string; label: string };

export const serviceLinks: NavLink[] = [
  { href: "/free-claim-review", label: "Free Claim Review" },
  { href: "/no-surprises-act", label: "No Surprises Act" },
  { href: "/asc-providers", label: "ASC Providers" },
  { href: "/synaptix-billing", label: "Synaptix Billing" },
  { href: "/for-hospitals-and-ascs", label: "Hospitals & ASCs" },
  { href: "/sydra", label: "Sydra Platform" },
];

export const homeSectionLinks: NavLink[] = [
  { href: "/#services", label: "Services" },
  { href: "/#process", label: "How It Works" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#team", label: "Team" },
  { href: "/#faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

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
