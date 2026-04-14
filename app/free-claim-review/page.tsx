import type { Metadata } from "next";
import { ClaimReviewForm } from "@/components/ClaimReviewForm";
import { BreadcrumbListSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Free Claim Review for Out-of-Network Surgeons | Kronos Revenue",
  description:
    "Get a free review of your out-of-network surgical claims. Kronos Revenue identifies underpaid CPT codes and files No Surprises Act disputes to recover what you are owed.",
  alternates: {
    canonical: "https://kronosrevenue.co/free-claim-review",
  },
  openGraph: {
    title: "Free Claim Review for Out-of-Network Surgeons | Kronos Revenue",
    description:
      "Get a free review of your OON surgical claims. We identify underpaid CPT codes and file NSA disputes to recover what you are owed.",
    url: "https://kronosrevenue.co/free-claim-review",
    siteName: "Kronos Revenue",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Claim Review for Out-of-Network Surgeons | Kronos Revenue",
    description:
      "Free OON claim review. We identify underpaid CPT codes and file NSA disputes on your behalf.",
  },
};

const TRUST_ITEMS = [
  "Flat fee per CPT code — not a percentage",
  "Every operative report reviewed before filing",
  "No Surprises Act experts",
  "Neurosurgery and surgical subspecialties",
];

export default function FreeClaimReviewPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: "https://kronosrevenue.co" },
          { name: "Free Claim Review", url: "https://kronosrevenue.co/free-claim-review" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              No cost. No commitment.
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6">
              Free claim review
            </h1>
            <p className="font-body text-white/60 text-sm font-light leading-relaxed mb-8">
              We review your out-of-network surgical claims, identify every underpaid CPT code, and show you exactly how much you are owed before we file a single dispute.
            </p>
            <ul className="space-y-3 mb-10">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 shrink-0 border border-kronos-cyan/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-kronos-cyan" />
                  </span>
                  <span className="font-body text-sm text-white/70 font-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-xs text-white/30 font-light">
              Positive targets: out-of-network neurosurgeons, general surgeons, surgical subspecialists, GI, and any OON provider performing services at in-network ASCs or hospitals.
            </p>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="bg-kronos-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl text-white mb-6">Tell us about your practice</h2>
              <ClaimReviewForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
