import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import type { FaqItem } from "@/lib/faqs";
import type { BreadcrumbItem } from "@/components/JsonLd";
import {
  BreadcrumbListSchema,
  FAQPageSchema,
  ServiceSchema,
} from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { RelatedServices } from "@/components/RelatedServices";
import { TrustSignal } from "@/components/TrustSignal";
import { PrimarySpecialties } from "@/components/PrimarySpecialties";
import type { NavLink } from "@/lib/navigation";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { PAGE_CONTAINER } from "@/lib/layout";

export type ServiceLandingProps = {
  breadcrumbs: BreadcrumbItem[];
  path: string;
  serviceId: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  eyebrow: string;
  h1: string;
  intro: ReactNode;
  trustItems: string[];
  footnote?: ReactNode;
  formTitle: string;
  form: ReactNode;
  faqs: FaqItem[];
  relatedLinks: NavLink[];
  showReferences?: boolean;
  medicallyReviewed?: boolean;
  showPrimarySpecialties?: boolean;
};

export function ServiceLandingPage({
  breadcrumbs,
  path,
  serviceId,
  serviceName,
  serviceDescription,
  serviceType,
  eyebrow,
  h1,
  intro,
  trustItems,
  footnote,
  formTitle,
  form,
  faqs,
  relatedLinks,
  showReferences = true,
  medicallyReviewed = true,
  showPrimarySpecialties = false,
}: ServiceLandingProps) {
  const pageUrl = `https://www.kronosrevenue.health${path}`;

  return (
    <div className="bg-kronos-bg min-h-dvh">
      <BreadcrumbListSchema items={breadcrumbs} />
      <ServiceSchema
        name={serviceName}
        description={serviceDescription}
        url={pageUrl}
        serviceType={serviceType}
        serviceId={serviceId}
      />
      <FAQPageSchema items={faqs} />

      <Breadcrumbs items={breadcrumbs} />

      {showPrimarySpecialties && <PrimarySpecialties variant="dark" />}

      <section
        className={`${PAGE_CONTAINER} py-10 sm:py-14 lg:py-20`}
        aria-labelledby="landing-heading"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              {eyebrow}
            </p>
            <h1
              id="landing-heading"
              className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6"
            >
              {h1}
            </h1>
            <div className="font-body text-white/80 text-sm font-light leading-relaxed mb-8">
              {intro}
            </div>
            <ul className="space-y-3 mb-8">
              {trustItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 w-4 h-4 shrink-0 border border-kronos-cyan/40 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <span className="w-1.5 h-1.5 bg-kronos-cyan" />
                  </span>
                  <span className="font-body text-sm text-white/80 font-light">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {medicallyReviewed && (
              <TrustSignal
                author="Heisha Rivera"
                credentials="Director of Revenue Cycle"
                reviewedBy="Dr. John M. Abrahams, MD"
                lastUpdated="2026-03-01"
                className="mb-6"
              />
            )}
            <Link
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-3 bg-kronos-cyan text-kronos-bg py-3 px-6 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg mb-6"
              aria-label={`Call ${PHONE_DISPLAY} for a free NSA IDR review`}
            >
              {PHONE_DISPLAY}
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            {footnote && (
              <p className="font-body text-xs text-white/55 font-light">{footnote}</p>
            )}
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white/10 border border-white/15 p-6 sm:p-8">
              <h2 className="font-heading text-2xl text-white mb-6">{formTitle}</h2>
              {form}
            </div>
          </div>
        </div>
      </section>

      <FAQSection
        heading="What should I know before getting started?"
        items={faqs}
        variant="dark"
      />

      {showReferences && <ReferencesSection variant="dark" />}

      <RelatedServices links={relatedLinks} currentPath={path} />
    </div>
  );
}
