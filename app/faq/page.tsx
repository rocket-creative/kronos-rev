import type { Metadata } from "next";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { FAQSection } from "@/components/FAQSection";
import { FAQPageSchema } from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { FAQ_CATEGORIES, ALL_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.faq.title,
  description: PAGE_SEO.faq.description,
  path: "/faq",
});

export default function FaqPage() {
  const crumbs = breadcrumbItems([{ name: "NSA IDR FAQ", path: "/faq" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/faq"
      showMedicallyReviewed={false}
      showReferences={false}
      bottomCta={false}
      eyebrow="NSA · Federal IDR"
      h1="Questions about Kronos Revenue. Answered the way a specialist would answer them."
      intro="These are the questions practices actually ask before switching. If your question is not here, call (914) 705 6830 or email intake@kronosrevenue.com."
    >
      <FAQPageSchema items={ALL_FAQS} />

      {FAQ_CATEGORIES.map((category, index) => (
        <MarketingSection
          key={category.id}
          id={category.id}
          variant={index % 2 === 0 ? "white" : "neutral"}
          className="!py-10 sm:!py-14"
          labelledById={`faq-${category.id}-heading`}
        >
          <FAQSection
            heading={category.title}
            headingId={`faq-${category.id}-heading`}
            items={category.items}
            variant="light"
          />
        </MarketingSection>
      ))}
    </MarketingPage>
  );
}
