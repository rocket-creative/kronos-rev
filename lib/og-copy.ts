/** OG image subtitle lines per route (KRONOS-MASTER Part 1D). */
export const DEFAULT_OG_SUBTITLE =
  "Specialty trained NSA IDR for orthopedic, neurosurgery, spine, and plastic surgery";

export function ogSubtitleForPath(pathname: string): string {
  const specialtyMatch = pathname.match(/^\/specialties\/([^/]+)/);
  if (specialtyMatch) {
    const slug = specialtyMatch[1];
    const labels: Record<string, string> = {
      orthopedic: "Orthopedic Surgery",
      neurosurgery: "Neurosurgery",
      spine: "Spine Surgery",
      "plastic-surgery": "Plastic Surgery",
      anesthesia: "Anesthesiology",
      "general-surgery": "General Surgery",
    };
    const label = labels[slug] ?? "Surgical";
    return `NSA IDR for ${label} Practices | Kronos Revenue`;
  }

  const stateMatch = pathname.match(/^\/states\/([^/]+)/);
  if (stateMatch) {
    const labels: Record<string, string> = {
      texas: "Texas",
      "new-york": "New York",
      california: "California",
      "new-jersey": "New Jersey",
      florida: "Florida",
      arizona: "Arizona",
    };
    const label = labels[stateMatch[1]] ?? "State";
    return `NSA IDR for ${label} Surgical Practices | Kronos Revenue`;
  }

  return DEFAULT_OG_SUBTITLE;
}
