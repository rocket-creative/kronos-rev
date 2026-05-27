"use client";

import Link from "next/link";
import {
  FileText,
  Send,
  Scale,
  CheckCircle,
  DollarSign,
  Percent,
  Stethoscope,
  HandHelping,
  ArrowRight,
} from "lucide-react";
import { HeroBackground } from "@/components/HeroBackground";
import { FAQSection } from "@/components/FAQSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { HOME_FAQS } from "@/lib/faqs";
import { ClaimReviewForm } from "@/components/ClaimReviewForm";
import { LogoImage } from "@/components/LogoImage";
import { PrimarySpecialties } from "@/components/PrimarySpecialties";
import { LawyerComparisonTable } from "@/components/LawyerComparisonTable";
import { useHeroAnimation, useStaggeredCards } from "@/components/animations";
import { ThreeWaysToHandleNsa } from "@/components/ThreeWaysToHandleNsa";
import { MedicallyReviewedBlock } from "@/components/MedicallyReviewedBlock";
import { TrustSignalStrip } from "@/components/TrustSignalStrip";
import { CTA } from "@/lib/ctas";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { mainNavLinks } from "@/lib/navigation";
import { HERO_BODY, HERO_H1, HERO_TRUST_LINE } from "@/lib/hero-copy";
import { VASTLY_MORE_LINE } from "@/lib/pricing-copy";

const valueProps = [
  {
    title: "Keep the greater share of every award",
    description:
      "Attorneys take 20% of every NSA IDR recovery — you keep about eighty cents on the dollar. We quote a consultative fee to your volume, not a contingency cut. Most practices keep roughly nine in ten dollars won.",
    icon: Percent,
  },
  {
    title: "NSA IDR, specialty coded",
    description:
      "Orthopedic, neurosurgery, spine, plastic surgery. Every federal IDR submission is coded by a specialist who knows your CPT set — not a generalist attorney treating IDR as a side practice.",
    icon: Stethoscope,
  },
  {
    title: "Done for you IDR",
    description:
      "You hand us the EOBs. We handle every step of the NSA IDR process — negotiation through final award. Sydra saves biller hours; Kronos Full-Service saves headcount entirely.",
    icon: HandHelping,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Submit Negotiation",
    description:
      "We handle the initial negotiation with the insurer and track the timeline for compliance.",
    icon: FileText,
  },
  {
    number: "02",
    title: "Initiate IDR",
    description:
      "If no agreement is reached, we submit the case to the federal IDR portal on your behalf.",
    icon: Send,
  },
  {
    number: "03",
    title: "Build the Case",
    description:
      "Our team prepares and submits a robust payment offer with full supporting documentation.",
    icon: Scale,
  },
  {
    number: "04",
    title: "Arbitration",
    description:
      "A neutral third party reviews both offers and makes a binding determination.",
    icon: CheckCircle,
  },
];

