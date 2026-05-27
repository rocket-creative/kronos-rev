import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/components/JsonLd";
import { BreadcrumbListSchema } from "@/components/JsonLd";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTA } from "@/lib/ctas";
import { PAGE_CONTAINER } from "@/lib/layout";

export type MarketingPageProps = {
  breadcrumbs: BreadcrumbItem[];
  eyebrow?: string;
  h1: string;
  intro: ReactNode;
  primaryCta?: "case-review" | "consultation";
  children: ReactNode;
  bottomCta?: boolean;
  bottomCtaHeading?: string;
};

export function MarketingPage({
  breadcrumbs,
  eyebrow,
  h1,
  intro,
  primaryCta = "case-review",
  children,
  bottomCta = true,
  bottomCtaHeading,
}: MarketingPageProps) {
  const primary = primaryCta === "consultation" ? CTA.consultation : CTA.caseReview;
  const secondary = primaryCta === "consultation" ? CTA.caseReview : CTA.consultation;

  return (
    <div className="bg-stone-100 min-h-dvh">
      <BreadcrumbListSchema items={breadcrumbs} />
      <Breadcrumbs items={breadcrumbs} />

      <section
        className="relative overflow-hidden pt-safe-top"
        style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
        aria-labelledby="marketing-hero-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
        <div className={`relative z-10 ${PAGE_CONTAINER} py-14 sm:py-20 lg:py-24`}>
          {eyebrow && (
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              {eyebrow}
            </p>
          )}
          <h1
            id="marketing-hero-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight mb-5 sm:mb-7 max-w-4xl"
          >
            {h1}
          </h1>
          <div className="font-body text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8 max-w-2xl">
            {intro}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link
              href={primary.href}
              className="inline-flex items-center justify-center gap-3 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:opacity-90 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
              aria-label={primary.ariaLabel}
            >
              {primary.label}
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
            <Link
              href={secondary.href}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
              aria-label={secondary.ariaLabel}
            >
              {secondary.label}
            </Link>
          </div>
        </div>
      </section>

      {children}

      {bottomCta && (
        <section
          className="py-12 sm:py-16"
          style={{ background: "linear-gradient(135deg, #00542A 0%, #00843D 100%)" }}
          aria-labelledby="marketing-bottom-cta"
        >
          <div className={`${PAGE_CONTAINER} text-center`}>
            <h2
              id="marketing-bottom-cta"
              className="font-heading text-xl sm:text-2xl text-white mb-6"
            >
              {bottomCtaHeading ?? primary.label + "?"}
            </h2>
            <Link
              href={primary.href}
              className="inline-flex items-center gap-3 bg-white text-[#00542A] py-3 px-8 uppercase tracking-widest text-xs font-bold hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {primary.label}
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
}

export function MarketingSection({
  children,
  variant = "white",
  id,
  className = "",
}: {
  children: ReactNode;
  variant?: "white" | "neutral" | "dark";
  id?: string;
  className?: string;
}) {
  const bg =
    variant === "white"
      ? "bg-white"
      : variant === "neutral"
        ? "bg-gray-50"
        : "bg-[#001A0A] text-white";

  return (
    <section id={id} className={`py-12 sm:py-16 lg:py-20 ${bg} ${className}`}>
      <div className={PAGE_CONTAINER}>{children}</div>
    </section>
  );
}

export function SydraCrossLink({ variant = "light" }: { variant?: "light" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <div
      className={`p-6 sm:p-8 border ${
        isDark ? "border-white/15 bg-white/5" : "border-gray-200 bg-gray-50"
      }`}
    >
      <p
        className={`font-body text-sm font-light leading-relaxed mb-4 ${
          isDark ? "text-white/70" : "text-gray-600"
        }`}
      >
        Lower volume practice? Want to run claims yourself? SYDRA is our software product — same
        specialty depth, you operate it.
      </p>
      <a
        href={CTA.seeSydra.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan ${
          isDark ? "text-kronos-cyan" : "text-kronos-green-dark"
        }`}
      >
        {CTA.seeSydra.label}
        <ExternalLink className="w-3 h-3" aria-hidden="true" />
      </a>
    </div>
  );
}
