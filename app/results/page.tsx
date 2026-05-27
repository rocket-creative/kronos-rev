import type { Metadata } from "next";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { CASE_STORIES, RESULT_METRICS } from "@/lib/results-content";

export const metadata: Metadata = createPageMetadata({
  title: "NSA IDR Recoveries | Kronos Revenue Results",
  description:
    "NSA IDR win rates and case stories. Quoted to your volume — not a contingency cut. Vastly more kept vs a 20% attorney.",
  path: "/results",
});

export default function ResultsPage() {
  const crumbs = breadcrumbItems([{ name: "IDR Results", path: "/results" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      eyebrow="NSA · Federal IDR"
      h1="NSA IDR results that speak for themselves."
      intro="Quoted to your volume — not skimmed from every award like a 20% contingency. More won IDR disputes on top. Verify the math on a free review using your own claim data."
      bottomCtaHeading="Verify your NSA IDR recovery potential"
    >
      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">Headline metrics</h2>
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {RESULT_METRICS.map(({ label, value }) => (
            <div key={label} className="border border-gray-200 p-6">
              <dt className="font-body text-xs uppercase tracking-widest text-gray-400 mb-3">
                {label}
              </dt>
              <dd className="font-heading text-2xl sm:text-3xl text-kronos-green-dark">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="font-body text-xs text-gray-400 mt-6">
          Metrics marked [TBD] pending confirmation from Kronos operations team.
        </p>
      </MarketingSection>

      <MarketingSection variant="neutral">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">Case stories</h2>
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

      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">Transparency note</h2>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl">
          We publish recovery rates because most of our competitors do not. If you would like to
          verify, we will walk you through the math on a free NSA IDR review using your own claim
          data.
        </p>
      </MarketingSection>

      <MarketingSection variant="neutral">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
          How much are you leaving on the table?
        </h2>
        <RevenueCalculator />
      </MarketingSection>
    </MarketingPage>
  );
}
