import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { NSA_TIERS } from "@/lib/nsa-tiers";

type ThreeWaysToHandleNsaProps = {
  variant?: "light" | "neutral";
  showIntro?: boolean;
};

export function ThreeWaysToHandleNsa({
  variant = "light",
  showIntro = true,
}: ThreeWaysToHandleNsaProps) {
  const bg = variant === "neutral" ? "bg-gray-50" : "bg-white";

  return (
    <div className={bg}>
      {showIntro && (
        <header className="mb-8 sm:mb-10 max-w-3xl">
          <p className="font-body text-xs uppercase tracking-widest text-gray-400 mb-3">
            Choose your path
          </p>
          <h2 id="three-ways-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4">
            Three ways to handle NSA
          </h2>
          <p className="font-body text-gray-600 font-light leading-relaxed">
            Same specialty depth across every tier. Fit depends on who operates the workflow — not
            claim volume alone.
          </p>
        </header>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {NSA_TIERS.map((tier) => (
          <article
            key={tier.id}
            className={`relative flex flex-col border p-6 sm:p-8 ${
              tier.current
                ? "border-kronos-green-dark bg-[#001A0A]/[0.02]"
                : "border-gray-200 bg-white"
            }`}
          >
            {tier.recommended && (
              <p className="absolute top-0 right-0 bg-kronos-green-dark text-white text-[10px] uppercase tracking-widest px-3 py-1">
                You are here
              </p>
            )}
            <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
              {tier.tagline}
            </p>
            <h3 className="font-heading text-lg text-gray-900 mb-3">{tier.name}</h3>
            <p className="font-body text-sm text-gray-600 font-light leading-relaxed mb-4 flex-1">
              {tier.description}
            </p>
            <p className="font-body text-xs text-gray-500 font-light mb-6">{tier.fit}</p>
            {tier.external ? (
              <a
                href={tier.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                aria-label={tier.ctaAriaLabel}
              >
                {tier.ctaLabel}
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href={tier.href}
                className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
                aria-label={tier.ctaAriaLabel}
              >
                {tier.ctaLabel}
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
