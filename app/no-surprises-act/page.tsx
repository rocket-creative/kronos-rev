import type { Metadata } from "next";
import { NSADisputeForm } from "@/components/NSADisputeForm";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems, serviceLinks } from "@/lib/navigation";
import { NSA_FAQS } from "@/lib/faqs";
import { ReviewHighlight } from "@/components/ReviewHighlight";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "No Surprises Act IDR Disputes for Surgeons | Kronos",
  description:
    "Specialty trained NSA IDR for orthopedic, neurosurgery, spine, and plastic surgery practices. Full case management, federal IDR, post award follow up. Call (914) 705 6830.",
  path: "/no-surprises-act",
});

const TRUST_ITEMS = [
  "All major commercial payers: United, Cigna, Anthem, Aetna",
  "Flat fee per CPT code, never a percentage",
  "Full case management from filing through arbitration",
  "Operative report reviewed for every dispute",
  "Post award follow up until every dollar is collected",
];

export default function NoSurprisesActPage() {
  return (
    <ServiceLandingPage
      path="/no-surprises-act"
      serviceId={`${SITE_URL}/no-surprises-act#service`}
      serviceName="No Surprises Act IDR Dispute Resolution"
      serviceDescription="Federal IDR dispute resolution for out of network surgeons facing underpayment from major commercial payers."
      serviceType="Healthcare Dispute Resolution"
      breadcrumbs={breadcrumbItems([{ name: "No Surprises Act", path: "/no-surprises-act" }])}
      eyebrow="NSA IDR dispute resolution"
      h1="Stop leaving money on the table"
      intro={
        <ReviewHighlight>
          United, Cigna, Anthem, and Aetna systematically short pay out of network surgical claims.
          The No Surprises Act gives you the right to dispute. We fight every one.
        </ReviewHighlight>
      }
      trustItems={TRUST_ITEMS}
      footnote={
        <ReviewHighlight>
          Specialty focus: orthopedic surgery, neurosurgery, spine, and plastic surgery. Serving
          out of network surgical practices nationwide.
        </ReviewHighlight>
      }
      formTitle="Tell us about your disputes"
      form={<NSADisputeForm />}
      faqs={NSA_FAQS}
      relatedLinks={serviceLinks}
      showPrimarySpecialties
    />
  );
}
