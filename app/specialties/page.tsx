import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { ReviewHighlight } from "@/components/ReviewHighlight";
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
  "No Surprises Act IDR for orthopedic, neurosurgery, spine, plastic, anesthesia, and general surgery. One claim per CPT, specialty coded.",
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
      h1="NSA IDR built for your specialty. Not a generalist shop."
      intro="A spine surgeon should scroll to spine and immediately feel: these are my people. Every federal IDR submission is one claim per CPT, specialty coded, the reason we win disputes generalist attorneys lose."
      bottomCtaHeading="Get a free NSA IDR review for your specialty"
    >
      {SPECIALTIES.map((specialty, index) => (
        <MarketingSection
          key={specialty.slug}
          id={specialty.slug}
          variant={index % 2 === 0 ? "white" : "neutral"}
          labelledById={`specialty-${specialty.slug}-heading`}
        >
          <ReviewHeading
            review
            id={`specialty-${specialty.slug}-heading`}
            className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4"
          >
            How does Kronos handle {specialty.name} NSA IDR?
          </ReviewHeading>
          <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-6">
            {specialty.credibility}
          </p>
          <dl className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mb-8">
            <div>
              <dt className="font-body text-xs uppercase tracking-widest text-gray-400 mb-2">
                Typical case profile
              </dt>
              <dd className="font-body text-gray-700 font-light text-sm">
                <ReviewHighlight>{specialty.caseProfile}</ReviewHighlight>
              </dd>
            </div>
            <div>
              <dt className="font-body text-xs uppercase tracking-widest text-gray-400 mb-2">
                Common attorney shortcuts that lose
              </dt>
              <dd className="font-body text-gray-700 font-light text-sm">
                {specialty.attorneyShortcuts}
              </dd>
            </div>
            <div className="lg:col-span-2">
              <dt className="font-body text-xs uppercase tracking-widest text-gray-400 mb-2">
                How Kronos Revenue handles this specialty
              </dt>
              <dd className="font-body text-gray-700 font-light text-sm">
                {specialty.kronosApproach}
              </dd>
            </div>
          </dl>
          <blockquote className="border-l-2 border-kronos-cyan pl-4 font-body text-gray-500 font-light text-sm italic mb-6">
            <ReviewHighlight>{specialty.quote}</ReviewHighlight>
          </blockquote>
          <Link
            href={CTA.caseReview.href}
            className="inline-flex items-center gap-3 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan scroll-mt-28"
          >
            Get a free NSA IDR review for {specialty.shortName.toLowerCase()}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </MarketingSection>
      ))}
    </MarketingPage>
  );
}
