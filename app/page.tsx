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
  title: "NSA IDR | Stop Paying Lawyers 20% | Kronos",
  description:
    "No Surprises Act IDR, done for you. Quoted to your volume — not a 20% contingency. We win more federal IDR disputes. Free NSA IDR review.",
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
