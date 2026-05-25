export type FaqItem = {
  question: string;
  answer: string;
  /** Wrap answer in review highlight when true */
  highlightAnswer?: boolean;
};

export const HOME_FAQS: FaqItem[] = [
  {
    question: "What is the No Surprises Act and how does it affect my practice?",
    answer:
      "The No Surprises Act protects patients from surprise bills for out of network care and creates a federal Independent Dispute Resolution process. Providers can challenge low insurer payments through IDR. We manage that process for you.",
  },
  {
    question: "What is Independent Dispute Resolution (IDR)?",
    answer:
      "IDR is a federal arbitration process where a neutral party reviews your payment dispute with an insurer and makes a binding determination. We handle the entire process from submission through final award.",
  },
  {
    question: "How long does the IDR process take?",
    answer:
      "Timelines vary by case complexity and portal volume. We track all deadlines and ensure your case moves through negotiation and IDR without costly delays.",
  },
  {
    question: "What types of cases do you handle?",
    answer:
      "We handle out of network payment disputes, including emergency and nonemergency care, across specialties. Our team manages negotiation, IDR submission, and post arbitration follow up.",
  },
  {
    question: "How do I get started with Kronos Revenue?",
    answer:
      "Call us at (914) 705 6830 or request a free revenue review online. We assess your claims, outline recovery potential, and explain next steps at no cost.",
    highlightAnswer: true,
  },
  {
    question: "Does Kronos Revenue work on contingency?",
    answer:
      "We use a flat fee per CPT code, not a percentage of recovery. You know the cost before we file, and every operative report is reviewed before submission.",
    highlightAnswer: true,
  },
];

export const FREE_CLAIM_FAQS: FaqItem[] = [
  {
    question: "What is included in a free claim review?",
    answer:
      "We review your out of network surgical claims, flag underpaid CPT codes, and estimate what insurers still owe. You receive a clear summary before we file any dispute.",
    highlightAnswer: true,
  },
  {
    question: "Which specialties qualify for a free claim review?",
    answer:
      "Orthopedic surgery, neurosurgery, spine, and plastic surgery are our primary specialties. We also review claims for general surgery, GI, and other out of network surgical subspecialists performing services at in network facilities.",
    highlightAnswer: true,
  },
  {
    question: "How long does a claim review take?",
    answer:
      "Most practices receive initial findings within a few business days after we receive sample claims and payer correspondence.",
    highlightAnswer: true,
  },
  {
    question: "Do I need to sign a long term contract?",
    answer:
      "No. The review is free with no commitment. You choose which disputes you want us to pursue after you see the numbers.",
    highlightAnswer: true,
  },
  {
    question: "What payers do you review claims against?",
    answer:
      "United, Cigna, Anthem, Aetna, and other commercial plans that short pay out of network surgical claims under federal rules.",
    highlightAnswer: true,
  },
  {
    question: "How do I submit claims for review?",
    answer:
      "Complete the form on this page or call (914) 705 6830. We will request sample EOBs and operative reports to begin.",
    highlightAnswer: true,
  },
];

export const NSA_FAQS: FaqItem[] = [
  {
    question: "What is No Surprises Act dispute resolution?",
    answer:
      "When negotiation fails, providers can initiate federal IDR so a neutral arbiter sets payment. We file, document, and follow each case through final determination.",
    highlightAnswer: true,
  },
  {
    question: "Which insurers does Kronos Revenue dispute most often?",
    answer:
      "United, Cigna, Anthem, and Aetna frequently short pay out of network surgical claims. We build payer specific arguments for each dispute.",
    highlightAnswer: true,
  },
  {
    question: "What is your fee structure for NSA disputes?",
    answer:
      "Flat fee per CPT code, never a percentage of recovery. Fees are confirmed before filing so you can forecast cost per case.",
    highlightAnswer: true,
  },
  {
    question: "Do you review operative reports before filing?",
    answer:
      "Yes. Every dispute includes operative report review so clinical complexity and documentation support your payment offer.",
    highlightAnswer: true,
  },
  {
    question: "Can you manage cases already in IDR?",
    answer:
      "Yes. We can take over in flight disputes when deadlines allow and complete submissions or responses on your behalf.",
    highlightAnswer: true,
  },
  {
    question: "How do I start an NSA dispute with Kronos Revenue?",
    answer:
      "Call (914) 705 6830 or submit the form on this page. We confirm eligibility, timelines, and documents needed to open each dispute.",
    highlightAnswer: true,
  },
];

