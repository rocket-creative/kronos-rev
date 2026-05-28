import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CTA } from "@/lib/ctas";
import { SYDRA_DEMO_URL, SYDRA_URL } from "@/lib/site";

export default function SydraBridgeContent() {
  return (
    <section
      className="py-16 sm:py-24 lg:py-32"
      style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
      aria-labelledby="sydra-bridge-heading"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
          Kronos Health · Software
        </p>
        <h1
          id="sydra-bridge-heading"
          className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6"
        >
          Sydra is Kronos Health&apos;s NSA IDR software
        </h1>
        <p className="font-body text-sm sm:text-base text-white/90 font-light leading-relaxed mb-8">
          Run federal and state IDR in house with specialty trained AI — one claim per CPT, prep in
          under 5 minutes per claim. Choose Self-Serve or add Kronos Support for live specialists on
          tricky cases. Kronos Revenue on this site is the full service option when you want every
          claim handled for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10">
          <a
            href={SYDRA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:opacity-90 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
            aria-label={CTA.seeSydra.ariaLabel}
          >
            {CTA.seeSydra.label}
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
          <a
            href={SYDRA_DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 border border-white/40 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
            aria-label={CTA.scheduleSydraDemo.ariaLabel}
          >
            {CTA.scheduleSydraDemo.label}
            <ExternalLink className="w-3 h-3" aria-hidden="true" />
          </a>
        </div>
        <p className="font-body text-sm text-white/70 font-light">
          Prefer full service?{" "}
          <Link
            href={CTA.caseReview.href}
            className="text-white underline underline-offset-2 hover:text-kronos-cyan transition-colors"
          >
            Get a free NSA IDR review
          </Link>{" "}
          for Kronos Full-Service — every claim handled end to end.
        </p>
      </div>
    </section>
  );
}
