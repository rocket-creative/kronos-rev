import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { LawyerComparisonTable } from "@/components/LawyerComparisonTable";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { CTA } from "@/lib/ctas";
import { SWITCHING_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.lawyerProblem.title,
  description: PAGE_SEO.lawyerProblem.description,
  path: "/lawyer-problem",
});

const service = marketingServiceSchema(
  "/lawyer-problem",
  "NSA IDR vs Attorney Contingency",
  "Switch from twenty percent attorney contingency to consultative NSA IDR pricing. Specialty coded federal IDR with one claim per CPT.",
  "No Surprises Act IDR"
);

const failures = [
  {
    title: "Batching CPT codes",
    body: "Federal IDR requires one claim per CPT code. Attorneys batch multiple codes into single submissions because it is faster for them. The result: a composite offer that does not map to any single prior determination. Arbitrators resolve ambiguity against the initiating party.",
  },
  {
    title: "Generalist documentation",
    body: "A clinical necessity narrative for CPT 61510 (craniotomy for tumor excision) written by someone who does not know the difference between a craniotomy and a craniectomy does not perform well against an insurer QPA argument.",
  },
  {
    title: "Contingency economics misaligned with your interest",
    body: "An attorney taking 20% of every recovery has no economic incentive to fight for the last 10% of a disputed claim. The marginal effort to recover an additional $2,000 on a $20,000 dispute does not justify the attorney time at 20% economics.",
  },
];

export default function LawyerProblemPage() {
  const crumbs = breadcrumbItems([{ name: "Traditional approach", path: "/lawyer-problem" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/lawyer-problem"
      service={service}
      faqs={SWITCHING_FAQS}
      faqHeading="Questions about switching from an attorney"
      faqHeadingId="lawyer-faq-heading"
      eyebrow="NSA · Federal IDR"
      h1="20% of every NSA IDR award, indefinitely. That is what the contingency model costs your practice."
      intro={
        <>
          A practice that recovers $400,000 per year through a 20% contingency attorney pays $80,000 in
          annual fees. Over five years, that is $400,000 paid to a firm that may not specialize in surgical
          CPT coding and may be batching codes in ways that reduce the number of disputes your practice wins.
          The contingency fee is the visible cost. The lost disputes from batched filings are the invisible one.
        </>
      }
      bottomCtaHeading="Request your free IDR review"
    >
      <MarketingSection variant="white" labelledById="lawyer-underperform-heading">
        <ReviewHeading
          review
          id="lawyer-underperform-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          Why attorneys underperform on surgical NSA IDR.
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-8">
          Federal IDR is administrative law, not litigation. The skills do not transfer.
        </p>
        <div className="space-y-8 max-w-3xl">
          {failures.map((f) => (
            <div key={f.title}>
              <h3 className="font-heading text-lg text-gray-900 mb-2 uppercase tracking-wide">
                {f.title}
              </h3>
              <p className="font-body text-gray-600 font-light leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="lawyer-different-heading">
        <ReviewHeading
          review
          id="lawyer-different-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          What Kronos Revenue does differently.
        </ReviewHeading>
        <LawyerComparisonTable />
      </MarketingSection>

      <MarketingSection variant="white" labelledById="lawyer-attorney-ok-heading">
        <ReviewHeading
          review
          id="lawyer-attorney-ok-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          A note on your attorney relationship.
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-4">
          Switching NSA IDR to Kronos Revenue does not affect your attorney relationship for other matters.
          Most attorneys doing IDR work are happy to step back from it. We handle transition documentation.
          In flight cases are reviewed and taken over where deadlines allow.
        </p>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-8">
          If you want to test Kronos Revenue before committing, Week 2 of onboarding runs your first five
          claims in parallel with your current process as a proof of concept.
        </p>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="lawyer-review-heading">
        <ReviewHeading
          review
          id="lawyer-review-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          The free review is a math exercise, not a sales call.
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-8">
          Send us 3 to 5 recent EOBs. We calculate: what you recovered under your current arrangement,
          what you would have recovered through Kronos, what our fee would be, the net difference. If our
          number is worse than staying with your attorney, we tell you.
        </p>
        <Link
          href={CTA.caseReview.href}
          className="inline-flex items-center gap-3 bg-kronos-green-dark text-white py-3 px-8 uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
        >
          Request your free IDR review
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
        <p className="mt-6">
          <Link href="/pricing" className="text-kronos-green-dark text-sm underline">
            How Kronos Revenue is priced
          </Link>
        </p>
      </MarketingSection>
    </MarketingPage>
  );
}
