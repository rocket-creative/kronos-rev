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
      "Orthopedic CPT sets are among the most batched at IDR — we file each code individually with operative detail that wins.",
    caseProfile: "Typical claim range $2,000–$8,000 per CPT · Win rate [TBD]%",
    attorneyShortcuts:
      "Generalists batch multiple arthroscopy codes into a single IDR submission, which arbiters reject under federal rules.",
    kronosApproach:
      "Every orthopedic CPT is coded by a specialist who knows your procedure set. One claim per code, every time.",
    quote:
      "[TBD] Anonymized orthopedic practice quote — recovery improved after switching from batched attorney filings.",
  },
  {
    slug: "neurosurgery",
    name: "Neurosurgery",
    shortName: "Neuro",
    credibility:
      "Complex cranial and spine neurosurgery requires clinical depth in every IDR submission — not boilerplate attorney letters.",
    caseProfile: "Typical claim range $5,000–$25,000 per CPT · Win rate [TBD]%",
    attorneyShortcuts:
      "Attorney shops treat high value neuro cases like personal injury — missing the administrative precision IDR requires.",
    kronosApproach:
      "Built by a board certified neurosurgeon. Every submission reflects real clinical complexity and market benchmarks.",
    quote:
      "[TBD] Anonymized neurosurgery practice quote — materially higher retention after first 12 months.",
  },
  {
    slug: "spine",
    name: "Spine Surgery",
    shortName: "Spine",
    credibility:
      "12 of the most common spinal CPT codes are over batched by generalists — here is how we file them.",
    caseProfile: "Typical claim range $4,000–$15,000 per CPT · Win rate [TBD]%",
    attorneyShortcuts:
      "Fusion and instrumentation codes bundled incorrectly lose at IDR. Attorneys rarely know which codes must stand alone.",
    kronosApproach:
      "Spine specific coding review on every EOB. Instrumentation, fusion, and decompression filed as separate eligible claims.",
    quote:
      "[TBD] Anonymized spine practice quote — win rate lift after switching from batched claim filing.",
  },
  {
    slug: "plastic",
    name: "Plastic Surgery",
    shortName: "Plastic",
    credibility:
      "Reconstructive and hand surgery CPT codes require specialty documentation that generalist IDR firms do not provide.",
    caseProfile: "Typical claim range $3,000–$10,000 per CPT · Win rate [TBD]%",
    attorneyShortcuts:
      "Hand and microsurgery codes treated as cosmetic by generalist filers — losing recoverable OON disputes.",
    kronosApproach:
      "Operative report review on every claim. Reconstructive complexity documented the way arbiters expect.",
    quote:
      "[TBD] Anonymized plastics practice quote — time savings and recovery lift after moving IDR in house to Kronos.",
  },
  {
    slug: "anesthesia",
    name: "Anesthesia",
    shortName: "Anesthesia",
    credibility:
      "Anesthesia NSA disputes require time unit precision and facility context that batched filings consistently miss.",
    caseProfile: "Typical claim range $800–$4,000 per CPT · Win rate [TBD]%",
    attorneyShortcuts:
      "Attorneys batch anesthesia time units across cases, triggering IDR rejections before arbitration even begins.",
    kronosApproach:
      "Each anesthesia claim filed with accurate time units, base units, and modifier documentation per federal IDR rules.",
    quote:
      "[TBD] Anonymized anesthesia group quote — recovery rate improvement vs prior attorney handling.",
  },
  {
    slug: "general-surgery",
    name: "General Surgery",
    shortName: "General Surgery",
    credibility:
      "General surgery OON claims at in network ASCs and hospitals are systematically underpaid — and systematically winnable at IDR.",
    caseProfile: "Typical claim range $1,500–$6,000 per CPT · Win rate [TBD]%",
    attorneyShortcuts:
      "Volume practices get templated attorney filings with no procedure specific documentation.",
    kronosApproach:
      "Selective general surgery coverage with the same one CPT per claim standard. Operative detail on every submission.",
    quote:
      "[TBD] Anonymized general surgery practice quote — afternoon billing team time recovered after full handover.",
  },
];

export const PRIMARY_SPECIALTY_LABELS = SPECIALTIES.map((s) => s.name);
