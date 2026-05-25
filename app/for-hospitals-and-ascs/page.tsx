import type { Metadata } from "next";
import { HospitalGroupForm } from "@/components/HospitalGroupForm";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems, serviceLinks } from "@/lib/navigation";
import { HOSPITAL_FAQS } from "@/lib/faqs";
import { ReviewHighlight } from "@/components/ReviewHighlight";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OON Billing for Hospital Groups and ASCs | Kronos",
  description:
    "Centralized No Surprises Act dispute resolution and out of network billing for multi facility hospital groups and ASC management companies. One partner, every site.",
  path: "/for-hospitals-and-ascs",
});

const TRUST_ITEMS = [
  "Single point of contact across all facilities",
  "Consistent IDR strategy and outcomes reporting",
  "Scalable from 1 location to 50+ sites",
  "Flat fee per CPT code, never a percentage",
];

export default function ForHospitalsAndASCsPage() {
  return (
    <ServiceLandingPage
      path="/for-hospitals-and-ascs"
      serviceId={`${SITE_URL}/for-hospitals-and-ascs#service`}
      serviceName="Enterprise Out of Network Billing for Hospital Groups"
      serviceDescription="Centralized NSA dispute resolution and out of network collections for hospital systems and ASC management companies."
      serviceType="Enterprise Revenue Cycle"
      breadcrumbs={breadcrumbItems([
        { name: "For Hospitals and ASCs", path: "/for-hospitals-and-ascs" },
      ])}
      eyebrow="Multi facility partnership"
      h1="One OON billing partner for every facility"
      intro={
        <ReviewHighlight>
          Hospital groups and ASC management companies lose revenue when out of network billing is
          fragmented. Kronos Revenue centralizes your NSA dispute strategy and collections across
          all locations.
        </ReviewHighlight>
      }
      trustItems={TRUST_ITEMS}
      footnote={
        <ReviewHighlight>
          Working with hospital systems, ASC management companies, and multi specialty physician
          groups nationwide.
        </ReviewHighlight>
      }
      formTitle="Tell us about your organization"
      form={<HospitalGroupForm />}
      faqs={HOSPITAL_FAQS}
      relatedLinks={serviceLinks}
    />
  );
}
