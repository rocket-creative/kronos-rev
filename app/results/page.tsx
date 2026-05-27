import type { Metadata } from "next";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { ReviewHighlight } from "@/components/ReviewHighlight";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { RECOVERY_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { CASE_STORIES, RESULT_METRICS } from "@/lib/results-content";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.results.title,
  description: PAGE_SEO.results.description,
  path: "/results",
});

const service = marketingServiceSchema(
  "/results",
  "NSA IDR Results and Recoveries",
  "Case stories and recovery outcomes from surgical practices using Kronos Revenue for federal No Surprises Act IDR.",
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
      h1="NSA IDR results that speak for themselves."
      intro="Quoted to your volume, not skimmed from every award like a 20% contingency. More won IDR disputes on top. Verify the math on a free review using your own claim data."
      bottomCtaHeading="Verify your NSA IDR recovery potential"
    >
      <MarketingSection variant="white" labelledById="results-metrics-heading">
        <ReviewHeading review id="results-metrics-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
          What results can surgical practices expect from Kronos NSA IDR?
        </ReviewHeading>
        <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULT_METRICS.map(({ label, value }) => (
            <div key={label} className="border border-gray-200 p-6">
              <dt className="font-body text-xs uppercase tracking-widest text-gray-400 mb-3">
                {label}
              </dt>
              <dd className="font-heading text-2xl sm:text-3xl text-kronos-green-dark">
                <ReviewHighlight>{value}</ReviewHighlight>
              </dd>
            </div>
          ))}
        </dl>
        <p className="font-body text-xs text-gray-400 mt-6">
          <ReviewHighlight>
            Practice specific win rates and recovery figures are confirmed on your free case review.
          </ReviewHighlight>
        </p>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="results-stories-heading">
        <ReviewHeading review id="results-stories-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
          What do Kronos Revenue case stories look like?
        </ReviewHeading>
        <div className="space-y-8 max-w-4xl">
          {CASE_STORIES.map((story) => (
            <article key={story.id} className="border-l-2 border-kronos-cyan pl-6">
              <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
                <ReviewHighlight>{story.lead}</ReviewHighlight>
              </p>
              <h3 className="font-heading text-xl text-gray-900 mb-3">
                <ReviewHighlight>{story.title}</ReviewHighlight>
              </h3>
              <p className="font-body text-gray-600 font-light leading-relaxed">
                <ReviewHighlight>{story.body}</ReviewHighlight>
              </p>
            </article>
          ))}
        </div>
      </MarketingSection>

      <MarketingSection variant="white" labelledById="results-transparency-heading">
        <ReviewHeading
          review
          id="results-transparency-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          How does Kronos verify recovery claims?
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl">
          We publish recovery rates because most of our competitors do not. If you would like to
          verify, we will walk you through the math on a free NSA IDR review using your own claim
          data.
        </p>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="results-calculator-heading">
        <h2
          id="results-calculator-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          How much are you leaving on the table?
        </h2>
        <RevenueCalculator />
      </MarketingSection>
    </MarketingPage>
  );
}
