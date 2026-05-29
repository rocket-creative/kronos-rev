export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

/** Schema + homepage FAQ (KRONOS-MASTER Part 1C). */
export const SCHEMA_HOME_FAQS: FaqItem[] = [
  {
    question: "What is No Surprises Act independent dispute resolution?",
    answer:
      "The No Surprises Act established a federal Independent Dispute Resolution process allowing out of network providers to dispute underpaid claims against insurers. An independent certified IDR entity reviews both payment offers and issues a binding determination. Providers won 88% of IDR disputes in the first half of 2025, with 87% of award amounts exceeding the insurer qualifying payment amount, per CMS data released January 2026.",
  },
  {
    question: "Why use Kronos Revenue instead of an attorney for NSA IDR?",
    answer:
      "Attorneys take 20% of every IDR recovery as a contingency fee, leaving providers roughly 80 cents on the dollar. Kronos Revenue quotes a consultative fee to your volume. Most practices keep approximately 90 cents or more per dollar won. Kronos files one claim per CPT code, the way federal IDR was designed, while generalist attorneys frequently batch codes in ways that reduce arbitration outcomes.",
  },
  {
    question: "Which surgical specialties does Kronos Revenue serve?",
    answer:
      "Kronos Revenue handles NSA IDR for orthopedic surgery, neurosurgery, spine surgery, plastic surgery, anesthesiology, and general surgery. Every federal IDR submission is prepared by a specialist trained in your CPT code set.",
  },
  {
    question: "How long does the NSA IDR process take?",
    answer:
      "After open negotiation ends without agreement, either party has 30 business days to initiate IDR. The certified IDR entity has 30 business days to issue a payment determination. Kronos Revenue targets under 5 business days from EOB receipt to IDR portal submission.",
  },
  {
    question: "What states does Kronos Revenue support?",
    answer:
      "Kronos Revenue actively serves practices in Texas, California, New York, New Jersey, Florida, and Arizona. In states with bifurcated billing laws including TX, NY, CA, NJ, and FL, state law may govern disputes involving fully insured state regulated plans. Kronos Revenue navigates both federal and state pathways.",
  },
];

export const HOME_FAQS: FaqItem[] = SCHEMA_HOME_FAQS;

export const SWITCHING_FAQS: FaqItem[] = [
  {
    question: "How does the handover from my attorney work?",
    answer:
      "We handle transition documentation and coordinate in flight cases. Most NSA attorneys are happy to step back from IDR work — it is a low margin side practice for them.",
  },
  {
    question: "Will my attorney push back?",
    answer:
      "Rarely. IDR is administrative work most litigation firms do not want to scale. Your relationship for other legal matters stays intact.",
  },
  {
    question: "What about in flight cases?",
    answer:
      "We can take over active IDR disputes when deadlines allow and complete submissions or responses on your behalf.",
  },
  {
    question: "Can I try Kronos before fully switching?",
    answer:
      "Yes. Week 2 of onboarding runs your first 5 claims in parallel with your current process as a proof of concept before full handover.",
  },
];

export const PRICING_FAQS: FaqItem[] = [
  {
    question: "Why are there no published rates on the website?",
    answer:
      "Done for you pricing depends on your volume, specialty, and how much your current attorney is leaving on the table. A flat published number would be wrong for most practices. We quote on a consultation call.",
  },
  {
    question: "What does the monthly retainer cover?",
    answer:
      "Active claim management, EOB parsing, IDR filing, tracking, negotiation, and monthly reporting for your practice.",
  },
  {
    question: "What if I have a low volume month?",
    answer:
      "Month to month engagements are available. Per claim fees scale with volume so low months cost less.",
  },
  {
    question: "How does Kronos pricing compare to a 20% attorney?",
    answer:
      "Attorneys take twenty cents on every dollar you recover — indefinitely. We quote a consultative fee to your volume. Most clients keep about ninety cents per dollar won, not eighty — before counting IDR disputes we win that contingency firms lose.",
  },
];

export const CONTRACT_FAQS: FaqItem[] = [
  {
    question: "What is the contract term length?",
    answer:
      "Month to month engagements are available. No long term lock in required.",
  },
  {
    question: "What are the exit clauses?",
    answer:
      "You can exit with reasonable notice. We provide transition documentation for any in flight claims.",
  },
  {
    question: "Do you sign a BAA?",
    answer:
      "Yes. A Business Associate Agreement is signed during Week 1 onboarding before we access any PHI.",
  },
  {
    question: "Who owns the claim data?",
    answer:
      "Your practice retains ownership of all clinical and billing data. Kronos operates as your IDR agent under the engagement letter.",
  },
];

export const PROCESS_FAQS: FaqItem[] = [
  {
    question: "How long does onboarding take?",
    answer:
      "Four weeks from BAA signature to full handover, with a proof of concept in Week 2.",
  },
  {
    question: "What is the ongoing communication cadence?",
    answer:
      "Live support 9–5 M–F, 24 hour email response, and a monthly report with quarterly review calls.",
  },
  {
    question: "Who is on my file?",
    answer:
      "A dedicated RCM specialist trained by Dr. Abrahams, with escalation to Heisha Rivera (Director of Revenue Cycle) and Dr. Abrahams for high value cases.",
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "Forward EOBs or grant secure EMR access, share your specialty mix and provider count, and sign the BAA and engagement letter.",
  },
];

