import type { Metadata } from "next";
import HomePageContent from "./HomePageContent";
import { createPageMetadata } from "@/lib/metadata";
import {
  OrganizationSchema,
  WebSiteSchema,
  ServiceSchema,
  FAQPageSchema,
  PersonSchema,
  TEAM_MEMBERS,
} from "@/components/JsonLd";
import { HOME_FAQS } from "@/lib/faqs";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Healthcare IDR & Revenue Cycle Management | Kronos",
  description:
    "Specialty trained revenue cycle for orthopedic, neurosurgery, spine, and plastic surgery. Full NSA IDR case management. Call (914) 705 6830 for a free review.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <OrganizationSchema />
      <WebSiteSchema />
      <ServiceSchema
        name="Revenue Cycle Management and IDR Dispute Resolution"
        description="Specialty trained revenue cycle management and federal IDR for orthopedic, neurosurgery, spine, and plastic surgery practices. Full case management, NSA submissions, and post award follow up — end to end."
        url={SITE_URL}
        serviceType="Healthcare Revenue Services"
        serviceId={`${SITE_URL}/#service-home`}
      />
      <FAQPageSchema items={HOME_FAQS} />
      {TEAM_MEMBERS.map((person) => (
        <PersonSchema key={person.id} person={person} />
      ))}
      <HomePageContent />
    </>
  );
}
