import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { SPECIALTY_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { getSpecialtyBySlug, SPECIALTIES } from "@/lib/specialties";
import { CTA } from "@/lib/ctas";

type Props = { params: Promise<{ specialty: string }> };

export function generateStaticParams() {
  return SPECIALTIES.map((s) => ({ specialty: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { specialty: slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) return {};
  const seo = PAGE_SEO.specialty[specialty.seoKey];
  return createPageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/specialties/${slug}`,
  });
}

export default async function SpecialtyLandingPage({ params }: Props) {
  const { specialty: slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) notFound();

  const path = `/specialties/${slug}` as const;
  const crumbs = breadcrumbItems([
    { name: "Specialties", path: "/specialties" },
    { name: specialty.name, path },
  ]);

  const service = marketingServiceSchema(
    path,
    `NSA IDR for ${specialty.name}`,
    PAGE_SEO.specialty[specialty.seoKey].description,
    "No Surprises Act IDR"
  );

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath={path}
      service={service}
      faqs={SPECIALTY_FAQS}
      faqHeading={`${specialty.name} NSA IDR questions`}
      faqHeadingId="specialty-landing-faq"
      eyebrow="NSA · Federal IDR"
      h1={`${specialty.name} NSA IDR`}
      intro={
        <>
          {specialty.intro}{" "}
          <Link href={CTA.idrChecklist.href} className="text-kronos-cyan underline">
            Download the NSA IDR checklist
          </Link>{" "}
          before your first filing.
        </>
      }
      bottomCtaHeading={specialty.ctaLabel}
    >
      <MarketingSection variant="white" labelledById="specialty-body-heading">
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mb-8">
          {specialty.body}
        </p>
        <ReviewHeading
          review
          id="specialty-body-heading"
          className="font-heading text-xl sm:text-2xl text-gray-900 mb-6"
        >
          Common {specialty.name} CPT codes in NSA IDR
        </ReviewHeading>
        <div className="space-y-6 max-w-3xl">
          {specialty.cptSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-heading text-base text-gray-900 mb-2">{section.title}</h3>
              <p className="font-body text-sm text-gray-600 font-light leading-relaxed">
                {section.codes}
              </p>
            </div>
          ))}
        </div>
        <p className="font-body text-sm text-gray-700 mt-8">{specialty.claimRange}</p>
        <Link
          href={CTA.caseReview.href}
          className="inline-flex items-center gap-3 mt-6 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all"
        >
          {specialty.ctaLabel}
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </MarketingSection>
    </MarketingPage>
  );
}
