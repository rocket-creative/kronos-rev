import type { Metadata } from "next";
import { SynaptixBillingForm } from "@/components/SynaptixBillingForm";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems, serviceLinks } from "@/lib/navigation";
import { SYNAPTIX_FAQS } from "@/lib/faqs";
import { ReviewHighlight } from "@/components/ReviewHighlight";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Synaptix Concussion Program Billing Support | Kronos",
  description:
    "CPT coding, claim management, and NSA disputes for Synaptix concussion programs. Get paid for every session. Flat fee structure. Request a program review.",
  path: "/synaptix-billing",
});

const TRUST_ITEMS = [
  "Full CPT coding for every concussion session",
  "Claim management and payer follow up",
  "NSA dispute filing when payers short pay",
  "Built for Synaptix licensees, we know the protocol",
];

export default function SynaptixBillingPage() {
  return (
    <ServiceLandingPage
      path="/synaptix-billing"
      serviceId={`${SITE_URL}/synaptix-billing#service`}
      serviceName="Synaptix Concussion Program Billing"
      serviceDescription="Billing, coding, and No Surprises Act dispute support for Synaptix concussion program licensees."
      serviceType="Concussion Program Revenue Cycle"
      breadcrumbs={breadcrumbItems([{ name: "Synaptix Billing", path: "/synaptix-billing" }])}
      eyebrow="Synaptix add on billing"
      h1="Get paid for every concussion session"
      intro={
        <ReviewHighlight>
          You have licensed Synaptix. Your concussion program is running. Now let us handle the
          billing: CPT coding, claim submission, payer disputes, and collections, so you capture
          every dollar the program generates.
        </ReviewHighlight>
      }
      trustItems={TRUST_ITEMS}
      footnote={
        <ReviewHighlight>
          Working with neurosurgery, orthopedic surgery, neurology, PM&amp;R, and sports medicine
          practices.
        </ReviewHighlight>
      }
      formTitle="Tell us about your program"
      form={<SynaptixBillingForm />}
      faqs={SYNAPTIX_FAQS}
      relatedLinks={serviceLinks}
    />
  );
}
