import { SPECIALTIES } from "@/lib/specialties";
import { STATES } from "@/lib/states";

export const footerSpecialtyLinks = SPECIALTIES.map((s) => ({
  href: `/specialties/${s.slug}`,
  label: s.name,
}));

export const footerStateLinks = STATES.map((s) => ({
  href: `/states/${s.slug}`,
  label: s.name,
}));

export const footerResourceLinks = [
  { href: "/what-is-idr", label: "What is federal IDR?" },
  { href: "/resources/idr-checklist", label: "NSA IDR checklist" },
  { href: "/resources/articles", label: "IDR articles" },
];
