export type FaqItem = {
  question: string;
  answer: string;
  highlightAnswer?: boolean;
};

export type FaqCategory = {
  id: string;
  title: string;
  items: FaqItem[];
};

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What is the No Surprises Act and how does it affect my practice?",
    answer:
      "The No Surprises Act protects patients from surprise bills for out of network care and creates a federal Independent Dispute Resolution process. Providers can challenge low insurer payments through IDR. We manage that process for you.",
  },
  {
    question: "Why switch from an attorney to Kronos Revenue?",
    answer:
      "Attorneys take 20% of every recovery and batch CPT codes — a shortcut that loses at IDR. We quote a consultative fee to your volume, file one claim per CPT, and are built by a surgeon who knows your specialty coding.",
    highlightAnswer: true,
  },
  {
    question: "How long does the IDR process take?",
    answer:
      "Timelines vary by case complexity and portal volume. We track all deadlines and target under 5 days from EOB to IDR submission.",
  },
  {
    question: "What types of cases do you handle?",
    answer:
      "We handle out of network payment disputes across orthopedic, neurosurgery, spine, plastic, anesthesia, and general surgery. Our team manages negotiation, IDR submission, and post arbitration follow up.",
  },
  {
    question: "How do I get started with Kronos Revenue?",
    answer:
      "Get a free NSA IDR review online or call (914) 705 6830. We assess your disputes and show you what you keep per dollar won — versus a 20% attorney contingency.",
    highlightAnswer: true,
  },
  {
    question: "How do I choose between Sydra and Kronos Full-Service?",
    answer:
      "Choose by who operates the workflow. Sydra fits teams that want to run NSA IDR software in house. Kronos Full-Service on this site handles every claim when you want zero biller time on IDR. Sydra + Kronos Support is the middle path — software plus a specialist backstop.",
    highlightAnswer: true,
  },
  {
    question: "How is Kronos Revenue priced for NSA IDR?",
    answer:
      "Quoted to your volume — not a contingency cut of every recovery. Most practices keep roughly nine in ten dollars won at IDR, plus more disputes won than with batched attorney filings. We quote on a consultation call.",
    highlightAnswer: true,
  },
];

export const SWITCHING_FAQS: FaqItem[] = [
  {
    question: "How does the handover from my attorney work?",
    answer:
      "We handle transition documentation and coordinate in flight cases. Most NSA attorneys are happy to step back from IDR work — it is a low margin side practice for them.",
    highlightAnswer: true,
  },
  {
    question: "Will my attorney push back?",
    answer:
      "Rarely. IDR is administrative work most litigation firms do not want to scale. Your relationship for other legal matters stays intact.",
    highlightAnswer: true,
  },
  {
    question: "What about in flight cases?",
    answer:
      "We can take over active IDR disputes when deadlines allow and complete submissions or responses on your behalf.",
    highlightAnswer: true,
  },
  {
    question: "Can I try Kronos before fully switching?",
    answer:
      "Yes. Week 2 of onboarding runs your first 5 claims in parallel with your current process as a proof of concept before full handover.",
    highlightAnswer: true,
  },
];

export const PRICING_FAQS: FaqItem[] = [
  {
    question: "Why are there no published rates on the website?",
    answer:
      "Done for you pricing depends on your volume, specialty, and how much your current attorney is leaving on the table. A flat published number would be wrong for most practices. We quote on a consultation call.",
    highlightAnswer: true,
  },
  {
    question: "What does the monthly retainer cover?",
    answer:
      "Active claim management, EOB parsing, IDR filing, tracking, negotiation, and monthly reporting for your practice.",
    highlightAnswer: true,
  },
  {
    question: "What if I have a low volume month?",
    answer:
      "Month to month engagements are available. Per claim fees scale with volume so low months cost less.",
    highlightAnswer: true,
  },
  {
    question: "How does Kronos pricing compare to a 20% attorney?",
    answer:
      "Attorneys take twenty cents on every dollar you recover — indefinitely. We quote a consultative fee to your volume. Most clients keep about ninety cents per dollar won, not eighty — before counting IDR disputes we win that contingency firms lose.",
    highlightAnswer: true,
  },
];