export const ASC_FAQS: FaqItem[] = [
  {
    question: "Can an out of network surgeon get paid when the ASC is in network?",
    answer:
      "Yes. The No Surprises Act and related rules can protect provider payment when the facility is in network but the physician is not. We pursue underpayments through negotiation and IDR.",
    highlightAnswer: true,
  },
  {
    question: "Which specialties use Kronos at in network ASCs?",
    answer:
      "Primary specialties are orthopedic surgery, neurosurgery, spine, and plastic surgery. We also work with GI, general surgery, pain management, ENT, and ophthalmology providers nationwide.",
    highlightAnswer: true,
  },
  {
    question: "How is billing different when only the provider is out of network?",
    answer:
      "Payers often apply facility rates to the center while underpaying the physician. We document medical necessity, contracts, and market rates for the provider portion.",
    highlightAnswer: true,
  },
  {
    question: "What documents do you need to open a dispute?",
    answer:
      "Operative reports, EOBs, contracts, and payer correspondence. We provide a checklist after your free review.",
    highlightAnswer: true,
  },
  {
    question: "Do you charge a percentage of recovery?",
    answer:
      "No. We use a flat fee per CPT code with full case management from start to finish.",
    highlightAnswer: true,
  },
  {
    question: "How quickly can we begin?",
    answer:
      "Most practices start within days of the free review. Call (914) 705 6830 to schedule.",
    highlightAnswer: true,
  },
];

export const SYNAPTIX_FAQS: FaqItem[] = [
  {
    question: "Does Kronos Revenue bill Synaptix concussion sessions?",
    answer:
      "Yes. We code sessions, submit claims, follow payers, and file No Surprises Act disputes when plans short pay Synaptix program visits.",
    highlightAnswer: true,
  },
  {
    question: "Which practices use Synaptix billing support?",
    answer:
      "Neurosurgery, orthopedics, neurology, PM&R, and sports medicine groups running licensed Synaptix concussion programs.",
    highlightAnswer: true,
  },
  {
    question: "Do you know Synaptix documentation requirements?",
    answer:
      "We align CPT selection and medical record support with Synaptix protocol so claims match payer medical policy.",
    highlightAnswer: true,
  },
  {
    question: "Can you handle prior authorizations for concussion care?",
    answer:
      "We support authorization tracking and appeals when payers deny program visits.",
    highlightAnswer: true,
  },
  {
    question: "What is the pricing model?",
    answer:
      "Flat fee per CPT code with transparent reporting on claims filed and dollars recovered.",
    highlightAnswer: true,
  },
  {
    question: "How do Synaptix licensees get started?",
    answer:
      "Submit the form on this page or call (914) 705 6830. We review your program volume and payer mix first.",
    highlightAnswer: true,
  },
];

export const HOSPITAL_FAQS: FaqItem[] = [
  {
    question: "Can one partner manage OON billing for many facilities?",
    answer:
      "Yes. We centralize strategy, filing, and reporting for hospital groups and ASC management companies across all locations.",
    highlightAnswer: true,
  },
  {
    question: "How do you report results to leadership?",
    answer:
      "We provide consistent IDR outcomes, recovery totals, and payer trends so operations and finance teams see performance by site.",
    highlightAnswer: true,
  },
  {
    question: "Do you support both hospital and ASC settings?",
    answer:
      "Yes. We work with health systems, ASC management firms, and multi specialty groups nationwide.",
    highlightAnswer: true,
  },
  {
    question: "Is pricing the same for enterprise clients?",
    answer:
      "We use flat fee per CPT code at scale with a single point of contact for every facility.",
    highlightAnswer: true,
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Onboarding timelines depend on facility count and EHR access. Most groups begin phased rollout within weeks.",
    highlightAnswer: true,
  },
  {
    question: "Who should contact Kronos for a partnership discussion?",
    answer:
      "Revenue cycle leaders, ASC operators, and hospital finance executives can call (914) 705 6830 or use the form on this page.",
    highlightAnswer: true,
  },
];

// Email reference below: update to sales@sydrahealth.com — pending alias setup
export const CONTACT_FAQS: FaqItem[] = [
  {
    question: "How do I request a free revenue review?",
    answer:
      "Use the contact form, call (914) 705 6830, or email info@kronoshealth.co. We respond within one business day.",
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
  {
    question: "Do you work with single physician practices?",
    answer:
      "Yes. Solo surgeons and large groups use the same flat fee per CPT code model.",
    highlightAnswer: true,
  },
  {
    question: "Is there a cost for the initial consultation?",
    answer:
      "No. The revenue review is free with no obligation to proceed.",
    highlightAnswer: true,
  },
];
