import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { SPECIALTY_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { SPECIALTIES } from "@/lib/specialties";
import { CTA } from "@/lib/ctas";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.specialties.title,
  description: PAGE_SEO.specialties.description,
  path: "/specialties",
});

const service = marketingServiceSchema(
  "/specialties",
  "Specialty NSA IDR for Surgical Practices",
  PAGE_SEO.specialties.description,
  "Healthcare Revenue Services"
);

export default function SpecialtiesPage() {
  const crumbs = breadcrumbItems([{ name: "Specialties", path: "/specialties" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/specialties"
      service={service}
      faqs={SPECIALTY_FAQS}
      faqHeading="Questions about specialty NSA IDR"
      faqHeadingId="specialty-faq-heading"
      eyebrow="NSA · Federal IDR"
      h1="NSA IDR for surgical practices. Built for your specialty, not a generalist shop."
      intro="Generalist IDR attorneys apply the same filing approach to a total knee arthroplasty and a craniotomy. Kronos Revenue does not. Every submission is coded to your procedure set, built from your operative documentation, and cited against prior winning determinations on your specific CPT codes. Scroll to your specialty."
      bottomCtaHeading="Get a free NSA IDR review for your specialty"
    >
      <MarketingSection variant="white" labelledById="specialty-index">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 border border-gray-200 p-6 bg-gray-50">
          <p className="font-body text-sm text-gray-600 font-light">
            Tier 1: Download the NSA IDR checklist before you file.
          </p>
          <Link
            href={CTA.idrChecklist.href}
            className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold shrink-0"
          >
            {CTA.idrChecklist.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
        <nav aria-label="Specialty sections" className="flex flex-wrap gap-2 mb-12">
          {SPECIALTIES.map((s) => (
            <Link
              key={s.slug}
              href={`/specialties/${s.slug}`}
              className="px-4 py-2 border border-gray-200 text-xs uppercase tracking-widest text-gray-700 hover:border-kronos-cyan transition-colors"
            >
              {s.name}
            </Link>
          ))}
        </nav>
      </MarketingSection>

      {SPECIALTIES.map((specialty, index) => (
        <MarketingSection
          key={specialty.slug}
          id={specialty.hubAnchor}
          variant={index % 2 === 0 ? "white" : "neutral"}
          labelledById={`specialty-${specialty.hubAnchor}-heading`}
        >
          <ReviewHeading
            review
            id={`specialty-${specialty.hubAnchor}-heading`}
            className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4"
          >
            {specialty.name} NSA IDR
          </ReviewHeading>
          <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-4">
            {specialty.intro}
          </p>
          <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-6">
            {specialty.body}
          </p>
          <p className="font-body text-sm text-gray-700 mb-6">{specialty.claimRange}</p>
          <Link
            href={`/specialties/${specialty.slug}`}
            className="inline-flex items-center gap-3 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all mr-6"
          >
            Full {specialty.shortName} page
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
          <Link
            href={CTA.caseReview.href}
            className="inline-flex items-center gap-3 text-kronos-cyan uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all"
          >
            {specialty.ctaLabel}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </MarketingSection>
      ))}
    </MarketingPage>
  );
}
