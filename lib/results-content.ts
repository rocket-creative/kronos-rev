export const RESULT_METRICS = [
  { label: "Average per claim recovery", value: "On consultation" },
  { label: "Win rate at IDR", value: "On consultation" },
  { label: "Client retention after 12 months", value: "On consultation" },
  { label: "EOB to IDR submission", value: "Under 5 days (target)" },
] as const;

export const CASE_STORIES = [
  {
    id: "hand-surgeon",
    lead: "Retained recovery improved after switching from a 20% attorney",
    title: "Hand surgeon, prior contingency counsel",
    body: "A hand surgeon was paying counsel twenty percent of every $5,000 claim. Kronos quoted the same disputes so the practice kept a greater share per dollar won and won more awards after one claim per CPT filing.",
  },
  {
    id: "spine-practice",
    lead: "Win rate lift after switching from batched filing",
    title: "High volume spine practice",
    body: "A multi provider spine group was losing IDR disputes because their prior firm batched CPT codes against federal rules. After switching to one claim per CPT, outcomes improved materially within the first quarter.",
  },
  {
    id: "plastics-practice",
    lead: "Time savings plus recovery lift",
    title: "Plastics practice, IDR in house",
    body: "A plastics group handling IDR internally spent thirty plus minutes per claim with inconsistent results. Kronos took over end to end with specialty coded submissions and faster prep per claim.",
  },
] as const;
