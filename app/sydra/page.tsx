import type { Metadata } from "next";
import SydraBridgeContent from "./SydraBridgeContent";
import { BreadcrumbListSchema, WebPageSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata, absoluteUrl } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";

export const metadata: Metadata = createPageMetadata({
  title: "Sydra | NSA IDR Software by Kronos Health",
  description:
    "Sydra is Kronos Health's AI software for No Surprises Act IDR. Self-Serve or Sydra + Kronos Support on sydrahealth.com. Kronos Full-Service is handled on Kronos Revenue.",
  path: "/sydra",
  ogImageAlt: "Sydra NSA IDR software by Kronos Health",
  robots: { index: false, follow: true },
});

export default function SydraPage() {
  const pageUrl = absoluteUrl("/sydra");
  const crumbs = breadcrumbItems([{ name: "Sydra", path: "/sydra" }]);

  return (
    <>
      <BreadcrumbListSchema items={crumbs} />
      <WebPageSchema
        name="Sydra NSA IDR Software"
        description="Bridge to Sydra, Kronos Health's AI software for No Surprises Act IDR disputes."
        url={pageUrl}
      />
      <div className="bg-kronos-bg min-h-dvh">
        <Breadcrumbs items={crumbs} />
        <SydraBridgeContent />
      </div>
    </>
  );
}
