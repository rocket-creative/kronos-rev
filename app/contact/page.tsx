import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import {
  BreadcrumbListSchema,
  FAQPageSchema,
  LocalBusinessSchema,
} from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { RelatedServices } from "@/components/RelatedServices";
import { TrustSignal } from "@/components/TrustSignal";
import { createPageMetadata, absoluteUrl } from "@/lib/metadata";
import { breadcrumbItems, serviceLinks } from "@/lib/navigation";
import { CONTACT_FAQS } from "@/lib/faqs";
import { EMAIL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { ReviewHighlight } from "@/components/ReviewHighlight";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Kronos Revenue for a Free Review | Kronos",
  description:
    "Contact Kronos Revenue for a free review. Specialty trained NSA IDR for orthopedic, neurosurgery, spine, and plastic surgery practices. Call (914) 705 6830 today.",
  path: "/contact",
});

export default function ContactPage() {
  const pageUrl = absoluteUrl("/contact");
  const crumbs = breadcrumbItems([{ name: "Contact", path: "/contact" }]);

  return (
    <div className="bg-kronos-bg min-h-dvh">
      <BreadcrumbListSchema items={crumbs} />
      <LocalBusinessSchema pageUrl={pageUrl} />
      <FAQPageSchema items={CONTACT_FAQS} />

      <Breadcrumbs items={crumbs} />

      <section
        className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20"
        aria-labelledby="contact-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              Get in touch
            </p>
            <h1
              id="contact-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6"
            >
              Free revenue review
            </h1>
            <p className="font-body text-white/70 text-sm font-light leading-relaxed mb-8">
              <ReviewHighlight>
                Tell us about your practice and we will show you exactly where you are leaving money
                on the table at no cost and no commitment.
              </ReviewHighlight>
            </p>
            <TrustSignal
              author="Heisha Rivera"
              credentials="Director of Revenue Cycle"
              reviewedBy="Dr. John M. Abrahams, MD"
              lastUpdated="2026-03-01"
              className="mb-8"
            />
            <Link
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 bg-kronos-cyan text-kronos-bg py-3 px-6 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg mb-10"
              aria-label={`Call ${PHONE_DISPLAY} for a free revenue review`}
            >
              {PHONE_DISPLAY}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <div className="space-y-6">
              <div className="border-l-2 border-kronos-cyan/30 pl-4">
                <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-1">
                  Phone
                </p>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="font-body text-sm text-white hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan rounded"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              {/* Update to sales@sydrahealth.com — pending alias setup */}
              <div className="border-l-2 border-kronos-cyan/30 pl-4">
                <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-body text-sm text-white hover:text-kronos-cyan transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan rounded"
                >
                  {EMAIL}
                </a>
              </div>
              <div className="border-l-2 border-kronos-cyan/30 pl-4">
                <p className="font-body text-xs text-white/50 uppercase tracking-widest mb-1">
                  Office
                </p>
                <address className="not-italic font-body text-sm text-white/70 font-light">
                  244 Westchester Ave, Ste 209
                  <br />
                  West Harrison, NY 10604
                </address>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/10 border border-white/15 p-6 sm:p-8">
              <ContactForm source="contact_page" />
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        heading="How do I contact Kronos Revenue?"
        items={CONTACT_FAQS}
        variant="dark"
      />

      <RelatedServices links={serviceLinks} currentPath="/contact" />
    </div>
  );
}
