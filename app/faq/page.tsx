import type { Metadata } from "next";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { FAQSection } from "@/components/FAQSection";
import { FAQPageSchema } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { FAQ_CATEGORIES, ALL_FAQS } from "@/lib/faqs";

export const metadata: Metadata = createPageMetadata({
  title: "NSA IDR FAQ | Kronos Revenue",
  description:
    "Answers about switching from an attorney, Kronos Revenue pricing, contracts, onboarding, recovery rates, and HIPAA compliance for NSA IDR services.",
  path: "/faq",
});

export default function FaqPage() {
  const crumbs = breadcrumbItems([{ name: "NSA IDR FAQ", path: "/faq" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      eyebrow="NSA · Federal IDR"
      h1="Questions about switching your NSA IDR from an attorney."
      intro="Switching from an attorney, pricing, contracts, process, recovery, and security — honest answers before you book a consultation."
      bottomCta={false}
    >
      <FAQPageSchema items={ALL_FAQS} />

      {FAQ_CATEGORIES.map((category, index) => (
        <MarketingSection
          key={category.id}
          id={category.id}
          variant={index % 2 === 0 ? "white" : "neutral"}
          className="!py-10 sm:!py-14"
        >
          <FAQSection
            heading={category.title}
            headingId={`faq-${category.id}`}
            items={category.items}
            variant="light"
          />
        </MarketingSection>
      ))}
    </MarketingPage>
  );
}
