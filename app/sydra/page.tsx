import type { Metadata } from "next";
import SydraBridgeContent from "./SydraBridgeContent";
import { BreadcrumbListSchema, WebPageSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, absoluteUrl } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { PAGE_SEO } from "@/lib/page-seo";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.sydra.title,
  description: PAGE_SEO.sydra.description,
  path: "/sydra",
  ogImageAlt: "In house IDR vs outsourcing with Sydra and Kronos Revenue",
});

export default function SydraPage() {
  const pageUrl = absoluteUrl("/sydra");
  const crumbs = breadcrumbItems([{ name: "Sydra", path: "/sydra" }]);

  return (
    <>
      <BreadcrumbListSchema items={crumbs} />
      <WebPageSchema
        name="In House IDR vs Outsourcing"
        description={PAGE_SEO.sydra.description}
        url={pageUrl}
      />
      <div className="bg-kronos-bg min-h-dvh">
        <Breadcrumbs items={crumbs} />
        <SydraBridgeContent />
      </div>
    </>
  );
}
