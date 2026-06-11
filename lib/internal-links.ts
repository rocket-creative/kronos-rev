import type { NavLink } from "@/lib/navigation";
import type { SpecialtySlug } from "@/lib/specialties";
import type { StateSlug } from "@/lib/states";

const SPECIALTY_STATE_MAP: Record<SpecialtySlug, StateSlug[]> = {
  orthopedic: ["texas", "new-york", "florida"],
  neurosurgery: ["new-york", "california", "texas"],
  spine: ["texas", "new-york", "arizona"],
  "plastic-surgery": ["california", "florida", "new-jersey"],
  anesthesia: ["texas", "california", "new-york"],
  "general-surgery": ["texas", "florida", "new-jersey"],
};

const STATE_SPECIALTY_MAP: Record<StateSlug, SpecialtySlug> = {
  texas: "orthopedic",
  "new-york": "neurosurgery",
  california: "plastic-surgery",
  "new-jersey": "general-surgery",
  florida: "orthopedic",
  arizona: "spine",
};

export function specialtyRelatedLinks(slug: SpecialtySlug): NavLink[] {
  const states = SPECIALTY_STATE_MAP[slug];
  return [
    { href: "/what-is-idr", label: "What is federal IDR?" },
    { href: "/lawyer-problem", label: "IDR attorney alternative" },
    ...states.map((s) => ({
      href: `/states/${s}`,
      label: s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    })),
  ];
}

export function stateRelatedLinks(slug: StateSlug): NavLink[] {
  const specialty = STATE_SPECIALTY_MAP[slug];
  return [
    { href: "/what-is-idr", label: "What is federal IDR?" },
    { href: "/lawyer-problem", label: "IDR attorney alternative" },
    { href: `/specialties/${specialty}`, label: "Specialty IDR" },
  ];
}
