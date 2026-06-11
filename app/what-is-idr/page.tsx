import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { IdrTimeline, SpecialtyLinksGrid } from "@/components/IdrTimeline";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { WHAT_IS_IDR_FAQS } from "@/lib/education-faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { CTA } from "@/lib/ctas";
import { HOME_STAT_BAR } from "@/lib/home-stats";
import {
  HONEST_CATCH,
  WHAT_IS_IDR_INTRO,
  WHAT_WINS_AT_ARBITRATION,
  WHY_NEVER_HEARD,
  WORKED_EXAMPLE,
} from "@/lib/what-is-idr-content";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.whatIsIdr.title,
  description: PAGE_SEO.whatIsIdr.description,
  path: "/what-is-idr",
});

const service = marketingServiceSchema(
  "/what-is-idr",
  "Federal IDR Education",
  "Plain English guide to No Surprises Act independent dispute resolution for surgical practices.",
  "No Surprises Act IDR"
);

export default function WhatIsIdrPage() {
  const crumbs = breadcrumbItems([{ name: "What is federal IDR?", path: "/what-is-idr" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/what-is-idr"
      service={service}
      faqs={WHAT_IS_IDR_FAQS}
      faqHeading="Common questions about federal IDR"
      faqHeadingId="what-is-idr-faq-heading"
      eyebrow="NSA · Federal IDR"
      h1="What is federal IDR? The arbitration process most surgeons have never heard of."
      intro={
        <>
          {WHAT_IS_IDR_INTRO.map((p) => (
            <p key={p.slice(0, 40)} className="mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </>
      }
      bottomCtaHeading="Get a free NSA IDR case review"
    >
      <MarketingSection variant="white" labelledById="what-is-idr-stats-heading">
        <ReviewHeading
          review
          id="what-is-idr-stats-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          The scoreboard.
        </ReviewHeading>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {HOME_STAT_BAR.map((stat) => (
            <li key={stat.value}>
              <p className="font-heading text-3xl sm:text-4xl text-kronos-cyan mb-2">{stat.value}</p>
              <p className="font-body text-sm text-gray-900 mb-2">{stat.label}</p>
              <p className="font-body text-xs text-gray-600 font-light mb-2">{stat.source}</p>
              <a
                href={stat.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-xs text-kronos-green-dark underline hover:opacity-80"
              >
                View source
              </a>
            </li>
          ))}
        </ul>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="what-is-idr-timeline-heading">
        <ReviewHeading
          review
          id="what-is-idr-timeline-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          The federal IDR timeline.
        </ReviewHeading>
        <IdrTimeline />
      </MarketingSection>

      <MarketingSection variant="white" labelledById="what-is-idr-never-heard-heading">
        <ReviewHeading
          review
          id="what-is-idr-never-heard-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          Why you have never heard of it.
        </ReviewHeading>
        <div className="font-body text-gray-600 font-light leading-relaxed max-w-3xl space-y-4">
          {WHY_NEVER_HEARD.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <p className="mt-8">
          <Link
            href={CTA.caseReview.href}
            className="inline-flex items-center gap-3 bg-kronos-green-dark text-white py-3 px-8 uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all"
          >
            See what your practice is leaving on the table
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </p>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="what-is-idr-wins-heading">
        <ReviewHeading
          review
          id="what-is-idr-wins-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          What wins at arbitration.
        </ReviewHeading>
        <ul className="font-body text-gray-600 font-light leading-relaxed max-w-3xl space-y-3 list-disc list-inside">
          {WHAT_WINS_AT_ARBITRATION.map((item) => (
            <li key={item.slice(0, 40)}>{item}</li>
          ))}
        </ul>
      </MarketingSection>

      <MarketingSection variant="white" labelledById="what-is-idr-example-heading">
        <ReviewHeading
          review
          id="what-is-idr-example-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          {WORKED_EXAMPLE.title}
        </ReviewHeading>
        <div className="font-body text-gray-600 font-light leading-relaxed max-w-3xl space-y-4">
          {WORKED_EXAMPLE.body.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="what-is-idr-catch-heading">
        <ReviewHeading
          review
          id="what-is-idr-catch-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          The honest catch.
        </ReviewHeading>
        <div className="font-body text-gray-600 font-light leading-relaxed max-w-3xl space-y-4 mb-8">
          {HONEST_CATCH.map((p) => (
            <p key={p.slice(0, 40)}>{p}</p>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href={CTA.caseReview.href}
            className="inline-flex items-center justify-center gap-3 bg-kronos-cyan text-white py-3 px-8 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all"
          >
            Get a free case review
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
          <Link
            href={CTA.idrChecklist.href}
            className="inline-flex items-center justify-center gap-3 border border-gray-300 py-3 px-8 uppercase tracking-widest text-xs font-bold text-gray-900 hover:border-kronos-cyan transition-colors"
          >
            {CTA.idrChecklist.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
      </MarketingSection>

      <MarketingSection variant="white" labelledById="what-is-idr-specialties-heading">
        <ReviewHeading
          review
          id="what-is-idr-specialties-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          IDR by surgical specialty.
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-8">
          Every specialty has different CPT codes, market benchmarks, and documentation requirements.
          Kronos files one claim per CPT for each of these procedure sets.
        </p>
        <SpecialtyLinksGrid />
      </MarketingSection>
    </MarketingPage>
  );
}