export const RECOVERY_FAQS: FaqItem[] = [
  {
    question: "What happens if a claim loses at IDR?",
    answer:
      "We review the determination, advise on appeal options where available, and factor outcomes into your quarterly recovery review.",
  },
  {
    question: "Can a claim be re filed?",
    answer:
      "In some cases yes, depending on the determination basis and statutory windows. We advise case by case.",
  },
  {
    question: "What is your typical win rate?",
    answer:
      "We publish recovery rates on our Results page. Exact figures are confirmed during your free case review using your claim data.",
  },
  {
    question: "How is Kronos different from batched attorney filing?",
    answer:
      "We file one claim per CPT code — the way federal IDR was designed. Batched filings are the most common reason generalist firms lose.",
  },
];

export const SECURITY_FAQS: FaqItem[] = [
  {
    question: "Is Kronos Revenue HIPAA compliant?",
    answer:
      "Yes. We sign a BAA with every practice, encrypt data in transit and at rest, and restrict PHI access to assigned team members only.",
  },
  {
    question: "Who can see our PHI?",
    answer:
      "Only the RCM specialists assigned to your account and leadership for quality review. No PHI in logs or third party analytics.",
  },
  {
    question: "How is data handled during onboarding?",
    answer:
      "Secure EMR access or encrypted EOB transfer. All access is documented under the BAA signed in Week 1.",
  },
  {
    question: "When should we use Sydra vs Kronos Revenue vs Sydra + Kronos Support?",
    answer:
      "Choose by who operates the workflow, not volume alone. Sydra Self-Serve fits teams comfortable running software in house. Sydra + Kronos Support adds live specialists and escalation on tricky cases. Kronos Full-Service on this site handles every claim end to end when you want zero biller time on IDR. See plans at sydrahealth.com.",
  },
  {
    question: "Is Sydra a better fit if we want to run claims in house?",
    answer:
      "If your team wants to operate NSA IDR software themselves, Sydra offers the same specialty depth as a self serve platform — prep in under 5 minutes per claim instead of 30. For software plus a Kronos specialist on call, see Sydra + Kronos Support at sydrahealth.com.",
  },
];

export const FAQ_CATEGORIES: FaqCategory[] = [
  { id: "switching", title: "Switching from an attorney", items: SWITCHING_FAQS },
  { id: "pricing", title: "Pricing", items: PRICING_FAQS },
  { id: "contracts", title: "Contracts", items: CONTRACT_FAQS },
  { id: "process", title: "Process", items: PROCESS_FAQS },
  { id: "recovery", title: "Recovery", items: RECOVERY_FAQS },
  { id: "security", title: "Security", items: SECURITY_FAQS },
];

export const ALL_FAQS: FaqItem[] = FAQ_CATEGORIES.flatMap((c) => c.items);

export const FREE_CLAIM_FAQS: FaqItem[] = [
  {
    question: "What is included in a free case review?",
    answer:
      "We review your out of network surgical claims, flag underpaid CPT codes, and estimate what insurers still owe. You receive a clear summary before we file any dispute.",
  },
  {
    question: "Which specialties qualify?",
    answer:
      "Orthopedic surgery, neurosurgery, spine, plastic surgery, anesthesia, and general surgery are our primary specialties.",
  },
  {
    question: "How long does a case review take?",
    answer:
      "Most practices receive initial findings within one business day after we receive sample claims and payer correspondence.",
  },
  {
    question: "Do I need to sign a long term contract?",
    answer:
      "No. The review is free with no commitment. You choose which disputes you want us to pursue after you see the numbers.",
  },
];

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: "How do I request a free case review?",
    answer:
      "Use the form on this page or call (914) 705 6830. We respond within one business day.",
  },
  {
    question: "What should I prepare for the first call?",
    answer:
      "Recent EOBs, a sample operative report, and your top underpaid CPT codes help us estimate recovery quickly.",
  },
  {
    question: "Where is Kronos Revenue located?",
    answer:
      "244 Westchester Avenue, Suite 209, West Harrison, NY 10604. We serve providers nationwide.",
  },
];

export const SPECIALTY_FAQS: FaqItem[] = [
  {
    question: "Which surgical specialties does Kronos Revenue support for NSA IDR?",
    answer:
      "We support orthopedic, neurosurgery, spine, plastic, anesthesia, and general surgery practices. Every federal IDR submission is one claim per CPT, specialty coded by RCM specialists trained on your procedure set.",
  },
  {
    question: "Why does specialty coding matter at federal IDR?",
    answer:
      "Arbiters expect operative detail and correct CPT separation. Generalist attorneys batch codes, which violates federal IDR rules and loses awards your practice earned. We file each eligible CPT individually.",
  },
  {
    question: "Can Kronos handle high value neurosurgery and spine claims?",
    answer:
      "Yes. Kronos was founded by a board certified neurosurgeon. Complex cranial, spine, and instrumentation claims receive the clinical depth IDR requires, not boilerplate attorney letters.",
  },
  {
    question: "What is a typical claim range by specialty?",
    answer:
      "Ranges vary by CPT and market. Orthopedic claims often fall between $2,000 and $8,000 per CPT; neurosurgery and spine claims can run higher. We confirm estimates on your free case review using real EOBs.",
  },
  {
    question: "How do I get a free NSA IDR review for my specialty?",
    answer:
      "Submit the case review form or call (914) 705 6830. Share sample EOBs and your specialty mix. We respond within one business day with what you could recover versus your current attorney or biller.",
  },
];

/** @deprecated Legacy service page FAQs — kept for redirect source pages if cached */
export const NSA_FAQS: FaqItem[] = SWITCHING_FAQS;
export const ASC_FAQS: FaqItem[] = PROCESS_FAQS;
export const SYNAPTIX_FAQS: FaqItem[] = PROCESS_FAQS;
export const HOSPITAL_FAQS: FaqItem[] = PROCESS_FAQS;
