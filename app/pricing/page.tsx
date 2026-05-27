import type { Metadata } from "next";
import {
  MarketingPage,
  MarketingSection,
  SydraCrossLink,
} from "@/components/MarketingPage";
import { ThreeWaysToHandleNsa } from "@/components/ThreeWaysToHandleNsa";
import { LawyerComparisonTable } from "@/components/LawyerComparisonTable";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { DOLLAR_KEPT_CONTRAST, VASTLY_MORE_LINE } from "@/lib/pricing-copy";

export const metadata: Metadata = createPageMetadata({
  title: "NSA IDR Pricing | Quoted to Your Volume | Kronos",
  description:
    "NSA IDR pricing quoted to your volume — not a 20% contingency cut. Most practices keep roughly nine in ten dollars won, plus more disputes won at IDR.",
  path: "/pricing",
});

export default function PricingPage() {
  const crumbs = breadcrumbItems([{ name: "Pricing", path: "/pricing" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      eyebrow="NSA IDR pricing"
      h1="Keep the greater share of every NSA IDR award."
      intro={`${DOLLAR_KEPT_CONTRAST} ${VASTLY_MORE_LINE} We quote to your volume and specialty on a consultation call.`}
      primaryCta="consultation"
      bottomCtaHeading="Get your NSA IDR quote"
    >
      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
          How our pricing works
        </h2>
        <ul className="space-y-4 max-w-3xl">
          {[
            "Monthly retainer covers active claim management.",
            "Per claim fee, scaled to volume and specialty complexity.",
            "Quarterly recovery review — if we do not show a material improvement vs your prior attorney, we discuss adjustments.",
            "No long term lock in. Month to month engagements available.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-gray-600 font-light">
              <span className="w-1.5 h-1.5 bg-kronos-cyan mt-2 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </MarketingSection>

      <MarketingSection variant="neutral">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
          Why we do not publish exact prices
        </h2>
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl">
          Attorneys publish one number: 20% of every recovery. A flat rate on our site would be
          wrong for the same reason — your volume, specialty, and case mix all matter. On a
          consultation call we quote a fee so you keep the greater share of every award — typically
          about nine in ten dollars won, not eight. {VASTLY_MORE_LINE}
        </p>
      </MarketingSection>

      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
          The attorney comparison
        </h2>
        <LawyerComparisonTable />
      </MarketingSection>

      <MarketingSection variant="neutral">
        <ThreeWaysToHandleNsa variant="neutral" />
      </MarketingSection>

      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
          Run IDR in house with software?
        </h2>
        <SydraCrossLink />
      </MarketingSection>
    </MarketingPage>
  );
}
