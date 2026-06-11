/** Canonical NSA IDR timeline copy. Single source of truth sitewide. */

export const IDR_TIMELINE_FAQ_ANSWER =
  "The clock starts when the insurer issues its initial payment or denial. From that date you have 30 business days to initiate open negotiation, and skipping this step forfeits the claim. Negotiation runs 30 business days. If no agreement is reached, either party has 4 business days to initiate federal IDR. The certified IDR entity then issues a binding determination, and payment is due within 30 calendar days. Kronos Revenue targets under 5 business days from EOB receipt to filing and tracks every window so nothing expires.";

export type IdrTimelineStep = {
  title: string;
  window: string;
  body: string;
};

export const IDR_TIMELINE_STEPS: IdrTimelineStep[] = [
  {
    title: "Initial payment or denial",
    window: "Insurer issues within 30 calendar days of claim",
    body: "The clock starts when the insurer pays or denies. This initial amount is usually based on the qualifying payment amount (QPA).",
  },
  {
    title: "Open negotiation",
    window: "30 business days to initiate, then 30 business days to negotiate",
    body: "Either party sends a written Open Negotiation Notice within 30 business days of the initial payment or denial. Skipping this step forfeits the claim. Negotiation runs 30 business days.",
  },
  {
    title: "Federal IDR initiation",
    window: "4 business days after negotiation closes",
    body: "If no agreement is reached, either party has 4 business days to file a Notice of IDR Initiation with a certified IDR entity.",
  },
  {
    title: "IDRE selection",
    window: "3 business days",
    body: "Parties agree on a certified IDR entity within 3 business days. If they cannot agree, CMS assigns one.",
  },
  {
    title: "Determination",
    window: "IDRE issues binding decision",
    body: "The certified IDR entity reviews both offers and supporting evidence. Final offer arbitration: the IDRE picks one offer. No splits.",
  },
  {
    title: "Payment",
    window: "30 calendar days after determination",
    body: "The winning party receives payment within 30 calendar days of the binding determination.",
  },
];

export const IDR_INITIATION_WINDOW = "4 business days";
export const OPEN_NEGOTIATION_INITIATE_WINDOW = "30 business days";
export const OPEN_NEGOTIATION_PERIOD = "30 business days";
export const PAYMENT_AFTER_DETERMINATION = "30 calendar days";
