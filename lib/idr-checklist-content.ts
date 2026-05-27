export const IDR_CHECKLIST_SECTIONS = [
  {
    title: "1. Eligibility verification",
    items: [
      "Claim is for an out of network item or service covered under the NSA",
      "The plan is not excluded (no grandfathered plans, short term plans, retiree only plans)",
      "Service was provided on or after January 1, 2022",
      "The insurer initial payment or denial has been received",
      "The 30 business day open negotiation period has started (send Open Negotiation Notice first)",
      "Open negotiation ended without agreement OR 30 business days elapsed without response",
      "No cooling off period is active for this CPT code and payer combination (90 calendar days from a prior determination on the same code and payer)",
    ],
  },
  {
    title: "2. Documents to have on file",
    items: [
      "Original EOB with remark codes",
      "Corrected EOB if applicable",
      "All claim forms (original and corrected versions)",
      "Open Negotiation Notice sent to payer with proof of delivery and date",
      "Notice of IDR Initiation document",
      "Operative note or clinical documentation supporting the CPT code",
      "Provider CV or credentials supporting market rate justification",
      "Payer qualifying payment amount (QPA) from the EOB or payer correspondence",
    ],
  },
  {
    title: "3. CPT filing rules",
    items: [
      "File one claim per CPT code — do not batch multiple CPT codes unless batching conditions met",
      "Batching permitted only when: same provider, same payer, same Category I CPT range",
      "Anesthesia services under the same CPT code may be bundled per current rules",
      "All add on CPT codes are filed as part of the primary procedure claim they modify",
    ],
  },
  {
    title: "4. Portal submission requirements",
    items: [
      "Certified IDR entity (IDRE) selected (or agreed within 3 business days)",
      "Federal IDRE portal submission completed at cms.gov/nosurprises",
      "Total amount sought entered for each CPT code",
      "Supporting documentation uploaded: operative note, CV, market comparison, prior determinations",
      "IDRE administrative fee paid ($50 per dispute — confirm current rate before filing)",
    ],
  },
  {
    title: "5. Post submission tracking",
    items: [
      "Acknowledgment from IDRE received",
      "30 business day determination window noted in tracking system",
      "Favorable: follow up on payment within payer required timeline",
      "Adverse: review determination reason, assess re file after 90 day cooling off period",
    ],
  },
] as const;

export const IDR_CHECKLIST_REFERENCES = [
  "No Surprises Act: Public Law 116-260, Division BB, Title I",
  "Federal IDR regulations: 45 CFR Part 149",
  "CMS IDR guidance: cms.gov/nosurprises",
  "Federal IDRE portal: portal.independent-dispute-resolution.cms.gov",
];
