import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  MarketingPage,
  MarketingSection,
} from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { PricingExitIntent } from "@/components/PricingExitIntent";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { PRICING_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { CTA } from "@/lib/ctas";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.pricing.title,
  description: PAGE_SEO.pricing.description,
  path: "/pricing",
});

const service = marketingServiceSchema(
  "/pricing",
  "NSA IDR Pricing",
  "Consultative NSA IDR pricing quoted to volume and specialty.",
  "Healthcare Revenue Services"
);

const pricingQuestions = [
  {
    q: "Is there a long term contract?",
    a: "Month to month engagements are available. Longer term arrangements also available.",
  },
  {
    q: "What if I have a low volume month?",
    a: "Per claim fees scale with volume. A light month costs less.",
  },
  {
    q: "What if a case loses?",
    a: "You owe nothing beyond any IDRE administrative fee CMS charges both parties (currently $50 per dispute — confirm before filing). We review lost determinations for re filing eligibility.",
  },
  {
    q: "Do you charge for the initial review?",
    a: "No. The EOB review and estimated recovery calculation are always free.",
  },
];

export default function PricingPage() {
  const crumbs = breadcrumbItems([{ name: "Pricing", path: "/pricing" }]);

  return (
    <>
      <MarketingPage
        breadcrumbs={crumbs}
        currentPath="/pricing"
        service={service}
        faqs={PRICING_FAQS}
        faqHeading="Common pricing questions"
        faqHeadingId="pricing-faq-heading"
        eyebrow="NSA IDR pricing"
        h1="How Kronos Revenue is priced. And why there is no number on this page."
        intro="The honest answer: your quote depends on your specialty, monthly out of network claim volume, and case complexity. Publishing one number would be wrong for most practices we work with."
        bottomCtaHeading="Request your free IDR review"
      >
        <MarketingSection variant="white" labelledById="pricing-current-heading">
          <ReviewHeading
            review
            id="pricing-current-heading"
            className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
          >
            What you are currently paying.
          </ReviewHeading>
          <div className="space-y-8 max-w-3xl">
            <div>
              <h3 className="font-heading text-lg text-gray-900 mb-2">
                If you use a contingency attorney
              </h3>
              <p className="font-body text-gray-600 font-light leading-relaxed">
                20% of every award, indefinitely. On $300,000 in annual IDR recoveries: $60,000 per year
                in attorney fees. Plus: disputes lost from batched CPT filings never appear in the recovery
                total at all.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg text-gray-900 mb-2">If you are not filing IDR</h3>
              <p className="font-body text-gray-600 font-light leading-relaxed">
                Zero attorney fees. Also zero IDR recovery.
              </p>
            </div>
            <div>
              <h3 className="font-heading text-lg text-gray-900 mb-2">The Kronos model</h3>
              <p className="font-body text-gray-600 font-light leading-relaxed">
                Consultative fee quoted to your volume. Not a percentage of every recovery. Most practices
                keep roughly 90 cents per dollar won after our fee. No long term contract required.
                Month to month available. Per claim fees scale with volume.
              </p>
            </div>
          </div>
          <p className="mt-8">
            <Link
              href={CTA.compareAttorney.href}
              className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold"
            >
              {CTA.compareAttorney.label}
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </p>
        </MarketingSection>

        <MarketingSection variant="neutral" labelledById="pricing-call-heading">
          <ReviewHeading
            review
            id="pricing-call-heading"
            className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
          >
            What happens on the consultation call.
          </ReviewHeading>
          <ul className="space-y-3 max-w-3xl font-body text-gray-600 font-light">
            <li>You send us 3 to 5 recent EOBs.</li>
            <li>We calculate your estimated annual IDR recovery potential.</li>
            <li>We show you what you are currently recovering versus what you are entitled to.</li>
            <li>We quote a Kronos fee for your specialty and volume.</li>
            <li>You decide whether the math favors switching. If it does not, we tell you.</li>
          </ul>
          <p className="mt-6">
            <Link href="/how-we-work" className="text-kronos-green-dark text-sm underline">
              How the NSA IDR process works
            </Link>
          </p>
        </MarketingSection>

        <MarketingSection variant="white" labelledById="pricing-questions-heading">
          <ReviewHeading
            review
            id="pricing-questions-heading"
            className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
          >
            Common pricing questions.
          </ReviewHeading>
          <dl className="space-y-6 max-w-3xl">
            {pricingQuestions.map(({ q, a }) => (
              <div key={q}>
                <dt className="font-heading text-base text-gray-900 mb-2">{q}</dt>
                <dd className="font-body text-gray-600 font-light">{a}</dd>
              </div>
            ))}
          </dl>
        </MarketingSection>
      </MarketingPage>
      <PricingExitIntent />
    </>
  );
}
