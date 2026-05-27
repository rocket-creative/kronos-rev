import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { SPECIALTIES } from "@/lib/specialties";
import { CTA } from "@/lib/ctas";

export const metadata: Metadata = createPageMetadata({
  title: "Specialties Served | Kronos Revenue IDR",
  description:
    "Specialty deep NSA IDR for orthopedic, neurosurgery, spine, plastic, anesthesia, and general surgery. One claim per CPT, coded by specialists who know your procedure set.",
  path: "/specialties",
});

export default function SpecialtiesPage() {
  const crumbs = breadcrumbItems([{ name: "Specialties", path: "/specialties" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      eyebrow="NSA · Federal IDR"
      h1="NSA IDR built for your specialty. Not a generalist shop."
      intro="A spine surgeon should scroll to spine and immediately feel: these are my people. Every federal IDR submission is one claim per CPT, specialty coded — the reason we win disputes generalist attorneys lose."
      bottomCtaHeading="Get a free NSA IDR review for your specialty"
    >
      {SPECIALTIES.map((specialty, index) => (
        <MarketingSection
          key={specialty.slug}
          id={specialty.slug}
          variant={index % 2 === 0 ? "white" : "neutral"}
        >
          <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4">
            {specialty.name}
          </h2>
          <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-6">
            {specialty.credibility}
          </p>
          <dl className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mb-8">
            <div>
              <dt className="font-body text-xs uppercase tracking-widest text-gray-400 mb-2">
                Typical case profile
              </dt>
              <dd className="font-body text-gray-700 font-light text-sm">{specialty.caseProfile}</dd>
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
            {specialty.quote}
          </blockquote>
          <Link
            href={CTA.caseReview.href}
            className="inline-flex items-center gap-3 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
          >
            Get a free NSA IDR review — {specialty.shortName.toLowerCase()}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </MarketingSection>
      ))}
    </MarketingPage>
  );
}
