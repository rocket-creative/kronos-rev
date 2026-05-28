import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { RECOVERY_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { CASE_STORIES, RESULT_METRICS } from "@/lib/results-content";
import { CTA } from "@/lib/ctas";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.results.title,
  description: PAGE_SEO.results.description,
  path: "/results",
});

const service = marketingServiceSchema(
  "/results",
  "NSA IDR Results and Recoveries",
  "Federal IDR data and case illustrations from surgical practices.",
  "Healthcare Revenue Services"
);

export default function ResultsPage() {
  const crumbs = breadcrumbItems([{ name: "IDR Results", path: "/results" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/results"
      service={service}
      faqs={RECOVERY_FAQS}
      faqHeading="Questions about NSA IDR results"
      faqHeadingId="results-faq-heading"
      eyebrow="NSA · Federal IDR"
      h1="What the federal IDR data shows. And what correctly filed surgical disputes actually recover."
      intro="Every IDR statistic on this page comes from a primary government source or peer reviewed institutional analysis. The source is cited inline. You can read the underlying document."
      bottomCtaHeading="Request your free IDR review"
    >
      <MarketingSection variant="white" labelledById="results-metrics-heading">
        <ReviewHeading
          review
          id="results-metrics-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          Federal data
        </ReviewHeading>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESULT_METRICS.map(({ label, value, source, href }) => (
            <div key={label} className="border border-kronos-gray-300 bg-white p-6 shadow-sm">
              <dt className="font-body text-xs uppercase tracking-widest text-gray-600 mb-2">
                {label}
              </dt>
              <dd className="font-heading text-2xl sm:text-3xl text-kronos-green-dark mb-2">
                {value}
              </dd>
              <dd className="font-body text-xs text-gray-600 font-light mb-2">{source}</dd>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-kronos-green-dark underline"
              >
                View source
              </a>
            </div>
          ))}
        </dl>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="results-calculator-heading">
        <h2 id="results-calculator-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-2">
          What is your practice leaving on the table?
        </h2>
        <p className="font-body text-sm text-gray-600 font-light mb-8 max-w-2xl">
          Uses CMS win rates and Georgetown CHIR median award benchmarks. Not a Kronos performance
          claim.
        </p>
        <RevenueCalculator />
      </MarketingSection>

      <MarketingSection variant="white" labelledById="results-stories-heading">
        <ReviewHeading
          review
          id="results-stories-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          Case illustrations
        </ReviewHeading>
        <p className="font-body text-xs text-gray-600 mb-8">
          CPT codes, specialty, outcome mechanism. No patient names without consent.
        </p>
        <div className="space-y-8 max-w-4xl">
          {CASE_STORIES.map((story) => (
            <article key={story.id} className="border-l-2 border-kronos-cyan pl-6">
              <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
                {story.lead}
              </p>
              <h3 className="font-heading text-xl text-gray-900 mb-3">{story.title}</h3>
              <p className="font-body text-gray-600 font-light leading-relaxed">{story.body}</p>
            </article>
          ))}
        </div>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="results-verify-heading">
        <ReviewHeading
          review
          id="results-verify-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          How to verify these results.
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-6">
          Send us 3 to 5 recent out of network EOBs. We run the recovery calculation on your specific
          procedures in your state. You see the estimated recovery potential before any commitment.
          One business day. No commitment.
        </p>
        <Link
          href={CTA.caseReview.href}
          className="inline-flex items-center gap-3 text-kronos-green-dark uppercase tracking-widest text-xs font-bold"
        >
          Request your free IDR review
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
        <p className="mt-6">
          <Link href="/specialties" className="text-kronos-green-dark text-sm underline">
            Specialties we serve
          </Link>
        </p>
      </MarketingSection>
    </MarketingPage>
  );
}
