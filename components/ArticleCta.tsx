import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ArticleCtaBlock } from "@/lib/article-ctas";
import { TrustSignalStrip } from "@/components/TrustSignalStrip";
import { PAGE_CONTAINER } from "@/lib/layout";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

type ArticleCtaProps = {
  block: ArticleCtaBlock;
};

function CtaButtons({
  block,
  primaryVariant = "cyan",
  onDark = false,
}: {
  block: ArticleCtaBlock;
  primaryVariant?: "cyan" | "white";
  onDark?: boolean;
}) {
  const primaryClasses =
    primaryVariant === "white"
      ? "bg-white text-kronos-gray-900 hover:bg-white/95"
      : "bg-kronos-cyan text-kronos-bg hover:opacity-90";

  const secondaryClasses = onDark
    ? "border border-white/40 text-white/90 hover:bg-white/10"
    : "border border-gray-300 text-gray-900 bg-white/60 hover:bg-white/90";

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <Link
        href={block.primary.href}
        className={`inline-flex items-center justify-center gap-3 py-3 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan min-h-[48px] hover:gap-5 ${primaryClasses}`}
        aria-label={block.primary.ariaLabel ?? block.primary.label}
      >
        {block.primary.label}
        <ArrowRight className="w-3 h-3" aria-hidden="true" />
      </Link>
      {block.secondary && (
        <Link
          href={block.secondary.href}
          className={`inline-flex items-center justify-center gap-3 py-3 px-6 sm:px-8 uppercase tracking-widest text-xs font-normal transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan min-h-[48px] hover:gap-4 ${secondaryClasses}`}
          aria-label={block.secondary.ariaLabel ?? block.secondary.label}
        >
          {block.secondary.label}
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export function ArticleHeroCta({ block }: ArticleCtaProps) {
  return (
    <aside
      className="mt-8 sm:mt-10 p-6 sm:p-8 border border-white/20 bg-white/10 backdrop-blur-sm max-w-xl"
      aria-label="Article call to action"
    >
      {block.eyebrow && (
        <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-3">
          {block.eyebrow}
        </p>
      )}
      <p className="font-heading text-lg sm:text-xl text-white leading-snug mb-3">{block.headline}</p>
      <p className="font-body text-sm text-white/85 font-light leading-relaxed mb-5">
        {block.support}
      </p>
      <Link
        href={block.primary.href}
        className="inline-flex items-center gap-3 bg-kronos-cyan text-kronos-bg py-3 px-6 uppercase tracking-widest text-xs font-bold hover:opacity-90 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
        aria-label={block.primary.ariaLabel ?? block.primary.label}
      >
        {block.primary.label}
        <ArrowRight className="w-3 h-3" aria-hidden="true" />
      </Link>
    </aside>
  );
}

export function ArticleMidCta({ block }: ArticleCtaProps) {
  return (
    <aside
      className="my-12 sm:my-14 p-8 sm:p-10 bg-[#001A0A] text-white"
      aria-label="Mid article call to action"
    >
      {block.eyebrow && (
        <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-3">
          {block.eyebrow}
        </p>
      )}
      <h2 className="font-heading text-xl sm:text-2xl leading-snug mb-3">{block.headline}</h2>
      <p className="font-body text-sm text-white/85 font-light leading-relaxed mb-6 max-w-2xl">
        {block.support}
      </p>
      <CtaButtons block={block} primaryVariant="cyan" onDark />
    </aside>
  );
}

export function ArticleCloseCta({ block }: ArticleCtaProps) {
  return (
    <section
      className="py-12 sm:py-16 bg-kronos-gray-800"
      aria-labelledby="article-close-cta-heading"
    >
      <div className={`${PAGE_CONTAINER} max-w-3xl text-center`}>
        {block.eyebrow && (
          <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-3">
            {block.eyebrow}
          </p>
        )}
        <h2
          id="article-close-cta-heading"
          className="font-heading text-xl sm:text-2xl text-white mb-4 leading-snug"
        >
          {block.headline}
        </h2>
        <p className="font-body text-sm text-white/85 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
          {block.support}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <Link
            href={block.primary.href}
            className="inline-flex items-center gap-3 bg-white text-kronos-gray-900 py-3 px-8 uppercase tracking-widest text-xs font-bold hover:bg-white/95 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
            aria-label={block.primary.ariaLabel ?? block.primary.label}
          >
            {block.primary.label}
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </Link>
          {block.secondary ? (
            <Link
              href={block.secondary.href}
              className="inline-flex items-center gap-3 border border-white/40 text-white/90 py-3 px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px] hover:gap-4"
              aria-label={block.secondary.ariaLabel ?? block.secondary.label}
            >
              {block.secondary.label}
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          ) : (
            <a
              href={`tel:${PHONE_TEL}`}
              className="inline-flex items-center gap-2 border border-white/40 text-white/90 py-3 px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              {PHONE_DISPLAY}
            </a>
          )}
        </div>
        <TrustSignalStrip variant="cta" />
      </div>
    </section>
  );
}
