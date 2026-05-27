import type { Metadata } from "next";
import {
  MarketingPage,
  MarketingSection,
  SydraCrossLink,
} from "@/components/MarketingPage";
import { ReviewHeading } from "@/components/ReviewHeading";
import { ThreeWaysToHandleNsa } from "@/components/ThreeWaysToHandleNsa";
import { LawyerComparisonTable } from "@/components/LawyerComparisonTable";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { PRICING_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { marketingServiceSchema } from "@/lib/service-schema";
import { DOLLAR_KEPT_CONTRAST, VASTLY_MORE_LINE } from "@/lib/pricing-copy";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.pricing.title,
  description: PAGE_SEO.pricing.description,
  path: "/pricing",
});

const service = marketingServiceSchema(
  "/pricing",
  "NSA IDR Pricing",
  "Volume based NSA IDR pricing quoted on consultation. Most practices keep roughly nine in ten dollars won at IDR versus a twenty percent attorney contingency.",
  "Healthcare Revenue Services"
);

export default function PricingPage() {
  const crumbs = breadcrumbItems([{ name: "Pricing", path: "/pricing" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/pricing"
      service={service}
      faqs={PRICING_FAQS}
      faqHeading="Questions about NSA IDR pricing"
      faqHeadingId="pricing-faq-heading"
      eyebrow="NSA IDR pricing"
      h1="Keep the greater share of every NSA IDR award."
      intro={`${DOLLAR_KEPT_CONTRAST} ${VASTLY_MORE_LINE} We quote to your volume and specialty on a consultation call.`}
      primaryCta="consultation"
      bottomCtaHeading="Get your NSA IDR quote"
    >
      <MarketingSection variant="white" labelledById="pricing-works-heading">
        <ReviewHeading review id="pricing-works-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
          How does Kronos Revenue pricing work?
        </ReviewHeading>
        <ul className="space-y-4 max-w-3xl">
          {[
            "Monthly retainer covers active claim management.",
            "Per claim fee, scaled to volume and specialty complexity.",
            "Quarterly recovery review. If we do not show a material improvement vs your prior attorney, we discuss adjustments.",
            "No long term lock in. Month to month engagements available.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-gray-600 font-light">
              <span className="w-1.5 h-1.5 bg-kronos-cyan mt-2 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="pricing-publish-heading">
        <ReviewHeading
          review
          id="pricing-publish-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6"
        >
          Why does Kronos not publish exact prices online?
        </ReviewHeading>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl">
          Attorneys publish one number: 20% of every recovery. A flat rate on our site would be
          wrong for the same reason. Your volume, specialty, and case mix all matter. On a
          consultation call we quote a fee so you keep the greater share of every award, typically
          about nine in ten dollars won, not eight. {VASTLY_MORE_LINE}
        </p>
      </MarketingSection>

      <MarketingSection variant="white" labelledById="pricing-compare-heading">
        <ReviewHeading
          review
          id="pricing-compare-heading"
          className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8"
        >
          How does Kronos pricing compare to a 20% attorney?
        </ReviewHeading>
        <LawyerComparisonTable />
      </MarketingSection>

      <MarketingSection variant="neutral" labelledById="pricing-tiers-heading">
        <h2 id="pricing-tiers-heading" className="sr-only">
          Three ways to handle NSA IDR
        </h2>
        <ThreeWaysToHandleNsa variant="neutral" />
      </MarketingSection>

      <MarketingSection variant="white" labelledById="pricing-sydra-heading">
        <ReviewHeading review id="pricing-sydra-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
          What if my team wants to run NSA IDR software in house?
        </ReviewHeading>
        <SydraCrossLink />
      </MarketingSection>
    </MarketingPage>
  );
}