export const CONTRACT_FAQS: FaqItem[] = [
  {
    question: "What is the contract term length?",
    answer:
      "Month to month engagements are available. No long term lock in required.",
    highlightAnswer: true,
  },
  {
    question: "What are the exit clauses?",
    answer:
      "You can exit with reasonable notice. We provide transition documentation for any in flight claims.",
    highlightAnswer: true,
  },
  {
    question: "Do you sign a BAA?",
    answer:
      "Yes. A Business Associate Agreement is signed during Week 1 onboarding before we access any PHI.",
    highlightAnswer: true,
  },
  {
    question: "Who owns the claim data?",
    answer:
      "Your practice retains ownership of all clinical and billing data. Kronos operates as your IDR agent under the engagement letter.",
    highlightAnswer: true,
  },
];

export const PROCESS_FAQS: FaqItem[] = [
  {
    question: "How long does onboarding take?",
    answer:
      "Four weeks from BAA signature to full handover, with a proof of concept in Week 2.",
    highlightAnswer: true,
  },
  {
    question: "What is the ongoing communication cadence?",
    answer:
      "Live support 9–5 M–F, 24 hour email response, and a monthly report with quarterly review calls.",
    highlightAnswer: true,
  },
  {
    question: "Who is on my file?",
    answer:
      "A dedicated RCM specialist trained by Dr. Abrams, with escalation to Heisha Rivera (Director of Revenue Cycle) and Dr. Abrams for high value cases.",
    highlightAnswer: true,
  },
  {
    question: "What do I need to provide to get started?",
    answer:
      "Forward EOBs or grant secure EMR access, share your specialty mix and provider count, and sign the BAA and engagement letter.",
    highlightAnswer: true,
  },
];

export const RECOVERY_FAQS: FaqItem[] = [
  {
    question: "What happens if a claim loses at IDR?",
    answer:
      "We review the determination, advise on appeal options where available, and factor outcomes into your quarterly recovery review.",
    highlightAnswer: true,
  },
  {
    question: "Can a claim be re filed?",
    answer:
      "In some cases yes, depending on the determination basis and statutory windows. We advise case by case.",
    highlightAnswer: true,
  },
  {
    question: "What is your typical win rate?",
    answer:
      "We publish recovery rates on our Results page. Exact figures are confirmed during your free case review using your claim data.",
    highlightAnswer: true,
  },
  {
    question: "How is Kronos different from batched attorney filing?",
    answer:
      "We file one claim per CPT code — the way federal IDR was designed. Batched filings are the most common reason generalist firms lose.",
    highlightAnswer: true,
  },
];

