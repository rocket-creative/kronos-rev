export const RESULT_METRICS = [
  { label: "Average per claim recovery", value: "[TBD]" },
  { label: "Win rate at IDR", value: "[TBD]%" },
  { label: "Client retention after 12 months", value: "[TBD]%" },
  { label: "EOB to IDR submission", value: "Under 5 days (target)" },
] as const;

export const CASE_STORIES = [
  {
    id: "hand-surgeon",
    lead: "[TBD] Retained recovery increased from 80% to 90%+ per claim",
    title: "Hand surgeon, prior 20% attorney",
    body: "A hand surgeon was paying his attorney 20% of every $5,000 claim — keeping eighty cents on the dollar. We quoted the same disputes so he kept ninety cents or more, and won more of them. [Full anonymized story pending Heisha Rivera + Dr. Abrams approval.]",
  },
  {
    id: "spine-practice",
    lead: "[TBD] Win rate lift after switching from batched filing",
    title: "High volume spine practice",
    body: "A multi provider spine group was losing IDR disputes because their prior firm batched CPT codes against federal rules. After switching to one claim per CPT, win rates improved materially within the first quarter. [Metrics pending confirmation.]",
  },
  {
    id: "plastics-practice",
    lead: "[TBD] Time savings plus recovery lift",
    title: "Plastics practice, IDR in house",
    body: "A plastics group handling IDR internally was spending 30+ minutes per claim with inconsistent results. Kronos took over end to end — target internal time dropped to under 5 minutes per claim with higher recovery. [Full story pending.]",
  },
] as const;
