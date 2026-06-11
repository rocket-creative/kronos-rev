import type { FaqItem } from "@/lib/faqs";
import { IDR_TIMELINE_FAQ_ANSWER } from "@/lib/idr-timeline";

/** The 12 buyer question queries from the site upgrade brief. */

export const EDUCATION_FAQS: FaqItem[] = [
  {
    question: "What is independent dispute resolution under the No Surprises Act?",
    answer:
      "Independent dispute resolution (IDR) is the federal arbitration process created by the No Surprises Act. Since January 2022, out of network providers in protected situations can dispute insurer underpayments. Each side submits a payment offer with evidence. A certified IDR entity picks one offer. The decision binds both parties. Providers won 88% of federal IDR disputes in the first half of 2025, per CMS data released January 2026.",
  },
  {
    question: "How do I initiate open negotiation with an insurer?",
    answer:
      "Send a written Open Negotiation Notice to the insurer within 30 business days of the initial payment or denial. The notice must identify the claim, the disputed amount, and that you are initiating open negotiation under the No Surprises Act. Negotiation runs 30 business days. Document proof of delivery and the date sent. Missing the 30 business day window to initiate forfeits the IDR pathway for that claim.",
  },
  {
    question: "What is a qualifying payment amount and how is the QPA calculated?",
    answer:
      "The qualifying payment amount (QPA) is the insurer benchmark used to calculate the initial out of network payment. CMS requires payers to calculate QPA using the median in network rate for the same or similar service in the same geographic area, with specific rules for air ambulance and other service types. The QPA appears on the EOB or in payer correspondence. CMS data shows 87% of IDR award amounts exceeded the QPA in the first half of 2025.",
  },
  {
    question:
      "What evidence wins at IDR (FAIR Health benchmarks, case complexity, prior contracted rates, physician training)?",
    answer:
      "Arbitrators weigh several factors: FAIR Health or other market rate benchmarks for the specific CPT code, case complexity and clinical circumstances documented in the operative note, physician training and credentials, prior contracted rates with the payer where available, and whether the claim was filed as one dispute per CPT code. Kronos prepares all of these on every submission.",
  },
  {
    question: "How long does the IDR process take?",
    answer: IDR_TIMELINE_FAQ_ANSWER,
  },
  {
    question: "What happens after the IDR determination?",
    answer:
      "The certified IDR entity issues a binding determination selecting one party's offer. Payment is due within 30 calendar days. The losing party pays the IDRE administrative fee. If the determination is favorable, follow up with the payer to ensure payment posts correctly. If adverse, review the determination basis and assess whether re filing is available after the 90 day cooling off period.",
  },
  {
    question: "Federal IDR vs state surprise billing law, which applies?",
    answer:
      "Federal IDR under the No Surprises Act applies to most employer sponsored and marketplace plans. In states with their own surprise billing laws including Texas, New York, California, New Jersey, and Florida, state law may govern disputes involving fully insured state regulated plans. Kronos Revenue navigates both federal and state pathways and confirms which applies before filing.",
  },
  {
    question: "What claims are eligible for federal IDR?",
    answer:
      "Eligible claims include out of network items or services covered under the NSA where the insurer issued an initial payment or denial, open negotiation was initiated within 30 business days, and no active cooling off period applies for that CPT code and payer combination. Grandfathered plans, short term plans, and retiree only plans are excluded. Kronos verifies eligibility before every submission.",
  },
  {
    question: "What is batching and why does it lose disputes?",
    answer:
      "Batching combines multiple CPT codes into a single IDR submission. Federal IDR requires one claim per CPT code in most cases. When codes with different market benchmarks are batched, the composite offer does not map to any prior determination. Arbitrators resolve that ambiguity against the initiating party. A 2023 federal court ruling found improper batching was forcing providers out of recovery they were entitled to pursue.",
  },
  {
    question: "Can I still negotiate after initiating IDR?",
    answer:
      "Yes. Parties may continue negotiating until the certified IDR entity issues a binding determination. Many disputes settle during the IDR process before a final decision. Initiating IDR does not forfeit your right to reach agreement with the payer before the determination.",
  },
  {
    question: "How is the certified IDR entity chosen?",
    answer:
      "After a Notice of IDR Initiation is filed, parties have 3 business days to mutually agree on a certified IDR entity (IDRE). If they cannot agree, CMS assigns one. The IDRE must be certified under federal regulations and cannot have a conflict of interest with either party.",
  },
  {
    question: "What does IDR cost to file?",
    answer:
      "The IDRE charges an administrative fee per dispute, currently $50 per side under the 2026 federal fee reduction rule. Both parties pay the fee when filing. The losing party's fee is not refunded. The 2026 rule cut filing fees significantly, removing a barrier that kept smaller practices from filing. Kronos quotes a consultative service fee separate from the IDRE administrative fee.",
  },
];

/** FAQs for /what-is-idr page and schema (questions 1, 4, 5, 7, 8, 10). */
export const WHAT_IS_IDR_FAQS: FaqItem[] = [
  EDUCATION_FAQS[0],
  EDUCATION_FAQS[3],
  EDUCATION_FAQS[4],
  EDUCATION_FAQS[6],
  EDUCATION_FAQS[7],
  EDUCATION_FAQS[9],
];

/** FAQs for /faq IDR process category (questions 2, 3, 6, 9, 11, 12). */
export const IDR_PROCESS_FAQS: FaqItem[] = [
  EDUCATION_FAQS[1],
  EDUCATION_FAQS[2],
  EDUCATION_FAQS[5],
  EDUCATION_FAQS[8],
  EDUCATION_FAQS[10],
  EDUCATION_FAQS[11],
];
