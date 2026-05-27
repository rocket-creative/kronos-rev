export type SpecialtySlug =
  | "orthopedic"
  | "neurosurgery"
  | "spine"
  | "plastic"
  | "anesthesia"
  | "general-surgery";

export type Specialty = {
  slug: SpecialtySlug;
  name: string;
  shortName: string;
  credibility: string;
  caseProfile: string;
  attorneyShortcuts: string;
  kronosApproach: string;
  quote: string;
};

export const SPECIALTIES: Specialty[] = [
  {
    slug: "orthopedic",
    name: "Orthopedic Surgery",
    shortName: "Ortho",
    credibility:
      "Orthopedic CPT sets are among the most batched at IDR. We file each code individually with operative detail that wins.",
    caseProfile: "Typical claim range $2,000 to $8,000 per CPT. Win rates shared on your free review.",
    attorneyShortcuts:
      "Generalists batch multiple arthroscopy codes into a single IDR submission, which arbiters reject under federal rules.",
    kronosApproach:
      "Every orthopedic CPT is coded by a specialist who knows your procedure set. One claim per code, every time.",
    quote:
      "Practices switching from batched attorney filings report higher retention per dollar won after the first quarter with Kronos.",
  },
  {
    slug: "neurosurgery",
    name: "Neurosurgery",
    shortName: "Neuro",
    credibility:
      "Complex cranial and spine neurosurgery requires clinical depth in every IDR submission, not boilerplate attorney letters.",
    caseProfile: "Typical claim range $5,000 to $25,000 per CPT. Win rates shared on your free review.",
    attorneyShortcuts:
      "Attorney shops treat high value neuro cases like personal injury, missing the administrative precision IDR requires.",
    kronosApproach:
      "Built by a board certified neurosurgeon. Every submission reflects real clinical complexity and market benchmarks.",
    quote:
      "Neurosurgery groups often see materially higher retention after the first twelve months versus contingency counsel.",
  },
  {
    slug: "spine",
    name: "Spine Surgery",
    shortName: "Spine",
    credibility:
      "Twelve of the most common spinal CPT codes are over batched by generalists. Here is how we file them.",
    caseProfile: "Typical claim range $4,000 to $15,000 per CPT. Win rates shared on your free review.",
    attorneyShortcuts:
      "Fusion and instrumentation codes bundled incorrectly lose at IDR. Attorneys rarely know which codes must stand alone.",
    kronosApproach:
      "Spine specific coding review on every EOB. Instrumentation, fusion, and decompression filed as separate eligible claims.",
    quote:
      "Spine practices report win rate lifts after switching from batched claim filing to one CPT per dispute.",
  },
  {
    slug: "plastic",
    name: "Plastic Surgery",
    shortName: "Plastic",
    credibility:
      "Reconstructive and hand surgery CPT codes require specialty documentation that generalist IDR firms do not provide.",
    caseProfile: "Typical claim range $3,000 to $10,000 per CPT. Win rates shared on your free review.",
    attorneyShortcuts:
      "Hand and microsurgery codes treated as cosmetic by generalist filers, losing recoverable OON disputes.",
    kronosApproach:
      "Operative report review on every claim. Reconstructive complexity documented the way arbiters expect.",
    quote:
      "Plastics groups cite time savings and recovery lift after moving IDR to Kronos Full-Service.",
  },
  {
    slug: "anesthesia",
    name: "Anesthesia",
    shortName: "Anesthesia",
    credibility:
      "Anesthesia NSA disputes require time unit precision and facility context that batched filings consistently miss.",
    caseProfile: "Typical claim range $800 to $4,000 per CPT. Win rates shared on your free review.",
    attorneyShortcuts:
      "Attorneys batch anesthesia time units across cases, triggering IDR rejections before arbitration even begins.",
    kronosApproach:
      "Each anesthesia claim filed with accurate time units, base units, and modifier documentation per federal IDR rules.",
    quote:
      "Anesthesia groups report recovery improvements versus prior attorney handling after specialty coded filings.",
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    shortName: "General Surgery",
    credibility:
      "General surgery OON claims at in network ASCs and hospitals are systematically underpaid and systematically winnable at IDR.",
    caseProfile: "Typical claim range $1,500 to $6,000 per CPT. Win rates shared on your free review.",
    attorneyShortcuts:
      "Volume practices get templated attorney filings with no procedure specific documentation.",
    kronosApproach:
      "Selective general surgery coverage with the same one CPT per claim standard. Operative detail on every submission.",
    quote:
      "General surgery practices recover billing team time after full handover to Kronos Revenue.",
  },
];

export const PRIMARY_SPECIALTY_LABELS = SPECIALTIES.map((s) => s.name);
