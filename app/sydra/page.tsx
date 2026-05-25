import type { Metadata } from "next";
import SydraPageContent from "./SydraPageContent";
import {
  BreadcrumbListSchema,
  WebPageSchema,
} from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, absoluteUrl } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";

export const metadata: Metadata = createPageMetadata({
  title: "Sydra AI IDR Platform for Surgical Practices | Kronos",
  description:
    "Sydra automates No Surprises Act IDR for surgical practices. AI submissions, deadline tracking, and analytics. Live in production. Request a demo or join the waitlist.",
  path: "/sydra",
  ogImageAlt: "Sydra AI IDR platform by Kronos Revenue",
});

export default function SydraPage() {
  const pageUrl = absoluteUrl("/sydra");
  const crumbs = breadcrumbItems([{ name: "Sydra", path: "/sydra" }]);

  return (
    <>
      <BreadcrumbListSchema items={crumbs} />
      <WebPageSchema
        name="Sydra AI IDR Platform"
        description="AI powered No Surprises Act IDR submission platform for surgical practices by Kronos Revenue."
        url={pageUrl}
      />
      <div className="bg-kronos-bg min-h-dvh">
        <Breadcrumbs items={crumbs} />
        <SydraPageContent />
      </div>
    </>
  );
}
