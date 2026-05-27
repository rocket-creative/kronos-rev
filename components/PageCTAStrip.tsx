import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/lib/ctas";

type PageCTAStripProps = {
  heading?: string;
  primaryOnly?: boolean;
  variant?: "green" | "dark";
};

export function PageCTAStrip({
  heading = "Ready to keep the greater share of every NSA IDR award?",
  primaryOnly = false,
  variant = "green",
}: PageCTAStripProps) {
  const bg =
    variant === "green"
      ? "linear-gradient(135deg, #00542A 0%, #00843D 100%)"
      : "#001A0A";

  return (
    <section
      className="py-12 sm:py-16"
      style={{ background: bg }}
      aria-labelledby="page-cta-heading"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <h2
          id="page-cta-heading"
          className="font-heading text-xl sm:text-2xl lg:text-3xl text-white mb-6 sm:mb-8"
        >
          {heading}
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href={CTA.caseReview.href}
            className="inline-flex items-center justify-center gap-3 bg-white text-[#00542A] py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:bg-white/95 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] w-full sm:w-auto"
            aria-label={CTA.caseReview.ariaLabel}
          >
            {CTA.caseReview.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
          {!primaryOnly && (
            <Link
              href={CTA.consultation.href}
              className="inline-flex items-center justify-center gap-3 border border-white/50 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] w-full sm:w-auto"
              aria-label={CTA.consultation.ariaLabel}
            >
              {CTA.consultation.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
