import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  MarketingPage,
  MarketingSection,
} from "@/components/MarketingPage";
import { LawyerComparisonTable } from "@/components/LawyerComparisonTable";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { CTA } from "@/lib/ctas";
import { DOLLAR_KEPT_CONTRAST, VASTLY_MORE_LINE, KRONOS_FEE_SHORT } from "@/lib/pricing-copy";

export const metadata: Metadata = createPageMetadata({
  title: "NSA IDR vs Attorneys | Kronos Revenue",
  description:
    "Attorneys take 20% of every NSA IDR recovery. Kronos quotes a consultative fee — you keep the greater share — and wins more disputes.",
  path: "/lawyer-problem",
});

export default function LawyerProblemPage() {
  const crumbs = breadcrumbItems([{ name: "NSA IDR vs Lawyers", path: "/lawyer-problem" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      eyebrow="NSA · Federal IDR"
      h1="20% of every NSA IDR recovery, forever. There is a better way."
      intro={
        <>
          If your practice recovers $200,000 per year in NSA IDR disputes through an attorney,
          that attorney takes $40,000 before you see a dime — and batched filings mean you win
          fewer disputes than you should. {DOLLAR_KEPT_CONTRAST} {VASTLY_MORE_LINE}
        </>
      }
      bottomCtaHeading="Switch your NSA IDR to Kronos"
    >
      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">The 20% math on NSA IDR</h2>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-4">
          Hard numbers: if a practice recovers $200,000 per year in NSA IDR disputes through their
          attorney, that attorney takes $40,000. Over five years that is $200,000 — on firms that
          treat federal IDR as a side practice and lose disputes generalists should win.
        </p>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl">
          The contingency fee is only half the story. Batched IDR filings lose awards your practice
          earned. {KRONOS_FEE_SHORT}. More won disputes on top — {VASTLY_MORE_LINE.toLowerCase()}
        </p>
      </MarketingSection>

      <MarketingSection variant="neutral">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
          Why attorneys underperform on NSA IDR
        </h2>
        <ul className="space-y-4 max-w-3xl">
          {[
            "IDR is administrative law, not litigation. The skills do not transfer cleanly.",
            "Most NSA attorneys are generalists who took on IDR work because it is billable, not because it is their specialty.",
            "Batched claim filings — the most common attorney shortcut — lose at IDR. One CPT per claim is how you win.",
            "Recovery rate transparency: attorneys rarely publish theirs. We do.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-gray-600 font-light">
              <span className="w-1.5 h-1.5 bg-kronos-cyan mt-2 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </MarketingSection>

      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
          What Kronos Revenue does differently on NSA IDR
        </h2>
        <LawyerComparisonTable />
      </MarketingSection>

      <MarketingSection variant="neutral">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
          Will my attorney be okay with this?
        </h2>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-8">
          Yes. Most NSA attorneys are happy to step back from IDR work — it is a low margin side
          practice for them. We handle the transition documentation. Your relationship with your
          attorney for other matters is unaffected.
        </p>
        <Link
          href={CTA.caseReview.href}
          className="inline-flex items-center gap-3 bg-kronos-green-dark text-white py-3 px-8 uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
        >
          Talk to us about switching
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </MarketingSection>
    </MarketingPage>
  );
}
