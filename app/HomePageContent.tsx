"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FAQSection } from "@/components/FAQSection";
import { ReferencesSection } from "@/components/ReferencesSection";
import { HOME_FAQS } from "@/lib/faqs";
import { ClaimReviewForm } from "@/components/ClaimReviewForm";
import { LogoImage } from "@/components/LogoImage";
import { LawyerComparisonTable } from "@/components/LawyerComparisonTable";
import { RevenueCalculator } from "@/components/RevenueCalculator";
import { HomeDiagnostic } from "@/components/HomeDiagnostic";
import { useHeroAnimation } from "@/components/animations";
import { MedicallyReviewedBlock } from "@/components/MedicallyReviewedBlock";
import { CTA } from "@/lib/ctas";
import { PHONE_DISPLAY, PHONE_TEL, SYDRA_URL } from "@/lib/site";
import {
  HERO_H1,
  HERO_SUBHEAD,
  HERO_CTA_SUBLABEL,
  HERO_TRUST_BADGES,
} from "@/lib/hero-copy";
import { HOME_STAT_BAR } from "@/lib/home-stats";

export default function HomePageContent() {
  const heroRef = useHeroAnimation();

  return (
    <>
      <section
        ref={heroRef}
        className="relative min-h-dvh overflow-hidden pt-safe-top bg-kronos-bg"
        aria-labelledby="hero-heading"
      >
        <div data-hero-image className="absolute inset-0" aria-hidden="true">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_center] lg:object-right"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative z-10 min-h-dvh flex items-center">
          <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-0">
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

              <div
                data-hero-description
                className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-6 sm:mb-8 space-y-3"
              >
                {HERO_SUBHEAD.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>

              <div data-hero-cta className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-2">
                <Link
                  href={CTA.heroCaseReview.href}
                  className="inline-flex items-center justify-center gap-3 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:opacity-90 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
                  aria-label={CTA.heroCaseReview.ariaLabel}
                >
                  {CTA.heroCaseReview.label}
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <Link
                  href={CTA.howWeWork.href}
                  className="inline-flex items-center justify-center gap-3 border border-white/40 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
                  aria-label={CTA.howWeWork.ariaLabel}
                >
                  {CTA.howWeWork.label}
                </Link>
              </div>
              <p className="text-xs text-white/60 font-body mb-4">{HERO_CTA_SUBLABEL}</p>
              <ul className="space-y-1 text-xs text-white/50 font-body">
                {HERO_TRUST_BADGES.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 bg-white border-b border-gray-100" aria-label="Early resources">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="font-body text-sm text-gray-600 font-light">
            New to federal IDR? Start with the filing checklist before you initiate a dispute.
          </p>
          <Link
            href={CTA.idrChecklist.href}
            className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all shrink-0"
          >
            {CTA.idrChecklist.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-white" aria-labelledby="founder-heading">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div>
            <h2 id="founder-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
              Built by a surgeon who watched his own practice lose money to this.
            </h2>
            <div className="font-body text-sm text-gray-600 font-light leading-relaxed space-y-4">
              <p>
                I am a practicing neurosurgeon. I built Kronos Revenue because I watched surgical
                practices, including mine, lose significant revenue to two specific problems.
              </p>
              <p>
                The first: most out of network claims that should go to federal IDR never get filed.
                Each submission takes 30 minutes. Billing teams do not have that time at scale. So
                the insurer underpayment becomes the accepted rate. The money disappears quietly.
              </p>
              <p>
                The second: practices that do file are paying attorneys 20% of every recovery. In
                exchange, most attorneys batch CPT codes, a shortcut that reduces arbitration outcomes
                and that a 2023 federal court ruling confirmed was contrary to how IDR was designed.
              </p>
              <p>
                The federal data is not ambiguous. Providers win 88% of properly filed IDR disputes.
                Median awards come in at approximately 4.5 times the insurer qualifying payment
                amount. Georgetown CHIR, March 2026. The money is there. The system works when it is
                used correctly.
              </p>
              <p className="font-medium text-gray-800">Kronos Revenue uses it correctly.</p>
            </div>
            <p className="mt-6 font-body text-sm text-gray-800">
              —{" "}
              <Link
                href="/team#person-john-abrahams"
                className="text-kronos-green-dark underline hover:opacity-80"
              >
                Dr. John M. Abrahams, MD
              </Link>
              , Board Certified Neurosurgeon, Founder, Kronos Health
            </p>
          </div>
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 bg-gray-100">
            <Image
              src="/hero.jpg"
              alt="Dr. John M. Abrahams, MD, board certified neurosurgeon and founder of Kronos Health"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 400px"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50" aria-labelledby="math-heading">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 mb-10">
          <h2 id="math-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4">
            What 20% of every award actually costs over time.
          </h2>
          <p className="font-body text-sm text-gray-600 font-light leading-relaxed max-w-3xl">
            A spine surgery practice recovering $300,000 per year in NSA IDR disputes pays $60,000
            annually to a 20% contingency attorney. Over five years: $300,000 in attorney fees.
            Before counting the disputes the attorney lost from batching CPT codes. Kronos Revenue
            charges a consultative fee quoted to your volume. Not a percentage of every recovery.
            Most practices keep roughly nine in ten dollars won at IDR after our fee. Run your own
            numbers below.
          </p>
        </div>
        <RevenueCalculator />
      </section>

      <section className="py-12 sm:py-16 bg-white border-y border-gray-100" aria-labelledby="stats-heading">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="stats-heading" className="sr-only">
            Federal IDR statistics
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {HOME_STAT_BAR.map((stat) => (
              <li key={stat.value}>
                <p className="font-heading text-3xl sm:text-4xl text-kronos-cyan mb-2">{stat.value}</p>
                <p className="font-body text-sm text-gray-900 mb-2">{stat.label}</p>
                <p className="font-body text-xs text-gray-500 font-light mb-2">{stat.source}</p>
                <a
                  href={stat.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-xs text-kronos-green-dark underline hover:opacity-80"
                >
                  View source
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="batching-heading">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="batching-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
            Why attorneys lose IDR cases.
          </h2>
          <div className="font-body text-sm text-gray-600 font-light leading-relaxed space-y-4">
            <p>
              The most common reason surgical IDR disputes fail is not weak documentation. It is
              incorrect filing structure.
            </p>
            <p>Federal IDR rules require each CPT code to be filed as a separate dispute.</p>
            <p>
              When an attorney batches CPT 27447 (total knee arthroplasty) with 27369 (injection,
              knee) into one IDR submission, the arbitrator reviews two procedures with different
              market rate benchmarks and different qualifying payment amounts. The submission does not
              map cleanly to any prior determination. Arbitrators resolve that ambiguity against the
              initiating party.
            </p>
            <p>
              A 2023 federal court ruling, Texas Medical Association v. HHS, Eastern District of
              Texas, specifically found that improper batching was forcing providers out of IDR
              recovery they were legally entitled to pursue.
            </p>
            <p className="font-medium text-gray-900">Kronos Revenue files one claim per CPT. Every time.</p>
          </div>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100"
        aria-labelledby="diagnostic-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <HomeDiagnostic />
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50" aria-labelledby="sydra-bridge-heading">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="font-body text-xs uppercase tracking-widest text-gray-400 mb-3">
            Part of Kronos Health
          </p>
          <h2 id="sydra-bridge-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4">
            Sydra is the software. Kronos Revenue is the full service team.
          </h2>
          <p className="font-body text-sm text-gray-600 font-light leading-relaxed mb-8">
            Kronos Health builds two products from the same specialty trained foundation. Sydra is
            the software your billing team operates in house. Kronos Revenue is the team that handles
            every claim when you want zero biller time on IDR. Same CPT depth, different operator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SYDRA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 py-3 px-6 uppercase tracking-widest text-xs font-bold text-gray-900 hover:border-kronos-cyan transition-colors"
            >
              See Sydra software
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <Link
              href={CTA.caseReview.href}
              className="inline-flex items-center justify-center gap-2 bg-kronos-cyan text-white py-3 px-6 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-colors"
            >
              Get a free IDR review
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="py-12 sm:py-16 lg:py-20 bg-white border-y border-gray-100"
        aria-labelledby="comparison-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <LawyerComparisonTable />
          <div className="mt-8 flex justify-center">
            <Link
              href={CTA.compareAttorney.href}
              className="inline-flex items-center gap-3 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all"
            >
              {CTA.compareAttorney.label}
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-24 bg-gray-50" aria-labelledby="review-offer-heading">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="review-offer-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
            What you actually get on a free IDR review.
          </h2>
          <p className="font-body text-sm text-gray-600 font-light mb-4">
            This is not a sales call. Here is what happens.
          </p>
          <ul className="font-body text-sm text-gray-600 font-light leading-relaxed space-y-2 mb-8 list-disc list-inside">
            <li>You send us 3 to 5 recent EOBs for out of network claims.</li>
            <li>We review CPT codes, disputed amounts, and filing eligibility.</li>
            <li>We calculate estimated recovery if those claims had been filed at IDR.</li>
            <li>
              We show what you recovered, what you left on the table, and the difference under Kronos
              versus your current arrangement.
            </li>
            <li>
              The review takes one business day. If the math does not favor switching, we tell you
              that. No contract on the first call.
            </li>
          </ul>
          <div className="bg-white border border-gray-200 p-6 sm:p-8">
            <h3 className="font-heading text-xl sm:text-2xl text-gray-900 mb-2">
              Request your review
            </h3>
            <p className="font-body text-gray-500 text-xs mb-6">
              Fields marked with <span className="text-kronos-cyan">*</span> are required.
            </p>
            <ClaimReviewForm variant="light" />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-white" aria-labelledby="proof-heading">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="proof-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
            The data, sourced.
          </h2>
          <div className="space-y-8 font-body text-sm text-gray-600 font-light leading-relaxed">
            <blockquote className="border-l-4 border-kronos-cyan pl-6">
              <p className="mb-2">
                Providers won 88% of federal IDR disputes in the first half of 2025. 87% of award
                amounts exceeded the insurer qualifying payment amount.
              </p>
              <footer className="text-xs text-gray-500">
                CMS Federal IDR Q1/Q2 2025 Public Use File · January 21, 2026 ·{" "}
                <a
                  href="https://www.cms.gov/nosurprises/policies-and-resources/reports"
                  className="text-kronos-green-dark underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  cms.gov
                </a>
              </footer>
            </blockquote>
            <blockquote className="border-l-4 border-kronos-cyan pl-6">
              <p className="mb-2">
                In 2.5 years through 2024, providers recovered more than $2.2 billion from the NSA IDR
                process relative to applicable in network payment rates.
              </p>
              <footer className="text-xs text-gray-500">
                HFMA citing Brookings Institution NSA Arbitration Databook · October 2025
              </footer>
            </blockquote>
            <blockquote className="border-l-4 border-kronos-cyan pl-6">
              <p className="mb-2">
                The median provider win at IDR represents approximately 4.5 times the in network rate.
              </p>
              <footer className="text-xs text-gray-500">
                Georgetown University CHIR · Health Affairs · March 2026
              </footer>
            </blockquote>
            <p className="text-xs text-gray-500">
              Sydra reference library: 213+ ingested IDR determinations, over 90% provider wins,
              weighted toward spine and orthopedic CPT codes. Library statistics describe
              determinations ingested, not a guarantee of future results.
            </p>
          </div>
        </div>
      </section>

      <FAQSection
        id="faq"
        heading="Questions about NSA IDR"
        headingId="faq-heading"
        items={HOME_FAQS}
        variant="light"
      />

      <section className="py-10 sm:py-12 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
          <MedicallyReviewedBlock variant="light" />
        </div>
      </section>

      <ReferencesSection variant="light" />

      <section
        id="contact"
        className="py-12 sm:py-16 lg:py-24 bg-kronos-gray-800"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h2 id="cta-heading" className="font-heading text-2xl sm:text-3xl text-white mb-4">
            {CTA.caseReview.label}
          </h2>
          <p className="font-body text-sm text-white/60 font-light mb-8 max-w-xl mx-auto">
            {HERO_CTA_SUBLABEL}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={CTA.caseReview.href}
              className="inline-flex items-center justify-center gap-3 bg-white text-kronos-gray-900 py-3 px-8 uppercase tracking-widest text-xs font-bold min-h-[48px] hover:bg-white/95 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Request your free IDR review
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center justify-center border border-white/40 text-white/90 py-3 px-8 uppercase tracking-widest text-xs font-light min-h-[48px] hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
