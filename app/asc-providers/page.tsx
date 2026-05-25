import type { Metadata } from "next";
import { ASCProviderForm } from "@/components/ASCProviderForm";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems, serviceLinks } from "@/lib/navigation";
import { ASC_FAQS } from "@/lib/faqs";
import { ReviewHighlight } from "@/components/ReviewHighlight";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "OON Surgeon at In Network ASC? Recover Pay | Kronos",
  description:
    "Out of network at an in network ASC or hospital? Specialty trained NSA disputes for orthopedic, neurosurgery, spine, and plastic surgery. End to end. Free review.",
  path: "/asc-providers",
});

const TRUST_ITEMS = [
  "Built for OON providers at in network facilities",
  "Orthopedic, neurosurgery, spine, plastic surgery first",
  "Flat fee per CPT code, never a percentage of recovery",
  "Full case management, start to finish",
];

export default function ASCProvidersPage() {
  return (
    <ServiceLandingPage
      path="/asc-providers"
      serviceId={`${SITE_URL}/asc-providers#service`}
      serviceName="Out of Network Provider Billing at In Network ASCs"
      serviceDescription="No Surprises Act dispute resolution for out of network physicians performing procedures at in network ASCs and hospitals."
      serviceType="Ambulatory Surgery Center Billing"
      breadcrumbs={breadcrumbItems([{ name: "ASC Providers", path: "/asc-providers" }])}
      eyebrow="OON at an in network facility"
      h1="Your ASC is in network. You are not."
      intro={
        <ReviewHighlight>
          When you perform procedures at an in network ASC or hospital as an out of network provider,
          the No Surprises Act requires insurers to pay you fairly. Most do not. We make sure they
          do.
        </ReviewHighlight>
      }
      trustItems={TRUST_ITEMS}
      footnote={
        <ReviewHighlight>
          Primary specialties: orthopedic surgery, neurosurgery, spine, and plastic surgery. Also
          working with GI, general surgery, pain management, ENT, and ophthalmology providers
          performing at in network ASCs.
        </ReviewHighlight>
      }
      formTitle="Tell us about your practice"
      form={<ASCProviderForm />}
      faqs={ASC_FAQS}
      relatedLinks={serviceLinks}
      showPrimarySpecialties
    />
  );
}
