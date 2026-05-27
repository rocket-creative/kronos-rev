import type { Metadata } from "next";
import HomePageContent from "./HomePageContent";
import { createPageMetadata } from "@/lib/metadata";
import { PAGE_SEO } from "@/lib/page-seo";
import {
  OrganizationSchema,
  WebSiteSchema,
  ServiceSchema,
  FAQPageSchema,
  PersonSchema,
  TEAM_MEMBERS,
} from "@/components/JsonLd";
import { HOME_FAQS } from "@/lib/faqs";
import { marketingServiceSchema } from "@/lib/service-schema";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.home.title,
  description: PAGE_SEO.home.description,
  path: "/",
});

const homeService = marketingServiceSchema(
  "/",
  "Revenue Cycle Management and IDR Dispute Resolution",
  "Specialty trained revenue cycle management and federal IDR for orthopedic, neurosurgery, spine, and plastic surgery practices. Full case management, NSA submissions, and post award follow up, end to end.",
  "Healthcare Revenue Services"
);

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <ServiceSchema {...homeService} />
      <FAQPageSchema items={HOME_FAQS} />
      {TEAM_MEMBERS.map((person) => (
        <PersonSchema key={person.id} person={person} />
      ))}
      <HomePageContent />
    </>
  );
}
