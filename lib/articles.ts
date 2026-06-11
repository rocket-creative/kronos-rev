import type { NavLink } from "@/lib/navigation";

export type ArticleCategory = "Education" | "Attorney Comparison" | "Specialty" | "State";

export type ArticleAuthor = "Dr. John M. Abrahams, MD" | "Heisha Rivera";

export type Article = {
  slug: string;
  number: number;
  filename: string;
  title: string;
  description: string;
  date: string;
  author: ArticleAuthor;
  category: ArticleCategory;
  tags: string[];
  relatedLinks: NavLink[];
  medicallyReviewed: boolean;
};

const STATE_LINKS: NavLink[] = [
  { href: "/states/texas", label: "Texas IDR" },
  { href: "/states/new-york", label: "New York IDR" },
  { href: "/states/california", label: "California IDR" },
  { href: "/states/new-jersey", label: "New Jersey IDR" },
  { href: "/states/florida", label: "Florida IDR" },
  { href: "/states/arizona", label: "Arizona IDR" },
];

export const ARTICLES: Article[] = [
  {
    slug: "federal-idr-timeline-every-deadline",
    number: 1,
    filename: "01-federal-idr-timeline-every-deadline.md",
    title: "The Federal IDR Timeline: Every Deadline That Can Kill Your Claim",
    description:
      "The full federal IDR timeline for providers, from initial payment to binding determination, and the three windows where claims die.",
    date: "2026-06-15",
    author: "Heisha Rivera",
    category: "Education",
    tags: ["idr deadlines", "idr timeline", "open negotiation", "no surprises act"],
    relatedLinks: [
      { href: "/what-is-idr", label: "What is federal IDR?" },
      { href: "/how-we-work", label: "How we work" },
    ],
    medicallyReviewed: false,
  },
  {
    slug: "idr-attorney-vs-idr-service-true-cost",
    number: 2,
    filename: "02-idr-attorney-vs-idr-service-true-cost.md",
    title: "IDR Attorney vs IDR Service: The True Cost of 20 Percent",
    description:
      "Contingency attorneys take 20 percent of every IDR award. The full cost is higher. A surgeon's math on fees, batching losses, and unfiled claims.",
    date: "2026-06-15",
    author: "Dr. John M. Abrahams, MD",
    category: "Attorney Comparison",
    tags: ["idr attorney", "contingency fee", "no surprises act attorney", "idr service"],
    relatedLinks: [{ href: "/lawyer-problem", label: "IDR attorney alternative" }],
    medicallyReviewed: true,
  },
  {
    slug: "claims-your-attorney-never-files",
    number: 3,
    filename: "03-claims-your-attorney-never-files.md",
    title: "The Claims Your Attorney Never Files",
    description:
      "Contingency firms skip small IDR claims because the hours do not pay. Across a surgical year those unfiled claims usually exceed the fee itself.",
    date: "2026-06-15",
    author: "Heisha Rivera",
    category: "Attorney Comparison",
    tags: ["idr small claims", "unfiled claims", "idr attorney", "out of network recovery"],
    relatedLinks: [{ href: "/lawyer-problem", label: "IDR attorney alternative" }],
    medicallyReviewed: false,
  },
  {
    slug: "why-idr-disputes-get-rejected",
    number: 4,
    filename: "04-why-idr-disputes-get-rejected.md",
    title: "Why 1 in 5 IDR Disputes Get Thrown Out",
    description:
      "Roughly 1 in 5 federal IDR filings are found ineligible, mostly from process errors. The five mistakes that disqualify winnable claims.",
    date: "2026-06-15",
    author: "Heisha Rivera",
    category: "Education",
    tags: ["idr eligibility", "idr rejected", "open negotiation", "batching", "federal vs state idr"],
    relatedLinks: [
      { href: "/what-is-idr", label: "What is federal IDR?" },
      { href: "/how-we-work", label: "How we work" },
    ],
    medicallyReviewed: false,
  },
  {
    slug: "2026-idr-filing-fee-cut",
    number: 5,
    filename: "05-2026-idr-filing-fee-cut.md",
    title: "The 2026 IDR Fee Cut Nobody Told Your Practice About",
    description:
      "The 2026 federal rule cut IDR filing fees, removing the barrier that kept smaller surgical practices out of arbitration. What it means and who benefits.",
    date: "2026-06-15",
    author: "Dr. John M. Abrahams, MD",
    category: "Education",
    tags: ["idr filing fees", "2026 idr rule", "no surprises act 2026", "small practice idr"],
    relatedLinks: [{ href: "/what-is-idr", label: "What is federal IDR?" }],
    medicallyReviewed: true,
  },
  {
    slug: "open-negotiation-guide",
    number: 6,
    filename: "06-open-negotiation-guide.md",
    title: "Open Negotiation: The 30 Day Step That Protects Your Right to Arbitrate",
    description:
      "Open negotiation is the mandatory first step before federal IDR. How to initiate it, what the notice must contain, and the deadline that forfeits claims.",
    date: "2026-06-15",
    author: "Heisha Rivera",
    category: "Education",
    tags: ["open negotiation", "no surprises act", "idr process", "negotiation notice"],
    relatedLinks: [
      { href: "/what-is-idr", label: "What is federal IDR?" },
      { href: "/how-we-work", label: "How we work" },
    ],
    medicallyReviewed: false,
  },
  {
    slug: "what-evidence-wins-at-idr",
    number: 7,
    filename: "07-what-evidence-wins-at-idr.md",
    title: "What Actually Wins at IDR Arbitration",
    description:
      "Federal IDR is baseball style arbitration. The evidence that wins: benchmark rates, case complexity, physician credentials, and one claim per CPT.",
    date: "2026-06-15",
    author: "Dr. John M. Abrahams, MD",
    category: "Education",
    tags: ["idr evidence", "idr arbitration", "qpa", "fair health", "one claim per cpt"],
    relatedLinks: [{ href: "/what-is-idr", label: "What is federal IDR?" }],
    medicallyReviewed: true,
  },
  {
    slug: "federal-vs-state-idr",
    number: 8,
    filename: "08-federal-vs-state-idr.md",
    title: "Federal vs State IDR: Which Process Applies to Your Claim",
    description:
      "Self insured plans route to federal IDR. Fully insured plans in TX, NY, CA, NJ, and FL may route to state law. Getting this wrong disqualifies the claim.",
    date: "2026-06-15",
    author: "Heisha Rivera",
    category: "Education",
    tags: ["federal vs state idr", "surprise billing state law", "plan type", "self insured"],
    relatedLinks: STATE_LINKS,
    medicallyReviewed: false,
  },
  {
    slug: "neurosurgery-out-of-network-reimbursement",
    number: 9,
    filename: "09-neurosurgery-out-of-network-reimbursement.md",
    title: "Neurosurgery Out of Network Reimbursement: An IDR Guide",
    description:
      "A neurosurgeon's guide to recovering out of network underpayments through federal IDR: complexity documentation, per CPT filing, and what awards look like.",
    date: "2026-06-15",
    author: "Dr. John M. Abrahams, MD",
    category: "Specialty",
    tags: ["neurosurgery out of network", "neurosurgery reimbursement", "spine idr", "surgical billing"],
    relatedLinks: [{ href: "/specialties/neurosurgery", label: "Neurosurgery IDR" }],
    medicallyReviewed: true,
  },
  {
    slug: "new-york-surprise-bill-lookback",
    number: 10,
    filename: "10-new-york-surprise-bill-lookback.md",
    title:
      "New York's Surprise Bill Law Gives You 3 Years. Federal IDR Gives You 30 Business Days.",
    description:
      "New York providers can challenge underpayments on state regulated claims years after payment. The resurrection opportunity most NY practices never use.",
    date: "2026-06-15",
    author: "Heisha Rivera",
    category: "State",
    tags: ["new york surprise bill", "ny idr", "state surprise billing law", "lookback"],
    relatedLinks: [{ href: "/states/new-york", label: "New York IDR" }],
    medicallyReviewed: false,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getAuthorProfile(author: ArticleAuthor): { href: string; label: string } {
  if (author === "Dr. John M. Abrahams, MD") {
    return { href: "/team#person-john-abrahams", label: author };
  }
  return { href: "/team#person-heisha-rivera", label: author };
}
