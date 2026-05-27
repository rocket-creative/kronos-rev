import type { Metadata } from "next";
import { ClaimReviewForm } from "@/components/ClaimReviewForm";
import { BreadcrumbListSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { EMAIL, OFFICE_ADDRESS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: "Free NSA IDR Review | Kronos Revenue",
  description:
    "Get a free No Surprises Act IDR case review. See what you keep per dollar won — versus a 20% attorney contingency.",
  path: "/case-review",
});

export default function CaseReviewPage() {
  const crumbs = breadcrumbItems([{ name: "Free IDR Review", path: "/case-review" }]);

  return (
    <div className="bg-kronos-bg min-h-dvh">
      <BreadcrumbListSchema items={crumbs} />
      <Breadcrumbs items={crumbs} />

      <section
        className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20"
        aria-labelledby="case-review-heading"
      >
        <div className="mb-10 sm:mb-14">
          <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
            Free NSA IDR review
          </p>
          <h1
            id="case-review-heading"
            className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6 max-w-3xl"
          >
            Get a free NSA IDR review
          </h1>
          <p className="font-body text-white/70 text-sm font-light leading-relaxed max-w-2xl">
            Submit the form and tell us about your No Surprises Act disputes. We show you what you
            keep per dollar recovered at IDR — versus twenty cents on the dollar to a contingency
            attorney. Prefer to talk? Call us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div id="form" className="bg-white/10 border border-white/15 p-6 sm:p-8">
              <h2 className="font-heading text-2xl text-white mb-6">Tell us about your practice</h2>
              <ClaimReviewForm />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-white/15 p-6 sm:p-8 lg:sticky lg:top-28">
              <h2 className="font-heading text-xl text-white mb-4">Direct contact</h2>
              <p className="font-body text-white/60 text-sm font-light mb-6">
                Rather speak with someone now? Call or email and a Kronos specialist will follow up
                within one business day.
              </p>
              <dl className="space-y-4">
                <div>
                  <dt className="font-body text-xs uppercase tracking-widest text-white/40 mb-1">
                    Phone
                  </dt>
                  <dd>
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="font-body text-white hover:text-kronos-cyan transition-colors"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-xs uppercase tracking-widest text-white/40 mb-1">
                    Email
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="font-body text-white hover:text-kronos-cyan transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-xs uppercase tracking-widest text-white/40 mb-1">
                    Office
                  </dt>
                  <dd className="font-body text-white/70 font-light text-sm">
                    <address className="not-italic">
                      {OFFICE_ADDRESS.street}
                      <br />
                      {OFFICE_ADDRESS.city}, {OFFICE_ADDRESS.state} {OFFICE_ADDRESS.zip}
                    </address>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
