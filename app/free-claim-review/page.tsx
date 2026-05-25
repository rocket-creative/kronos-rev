import type { Metadata } from "next";
import { ClaimReviewForm } from "@/components/ClaimReviewForm";
import { ServiceLandingPage } from "@/components/ServiceLandingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems, serviceLinks } from "@/lib/navigation";
import { FREE_CLAIM_FAQS } from "@/lib/faqs";
import { ReviewHighlight } from "@/components/ReviewHighlight";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Free OON Surgical Claim Review, No Cost | Kronos",
  description:
    "Free claim review for orthopedic, neurosurgery, spine, and plastic surgery practices. We find underpaid CPT codes and file NSA disputes. Request your review today.",
  path: "/free-claim-review",
});

const TRUST_ITEMS = [
  "Flat fee per CPT code, not a percentage",
  "Every operative report reviewed before filing",
  "No Surprises Act experts",
  "Orthopedic, neurosurgery, spine, and plastic surgery",
];

export default function FreeClaimReviewPage() {
  return (
    <ServiceLandingPage
      path="/free-claim-review"
      serviceId={`${SITE_URL}/free-claim-review#service`}
      serviceName="Free Out of Network Surgical Claim Review"
      serviceDescription="No cost review of out of network surgical claims with underpaid CPT identification and No Surprises Act dispute filing."
      serviceType="Medical Billing Review"
      breadcrumbs={breadcrumbItems([{ name: "Free Claim Review", path: "/free-claim-review" }])}
      eyebrow="No cost. No commitment."
      h1="Free claim review"
      intro={
        <ReviewHighlight>
          We review your out of network surgical claims, identify every underpaid CPT code, and
          show you exactly how much you are owed before we file a single dispute.
        </ReviewHighlight>
      }
      trustItems={TRUST_ITEMS}
      footnote={
        <ReviewHighlight>
          Specialty focus: orthopedic surgery, neurosurgery, spine, and plastic surgery. We also
          review claims for any out of network provider performing services at in network ASCs
          or hospitals.
        </ReviewHighlight>
      }
      formTitle="Tell us about your practice"
      form={<ClaimReviewForm />}
      faqs={FREE_CLAIM_FAQS}
      relatedLinks={serviceLinks}
      showPrimarySpecialties
    />
  );
}