export const SECURITY_FAQS: FaqItem[] = [
  {
    question: "Is Kronos Revenue HIPAA compliant?",
    answer:
      "Yes. We sign a BAA with every practice, encrypt data in transit and at rest, and restrict PHI access to assigned team members only.",
    highlightAnswer: true,
  },
  {
    question: "Who can see our PHI?",
    answer:
      "Only the RCM specialists assigned to your account and leadership for quality review. No PHI in logs or third party analytics.",
    highlightAnswer: true,
  },
  {
    question: "How is data handled during onboarding?",
    answer:
      "Secure EMR access or encrypted EOB transfer. All access is documented under the BAA signed in Week 1.",
    highlightAnswer: true,
  },
  {
    question: "When should we use Sydra vs Kronos Revenue vs Sydra + Kronos Support?",
    answer:
      "Choose by who operates the workflow, not volume alone. Sydra Self-Serve fits teams comfortable running software in house. Sydra + Kronos Support adds live specialists and escalation on tricky cases. Kronos Full-Service on this site handles every claim end to end when you want zero biller time on IDR. See plans at sydrahealth.com.",
    highlightAnswer: true,
  },
  {
    question: "Is Sydra a better fit if we want to run claims in house?",
    answer:
      "If your team wants to operate NSA IDR software themselves, Sydra offers the same specialty depth as a self serve platform — prep in under 5 minutes per claim instead of 30. For software plus a Kronos specialist on call, see Sydra + Kronos Support at sydrahealth.com.",
    highlightAnswer: true,
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
    highlightAnswer: true,
  },
  {
    question: "Which specialties qualify?",
    answer:
      "Orthopedic surgery, neurosurgery, spine, plastic surgery, anesthesia, and general surgery are our primary specialties.",
    highlightAnswer: true,
  },
  {
    question: "How long does a case review take?",
    answer:
      "Most practices receive initial findings within one business day after we receive sample claims and payer correspondence.",
    highlightAnswer: true,
  },
  {
    question: "Do I need to sign a long term contract?",
    answer:
      "No. The review is free with no commitment. You choose which disputes you want us to pursue after you see the numbers.",
    highlightAnswer: true,
  },
];

export const CONTACT_FAQS: FaqItem[] = [
  {
    question: "How do I request a free case review?",
    answer:
      "Use the form on this page, call (914) 705 6830, or email intake@kronosrevenue.com. We respond within one business day.",
    highlightAnswer: true,
  },
  {
    question: "What should I prepare for the first call?",
    answer:
      "Recent EOBs, a sample operative report, and your top underpaid CPT codes help us estimate recovery quickly.",
    highlightAnswer: true,
  },
  {
    question: "Where is Kronos Revenue located?",
    answer:
      "244 Westchester Avenue, Suite 209, West Harrison, NY 10604. We serve providers nationwide.",
    highlightAnswer: true,
  },
];

export const SPECIALTY_FAQS: FaqItem[] = [
  {
    question: "Which surgical specialties does Kronos Revenue support for NSA IDR?",
    answer:
      "We support orthopedic, neurosurgery, spine, plastic, anesthesia, and general surgery practices. Every federal IDR submission is one claim per CPT, specialty coded by RCM specialists trained on your procedure set.",
    highlightAnswer: true,
  },
  {
    question: "Why does specialty coding matter at federal IDR?",
    answer:
      "Arbiters expect operative detail and correct CPT separation. Generalist attorneys batch codes, which violates federal IDR rules and loses awards your practice earned. We file each eligible CPT individually.",
    highlightAnswer: true,
  },
  {
    question: "Can Kronos handle high value neurosurgery and spine claims?",
    answer:
      "Yes. Kronos was founded by a board certified neurosurgeon. Complex cranial, spine, and instrumentation claims receive the clinical depth IDR requires, not boilerplate attorney letters.",
    highlightAnswer: true,
  },
  {
    question: "What is a typical claim range by specialty?",
    answer:
      "Ranges vary by CPT and market. Orthopedic claims often fall between $2,000 and $8,000 per CPT; neurosurgery and spine claims can run higher. We confirm estimates on your free case review using real EOBs.",
    highlightAnswer: true,
  },
  {
    question: "How do I get a free NSA IDR review for my specialty?",
    answer:
      "Submit the case review form or call (914) 705 6830. Share sample EOBs and your specialty mix. We respond within one business day with what you could recover versus your current attorney or biller.",
    highlightAnswer: true,
  },
];

/** @deprecated Legacy service page FAQs — kept for redirect source pages if cached */
export const NSA_FAQS: FaqItem[] = SWITCHING_FAQS;
export const ASC_FAQS: FaqItem[] = PROCESS_FAQS;
export const SYNAPTIX_FAQS: FaqItem[] = PROCESS_FAQS;
export const HOSPITAL_FAQS: FaqItem[] = PROCESS_FAQS;
