import { CTA } from "@/lib/ctas";

export type ArticleCtaLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type ArticleCtaBlock = {
  eyebrow?: string;
  headline: string;
  support: string;
  primary: ArticleCtaLink;
  secondary?: ArticleCtaLink;
};

export type ArticleCtaSet = {
  hero: ArticleCtaBlock;
  mid: ArticleCtaBlock;
  close: ArticleCtaBlock;
};

const ARTICLE_CTAS: Record<string, ArticleCtaSet> = {
  "federal-idr-timeline-every-deadline": {
    hero: {
      eyebrow: "Deadline audit",
      headline: "One missed window kills the claim permanently.",
      support:
        "Send 3 to 5 EOBs. We map each claim against the federal timeline and flag what is still inside the clock.",
      primary: {
        label: "Check my claim deadlines",
        href: CTA.caseReview.href,
        ariaLabel: "Free NSA IDR deadline review on your EOBs",
      },
    },
    mid: {
      eyebrow: "Before the 4 day trap",
      headline: "Most practices lose claims at the finish line, not the start.",
      support:
        "Open negotiation and IDR initiation are separate clocks. We track both so nothing dies between steps.",
      primary: CTA.caseReview,
      secondary: CTA.idrChecklist,
    },
    close: {
      headline: "See which of your claims are still alive under federal deadlines.",
      support:
        "One business day. No commitment. We tell you what to file, what expired, and what it was worth.",
      primary: {
        label: "Get a free deadline review",
        href: CTA.caseReview.href,
        ariaLabel: CTA.caseReview.ariaLabel,
      },
      secondary: CTA.howWeWork,
    },
  },
  "idr-attorney-vs-idr-service-true-cost": {
    hero: {
      eyebrow: "Run your numbers",
      headline: "Twenty percent of every award adds up faster than you think.",
      support:
        "Bring your last 12 months of recoveries. We show what the same year costs under Kronos, fee by fee.",
      primary: {
        label: "Compare against my attorney",
        href: CTA.caseReview.href,
        ariaLabel: "Free comparison of Kronos Revenue vs your contingency attorney",
      },
    },
    mid: {
      eyebrow: "The math most practices skip",
      headline: "The visible fee is only half the story.",
      support:
        "Batching losses and unfiled small claims usually cost more than the contingency cut. We quantify all three.",
      primary: CTA.caseReview,
      secondary: CTA.compareAttorney,
    },
    close: {
      headline: "Find out what you would have kept without the 20 percent cut.",
      support:
        "If your attorney comes out ahead, we say so. Either way you leave with a clear picture of your arrangement.",
      primary: {
        label: "Get a free cost comparison",
        href: CTA.caseReview.href,
        ariaLabel: "Free IDR cost comparison against your contingency attorney",
      },
      secondary: CTA.compareAttorney,
    },
  },
  "claims-your-attorney-never-files": {
    hero: {
      eyebrow: "The hidden loss",
      headline: "The claims your firm never bills for are often bigger than the fee.",
      support:
        "Contingency economics skip small underpayments. We file every eligible claim, regardless of size.",
      primary: {
        label: "Find my unfiled claims",
        href: CTA.caseReview.href,
        ariaLabel: "Free review to find IDR claims your attorney never filed",
      },
    },
    mid: {
      eyebrow: "No minimum billable hour",
      headline: "A $1,500 underpayment deserves the same filing rigor as a $50,000 case.",
      support:
        "Kronos quotes to your volume, not your award size. Nothing gets declined because the hours do not pay.",
      primary: CTA.caseReview,
      secondary: CTA.compareAttorney,
    },
    close: {
      headline: "See how much your practice left on the table in unfiled claims.",
      support:
        "Send recent EOBs. We identify eligible disputes your current firm likely skipped and what they were worth.",
      primary: {
        label: "Audit my unfiled claims",
        href: CTA.caseReview.href,
        ariaLabel: "Free audit of unfiled NSA IDR claims",
      },
      secondary: { label: "Why firms skip small claims", href: "/lawyer-problem" },
    },
  },
  "why-idr-disputes-get-rejected": {
    hero: {
      eyebrow: "Eligibility first",
      headline: "One in five filings get thrown out before anyone reads your evidence.",
      support:
        "We review eligibility, plan type, and process compliance before you pay a filing fee.",
      primary: {
        label: "Review my claim eligibility",
        href: CTA.caseReview.href,
        ariaLabel: "Free NSA IDR eligibility review before filing",
      },
    },
    mid: {
      eyebrow: "Process errors are permanent",
      headline: "Ineligible is ineligible. There is no appeal worth planning around.",
      support:
        "Wrong pathway, missed open negotiation, improper batching. We catch these before submission, not after rejection.",
      primary: CTA.caseReview,
      secondary: CTA.idrChecklist,
    },
    close: {
      headline: "Stop paying filing fees on claims that will get disqualified.",
      support:
        "Send 3 to 5 EOBs. We flag eligibility issues, routing errors, and the fixes that keep winnable claims alive.",
      primary: {
        label: "Get a free eligibility review",
        href: CTA.caseReview.href,
        ariaLabel: "Free IDR eligibility review on your claims",
      },
      secondary: CTA.howWeWork,
    },
  },
  "2026-idr-filing-fee-cut": {
    hero: {
      eyebrow: "2026 rule change",
      headline: "Lower filing fees mean more surgical claims finally pencil out.",
      support:
        "The barrier that kept small practices out of arbitration dropped. See which of your claims are worth filing now.",
      primary: {
        label: "See what my claims are worth",
        href: CTA.caseReview.href,
        ariaLabel: "Free review of IDR claim value under 2026 filing fees",
      },
    },
    mid: {
      eyebrow: "Volume changes the math",
      headline: "Fees that blocked small practices no longer should.",
      support:
        "We quote to your monthly OON volume. At the new fee schedule, claims that never made sense before often do now.",
      primary: CTA.caseReview,
      secondary: CTA.howWeWork,
    },
    close: {
      headline: "Run your volume against the new federal fee schedule.",
      support:
        "One business day. We calculate recovery potential per claim and tell you which disputes are worth initiating.",
      primary: {
        label: "Get a free volume review",
        href: CTA.caseReview.href,
        ariaLabel: "Free NSA IDR volume and fee review",
      },
      secondary: { label: "What is federal IDR?", href: "/what-is-idr" },
    },
  },
  "open-negotiation-guide": {
    hero: {
      eyebrow: "Mandatory first step",
      headline: "Skip open negotiation and you forfeit arbitration permanently.",
      support:
        "The notice has to be right, on time, and documented. We handle initiation and the 4 business day IDR window that follows.",
      primary: {
        label: "Review my open negotiation status",
        href: CTA.caseReview.href,
        ariaLabel: "Free review of open negotiation and IDR initiation status",
      },
    },
    mid: {
      eyebrow: "Two clocks, one chain",
      headline: "Thirty business days to negotiate. Four to initiate IDR. Both are hard stops.",
      support:
        "Most practices nail the first window and lose the claim at the second. We manage the full chain end to end.",
      primary: CTA.idrChecklist,
      secondary: CTA.caseReview,
    },
    close: {
      headline: "Get open negotiation and IDR initiation handled without missing a window.",
      support:
        "Send your EOBs. We confirm where each claim sits in the process and what has to happen next.",
      primary: {
        label: "Get a free process review",
        href: CTA.caseReview.href,
        ariaLabel: "Free open negotiation and IDR process review",
      },
      secondary: CTA.howWeWork,
    },
  },
  "what-evidence-wins-at-idr": {
    hero: {
      eyebrow: "Baseball style arbitration",
      headline: "The arbitrator picks one number. Your evidence decides which one.",
      support:
        "Benchmark rates, case complexity, credentials, one claim per CPT. We build the packet for your codes.",
      primary: {
        label: "Review my evidence gaps",
        href: CTA.caseReview.href,
        ariaLabel: "Free review of IDR evidence and submission strategy",
      },
    },
    mid: {
      eyebrow: "Built for your CPT set",
      headline: "Generic filings lose to specialty coded submissions.",
      support:
        "We cite prior winning determinations on your specific procedure codes, not boilerplate templates.",
      primary: CTA.caseReview,
      secondary: CTA.howWeWork,
    },
    close: {
      headline: "See how your last underpaid claims would have been argued at arbitration.",
      support:
        "Send operative notes and EOBs. We show what evidence was missing and what the federal win rate says about your cases.",
      primary: {
        label: "Get a free evidence review",
        href: CTA.caseReview.href,
        ariaLabel: "Free IDR evidence review on your surgical claims",
      },
      secondary: { label: "See IDR results", href: "/results" },
    },
  },
  "federal-vs-state-idr": {
    hero: {
      eyebrow: "Routing matters",
      headline: "Wrong pathway means automatic disqualification. No appeal.",
      support:
        "Self insured plans go federal. Fully insured plans in TX, NY, CA, NJ, and FL may go state. We route every claim correctly.",
      primary: {
        label: "Confirm my claim routing",
        href: CTA.caseReview.href,
        ariaLabel: "Free review of federal vs state IDR routing for your claims",
      },
    },
    mid: {
      eyebrow: "Mixed plan types are common",
      headline: "A surgical practice rarely has one pathway for every payer.",
      support:
        "Send a mix of EOBs. We identify plan type, applicable law, and the process each claim has to follow.",
      primary: CTA.caseReview,
      secondary: { label: "What is federal IDR?", href: "/what-is-idr" },
    },
    close: {
      headline: "Stop guessing federal vs state on claims worth tens of thousands.",
      support:
        "One business day. We map each dispute to the correct process before you spend time or money on the wrong one.",
      primary: {
        label: "Get a free routing review",
        href: CTA.caseReview.href,
        ariaLabel: "Free federal vs state IDR routing review",
      },
      secondary: CTA.howWeWork,
    },
  },
  "neurosurgery-out-of-network-reimbursement": {
    hero: {
      eyebrow: "Neurosurgery IDR",
      headline: "Built by a practicing neurosurgeon who files on his own CPT codes.",
      support:
        "Complexity documentation, per CPT submission, specialty benchmark rates. Not a generalist shop.",
      primary: {
        label: "Review my neurosurgery EOBs",
        href: CTA.caseReview.href,
        ariaLabel: "Free NSA IDR review for neurosurgery out of network claims",
      },
    },
    mid: {
      eyebrow: "Specialty depth wins",
      headline: "Craniotomy evidence reads differently than a TKA filing.",
      support:
        "We train on neurosurgery and spine CPT sets, operative complexity, and the determinations that cite them.",
      primary: CTA.caseReview,
      secondary: { label: "Neurosurgery IDR page", href: "/specialties/neurosurgery" },
    },
    close: {
      headline: "See what your neurosurgery underpayments are worth at federal IDR.",
      support:
        "Send 3 to 5 EOBs with operative notes. We calculate recovery potential and compare it to your current arrangement.",
      primary: {
        label: "Get a free neurosurgery review",
        href: CTA.caseReview.href,
        ariaLabel: "Free neurosurgery IDR case review",
      },
      secondary: { label: "See IDR results", href: "/results" },
    },
  },
  "new-york-surprise-bill-lookback": {
    hero: {
      eyebrow: "New York lookback",
      headline: "Three years on state claims. Thirty business days on federal. Both matter.",
      support:
        "Most NY practices never challenge underpaid state regulated claims. We find the resurrection opportunity.",
      primary: {
        label: "Find my NY lookback claims",
        href: CTA.caseReview.href,
        ariaLabel: "Free review of New York surprise bill lookback claims",
      },
    },
    mid: {
      eyebrow: "Years of underpayments",
      headline: "Claims you wrote off years ago may still be recoverable under NY law.",
      support:
        "State and federal pathways run on different clocks. We sort your backlog by eligibility and value.",
      primary: CTA.caseReview,
      secondary: { label: "New York IDR page", href: "/states/new-york" },
    },
    close: {
      headline: "Resurrect underpaid New York claims before the lookback window closes.",
      support:
        "Send recent and historical EOBs. We identify state regulated disputes you never challenged and what they are worth.",
      primary: {
        label: "Get a free NY claim review",
        href: CTA.caseReview.href,
        ariaLabel: "Free New York surprise bill and IDR claim review",
      },
      secondary: { label: "Federal vs state IDR", href: "/resources/articles/federal-vs-state-idr" },
    },
  },
};

const DEFAULT_ARTICLE_CTAS: ArticleCtaSet = {
  hero: {
    eyebrow: "Free review",
    headline: "See what your practice is leaving on the table.",
    support:
      "Send 3 to 5 EOBs. We review eligibility, calculate recovery potential, and compare against your current arrangement.",
    primary: CTA.heroCaseReview,
  },
  mid: {
    eyebrow: "Next step",
    headline: "Federal IDR is winnable when the process is handled correctly.",
    support:
      "Providers win 88 percent of properly filed disputes. The question is whether every eligible claim gets filed.",
    primary: CTA.caseReview,
    secondary: CTA.idrChecklist,
  },
  close: {
    headline: "Get a free NSA IDR case review in one business day.",
    support: "No commitment. We tell you what is worth filing and what it would cost under Kronos.",
    primary: CTA.caseReview,
    secondary: CTA.howWeWork,
  },
};

export function getArticleCtas(slug: string): ArticleCtaSet {
  return ARTICLE_CTAS[slug] ?? DEFAULT_ARTICLE_CTAS;
}
