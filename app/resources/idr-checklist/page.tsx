import type { Metadata } from "next";
import { MarketingPage, MarketingSection } from "@/components/MarketingPage";
import { IdrChecklistGate } from "@/components/IdrChecklistGate";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.idrChecklist.title,
  description: PAGE_SEO.idrChecklist.description,
  path: "/resources/idr-checklist",
});

export default function IdrChecklistPage() {
  const crumbs = breadcrumbItems([
    { name: "Resources", path: "/resources/idr-checklist" },
    { name: "IDR Checklist", path: "/resources/idr-checklist" },
  ]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      currentPath="/resources/idr-checklist"
      eyebrow="Free resource"
      h1="NSA IDR filing checklist"
      intro="Every document, deadline, and CPT rule you need before submitting to the IDRE portal. Enter your email to view the full checklist."
      bottomCta={false}
      showRelated={false}
    >
      <MarketingSection variant="white" labelledById="checklist-gate">
        <IdrChecklistGate />
      </MarketingSection>
    </MarketingPage>
  );
}