export default function HomePageContent() {
  const heroRef = useHeroAnimation();
  const valueRef = useStaggeredCards();
  const processRef = useStaggeredCards();

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-dvh overflow-hidden pt-safe-top"
        style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
        aria-labelledby="hero-heading"
      >
        <HeroBackground color="0, 92, 42" />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 min-h-dvh flex items-center">
          <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-0">
            <div className="bg-white/5 border border-white/20 p-8 sm:p-10 lg:p-14 max-w-2xl">
              <div data-hero-eyebrow className="mb-6 sm:mb-8">
                <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
                  No Surprises Act · Federal IDR
                </p>
                <span className="sr-only">Kronos Revenue</span>
                <span aria-hidden="true" className="block">
                  <LogoImage
                    width={200}
                    textSize="text-2xl"
                    priority
                    className="max-w-full brightness-0 invert"
                  />
                </span>
              </div>

              <h1
                data-hero-title
                id="hero-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-5 sm:mb-7"
              >
                {HERO_H1}
              </h1>

              <p
                data-hero-description
                className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6 sm:mb-8"
              >
                {HERO_BODY}
              </p>

              <div data-hero-cta className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-4">
                <Link
                  href={CTA.caseReview.href}
                  className="inline-flex items-center justify-center gap-3 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:opacity-90 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
                  aria-label={CTA.caseReview.ariaLabel}
                >
                  {CTA.caseReview.label}
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <Link
                  href={CTA.consultation.href}
                  className="inline-flex items-center justify-center gap-3 border border-white/40 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
                  aria-label={CTA.consultation.ariaLabel}
                >
                  {CTA.consultation.label}
                </Link>
              </div>

              <p className="text-xs text-white/50 font-body">{HERO_TRUST_LINE}</p>
            </div>
          </div>
        </div>
      </section>

      <PrimarySpecialties variant="light" linked />

      {/* Three-up value props */}
      <section
        ref={valueRef}
        className="py-12 sm:py-16 lg:py-24 bg-white"
        aria-labelledby="value-props-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="value-props-heading" className="sr-only">
            Why Kronos Revenue
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {valueProps.map((prop) => {
              const Icon = prop.icon;
              return (
                <article data-stagger-card key={prop.title} className="border border-gray-100 p-6 sm:p-8">
                  <div className="w-10 h-10 bg-kronos-cyan/10 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="font-heading text-lg text-gray-900 mb-3">{prop.title}</h3>
                  <p className="font-body text-sm text-gray-500 font-light leading-relaxed">
                    {prop.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 20% comparison strip */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-gray-50 border-y border-gray-100"
        aria-labelledby="comparison-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2
            id="comparison-heading"
            className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8 sm:mb-10"
          >
            Your attorney vs Kronos Revenue on NSA IDR
          </h2>
          <LawyerComparisonTable />
        </div>
      </section>

      {/* Featured case proof */}
      <section
        className="py-12 sm:py-16 lg:py-24 bg-white"
        aria-labelledby="proof-point-heading"
      >
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <p
            id="proof-point-heading"
            className="text-xs tracking-widest uppercase text-gray-400 mb-4 sm:mb-6"
          >
            NSA IDR Client Results
          </p>
          <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl text-gray-900 leading-tight mb-8">
            A hand surgeon was paying his attorney 20% of every $5,000 NSA IDR recovery — keeping
            eighty cents on the dollar. We quoted the same disputes so he kept ninety cents or
            more — and won more of them. {VASTLY_MORE_LINE}
          </blockquote>
          <Link
            href={CTA.seeResults.href}
            className="inline-flex items-center gap-3 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
            aria-label={CTA.seeResults.ariaLabel}
          >
            {CTA.seeResults.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* Process preview */}
      <section
        ref={processRef}
        className="py-12 sm:py-16 lg:py-24 bg-gray-50"
        aria-labelledby="process-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <header className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">NSA IDR Process</p>
              <h2
                id="process-heading"
                className="font-heading text-2xl sm:text-3xl lg:text-4xl text-gray-900"
              >
                How does federal NSA IDR work?
              </h2>
            </div>
            <Link
              href="/how-we-work"
              className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all shrink-0"
            >
              See how we work
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <article data-stagger-card key={step.number}>
                  <span
                    className="text-[50px] sm:text-[60px] font-heading text-gray-900/[0.05] leading-none block mb-3"
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="flex items-start gap-3 -mt-6 relative z-10">
                    <div className="w-9 h-9 bg-kronos-cyan/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-kronos-cyan" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-heading text-sm sm:text-base text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-xs text-gray-500 font-light leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick links to key pages */}
      <section className="py-12 sm:py-16 bg-white border-t border-gray-100" aria-labelledby="explore-heading">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="explore-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
            Explore NSA IDR services
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {mainNavLinks.slice(0, 4).map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block min-h-[44px] p-4 border border-gray-200 hover:border-kronos-cyan hover:bg-gray-50 font-body text-xs uppercase tracking-widest text-gray-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        id="faq"
        heading="What do providers ask about NSA IDR?"
        headingId="faq-heading"
        items={HOME_FAQS}
        variant="light"
      />

      <section className="py-10 sm:py-12 bg-white border-t border-gray-100" aria-labelledby="home-medical-review">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="home-medical-review" className="sr-only">
            Medical review
          </h2>
          <MedicallyReviewedBlock variant="light" />
        </div>
      </section>

      <ReferencesSection variant="light" />

      {/* Case review CTA */}
      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-24"
        style={{ background: "linear-gradient(135deg, #00542A 0%, #00843D 100%)" }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
            <div>
              <h2
                id="cta-heading"
                className="font-heading text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white mb-4"
              >
                Get a free NSA IDR review
              </h2>
              <p className="font-body text-xs sm:text-sm lg:text-base text-white/80 font-light mb-6 sm:mb-8">
                Tell us about your NSA disputes and we will show you exactly how much IDR recovery
                you are leaving on the table — at no cost and no commitment.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href={CTA.caseReview.href}
                  className="inline-flex items-center justify-center gap-3 bg-white text-[#00542A] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:bg-white/95 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] scroll-mt-28"
                >
                  {CTA.caseReview.label}
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <Link
                  href={CTA.consultation.href}
                  className="inline-flex items-center justify-center gap-3 border border-white/50 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] scroll-mt-28"
                >
                  {CTA.consultation.label}
                </Link>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/40 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] scroll-mt-28"
                  aria-label={`Call ${PHONE_DISPLAY}`}
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
              <TrustSignalStrip variant="cta" />
            </div>
            <div className="bg-white/10 border border-white/15 p-4 sm:p-6">
              <ClaimReviewForm />
            </div>
          </div>
        </div>
      </section>

      {/* Three ways to handle NSA */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100"
        aria-labelledby="three-ways-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <ThreeWaysToHandleNsa />
        </div>
      </section>
    </>
  );
}
