import type { Metadata } from "next";
import { ClaimReviewForm } from "@/components/ClaimReviewForm";
import { FAQSection } from "@/components/FAQSection";
import {
  BreadcrumbListSchema,
  FAQPageSchema,
  LocalBusinessSchema,
} from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ReferencesSection } from "@/components/ReferencesSection";
import { RelatedServices } from "@/components/RelatedServices";
import { createPageMetadata, absoluteUrl } from "@/lib/metadata";
import { breadcrumbItems, mainNavLinks } from "@/lib/navigation";
import { FREE_CLAIM_FAQS } from "@/lib/faqs";
import { PAGE_SEO } from "@/lib/page-seo";
import { PAGE_CONTAINER } from "@/lib/layout";
import { EMAIL, OFFICE_ADDRESS, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: PAGE_SEO.caseReview.title,
  description: PAGE_SEO.caseReview.description,
  path: "/case-review",
});

export default function CaseReviewPage() {
  const pageUrl = absoluteUrl("/case-review");
  const crumbs = breadcrumbItems([{ name: "Free IDR Review", path: "/case-review" }]);

  return (
    <div className="bg-stone-100 min-h-dvh">
      <BreadcrumbListSchema items={crumbs} />
      <LocalBusinessSchema pageUrl={pageUrl} />
      <FAQPageSchema items={FREE_CLAIM_FAQS} />

      <section
        className="relative overflow-hidden pt-safe-top"
        style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
        aria-labelledby="case-review-heading"
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div className={`relative z-10 ${PAGE_CONTAINER} py-10 sm:py-14 lg:py-16`}>
          <Breadcrumbs items={crumbs} variant="dark" />
          <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4 mt-2">
            Free NSA IDR review
          </p>
          <h1
            id="case-review-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5 max-w-3xl"
          >
            Get a free NSA IDR review
          </h1>
          <p className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl">
            Submit the form and tell us about your No Surprises Act disputes. We show you what you
            keep per dollar recovered at IDR versus twenty cents on the dollar to a contingency
            attorney. Prefer to talk? Call us directly.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20" aria-labelledby="case-review-form-heading">
        <div className={`${PAGE_CONTAINER}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div id="form" className="scroll-mt-28">
                <h2
                  id="case-review-form-heading"
                  className="font-heading text-2xl text-gray-900 mb-2"
                >
                  Tell us about your practice
                </h2>
                <p className="font-body text-gray-500 text-xs mb-6">
                  Fields marked with <span className="text-kronos-cyan">*</span> are required.
                </p>
                <ClaimReviewForm variant="light" />
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-gray-200 bg-gray-50 p-6 sm:p-8 lg:sticky lg:top-28">
                <h2 className="font-heading text-xl text-gray-900 mb-4">Direct contact</h2>
                <p className="font-body text-gray-600 text-sm font-light mb-6">
                  Rather speak with someone now? Call or email and a Kronos specialist will follow up
                  within one business day.
                </p>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-body text-xs uppercase tracking-widest text-gray-500 mb-1">
                      Phone
                    </dt>
                    <dd>
                      <a
                        href={`tel:${PHONE_TEL}`}
                        className="font-body text-gray-900 hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan scroll-mt-28"
                      >
                        {PHONE_DISPLAY}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-widest text-gray-500 mb-1">
                      Email
                    </dt>
                    <dd>
                      <a
                        href={`mailto:${EMAIL}`}
                        className="font-body text-gray-900 hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                      >
                        {EMAIL}
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs uppercase tracking-widest text-gray-500 mb-1">
                      Office
                    </dt>
                    <dd className="font-body text-gray-700 font-light text-sm">
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
        </div>
      </section>

      <section className="bg-gray-50 py-12 sm:py-16" aria-labelledby="case-review-faq-heading">
        <div className={PAGE_CONTAINER}>
          <FAQSection
            heading="Questions about the free case review"
            headingId="case-review-faq-heading"
            items={FREE_CLAIM_FAQS}
            variant="light"
          />
        </div>
      </section>

      <ReferencesSection variant="light" />
      <RelatedServices links={mainNavLinks} currentPath="/case-review" variant="light" />
    </div>
  );
}
