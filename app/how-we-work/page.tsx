import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { PROCESS_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { CTA } from "@/lib/ctas";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.howWeWork.title,
  description: PAGE_SEO.howWeWork.description,
  path: "/how-we-work",
});

const service = marketingServiceSchema(
  "/how-we-work",
  "Done for You NSA IDR Process",
  "End to end No Surprises Act and federal IDR operation for surgical practices.",
  "Healthcare Revenue Services"
);

const federalPhases = [
  {
    title: "Phase 1 — Initial payment or denial",
    body: "The insurer must issue an initial payment or denial within 30 calendar days of a claim for an out of network service covered under the NSA. This initial payment is almost always based on the insurer qualifying payment amount (QPA), which CMS data shows running more than 30% below historical in network rates for surgical services.",
  },
  {
    title: "Phase 2 — Open negotiation",
    body: "Either party sends a written Open Negotiation Notice. The 30 business day negotiation period begins. Most do not reach agreement. The notice must be sent within 30 business days of the initial payment or denial. Missing that window closes the IDR pathway for that claim.",
  },
  {
    title: "Phase 3 — IDR initiation",
    body: "If negotiation fails, either party has 4 business days after the negotiation period closes to send a Notice of IDR Initiation and file with a certified IDR entity (IDRE). The IDRE is selected by agreement within 3 business days, or assigned by CMS.",
  },
  {
    title: "Phase 4 — Payment determination",
    body: "The IDRE reviews both parties payment offers and supporting documentation. Final offer arbitration: the IDRE picks one offer. No splits. The losing party pays the IDRE administrative fee (currently $50 per dispute — confirm before filing). The IDRE has 30 business days to issue a determination.",
  },
];

const kronosPhases = [
  {
    title: "Phase 1 — EOB intake and eligibility review",
    body: "You forward the EOB. We review within one business day. We confirm: NSA eligibility, plan type coverage, active cooling off period, open negotiation window status. 44% of 2024 IDR disputes were challenged as ineligible by payers (CMS data, Zelis analysis, March 2026). We catch eligibility errors before submitting, not after.",
  },
  {
    title: "Phase 2 — Open negotiation",
    body: "We send the Open Negotiation Notice on your behalf, document delivery with timestamps, and manage all insurer communications during the negotiation window.",
  },
  {
    title: "Phase 3 — IDR submission",
    body: "CPT coded payment offer: one claim per CPT code. Never batched. Clinical necessity narrative built from your operative note. Market rate comparisons from Sydra library of 213+ ingested determinations. Provider credentials: CV, training, procedure volume, board certifications.",
  },
  {
    title: "Phase 4 — Determination and follow up",
    body: "We submit to the IDRE portal, track the determination timeline, receive the outcome. Favorable: follow up on payment. Adverse: review reasoning, advise on re filing eligibility. Quarterly recovery review covering all active and closed cases.",
  },
];

const onboarding = [
  { week: "Week 1", detail: "BAA and engagement letter signed. Practice profile built." },
  {
    week: "Week 2",
    detail: "First five claims processed in parallel with your current process. You see our submissions before we file them.",
  },
  { week: "Week 3", detail: "Full handover. Kronos Revenue is now the IDR layer for your practice." },
  { week: "Week 4", detail: "First monthly report delivered." },
];

export default function HowWeWorkPage() {
  const crumbs = breadcrumbItems([{ name: "NSA IDR Process", path: "/how-we-work" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/how-we-work"
      service={service}
      faqs={PROCESS_FAQS}
      faqHeading="Questions about our NSA IDR process"
      faqHeadingId="process-faq-heading"
      eyebrow="NSA · Federal IDR"
      h1="How federal NSA IDR works. And what Kronos Revenue does at every step."
      intro="Understanding the process at a regulatory level is the only way to evaluate whether any IDR vendor is handling your claims correctly. This page explains it as written in the statute and implementing regulations, then explains what Kronos Revenue does at each phase."
      bottomCtaHeading="Get a free NSA IDR review"
    >
      <MarketingSection variant="white" labelledById="checklist-cta">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border border-gray-200 p-6 bg-gray-50">
          <p className="font-body text-sm text-gray-600 font-light">
            Download the NSA IDR filing checklist before you initiate a dispute.
          </p>
          <Link
            href={CTA.idrChecklist.href}
            className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold shrink-0"
          >
            {CTA.idrChecklist.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
      </MarketingSection>

      <MarketingSection variant="white" labelledById="federal-framework-heading">
        <ReviewHeading
          review
          id="federal-framework-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4"
        >
          The federal IDR regulatory framework.
        </ReviewHeading>
        <p className="font-body text-sm text-gray-600 mb-8">
          Governing law: No Surprises Act, Public Law 116-260, Division BB, Title I · Implementing
          regulations: 45 CFR Part 149
        </p>
        <div className="space-y-8 max-w-3xl">
          {federalPhases.map((p) => (
            <div key={p.title}>
              <h3 className="font-heading text-lg text-gray-900 mb-2">{p.title}</h3>
              <p className="font-body text-gray-600 font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="kronos-phases-heading">
        <ReviewHeading
          review
          id="kronos-phases-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          What Kronos Revenue does at each phase.
        </ReviewHeading>
        <div className="space-y-8 max-w-3xl">
          {kronosPhases.map((p) => (
            <div key={p.title}>
              <h3 className="font-heading text-lg text-gray-900 mb-2">{p.title}</h3>
              <p className="font-body text-gray-600 font-light leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </MarketingSection>

      <MarketingSection variant="white" labelledById="documentation-heading">
        <ReviewHeading
          review
          id="documentation-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          Why documentation quality determines the outcome.
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-4">
          The IDRE sees two competing offers. Yours and the insurer. They pick one. Your offer wins
          when it establishes your fee is consistent with what providers actually win on this specific
          CPT, and demonstrates the clinical circumstances justify your fee.
        </p>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl">
          Kronos Revenue prepares both on every submission.
        </p>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="onboarding-heading">
        <ReviewHeading
          review
          id="onboarding-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          Onboarding: four weeks to full handover.
        </ReviewHeading>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {onboarding.map(({ week, detail }) => (
            <div key={week} className="border border-gray-200 p-6 bg-white">
              <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
                {week}
              </p>
              <p className="font-body text-gray-600 font-light text-sm">{detail}</p>
            </div>
          ))}
        </div>
      </MarketingSection>
    </MarketingPage>
  );
}
