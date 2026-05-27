import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CTA } from "@/lib/ctas";
import { SYDRA_URL } from "@/lib/site";

const COLUMNS = [
  {
    title: "We are not filing IDR at all.",
    body: "You are accepting the insurer initial payment on every out of network claim. For a practice with 15 out of network surgical claims per month, the unfiled gap is likely six figures annually. Kronos Full-Service handles every claim. Zero biller time on IDR.",
    cta: { label: "Get a free IDR review — we show you the number.", href: CTA.caseReview.href, external: false },
  },
  {
    title: "We file through an attorney.",
    body: "20% of every award goes to the attorney indefinitely. Plus the cases lost from batching. Kronos Full-Service replaces the contingency model at a lower effective cost per dollar won.",
    cta: {
      label: "Get a free IDR review — we compare the math against your current arrangement.",
      href: CTA.caseReview.href,
      external: false,
    },
  },
  {
    title: "We want to run IDR in house.",
    body: "Your billing team wants to control the workflow and keep all recoveries in house. Sydra is the software platform. Under 5 minutes per claim instead of 30.",
    cta: { label: "See Sydra", href: SYDRA_URL, external: true },
  },
] as const;

export function HomeDiagnostic() {
  return (
    <div>
      <header className="mb-8 sm:mb-10 max-w-3xl">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-4">
          Which of these describes your practice right now?
        </h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {COLUMNS.map((col) => (
          <article key={col.title} className="flex flex-col border border-gray-200 p-6 sm:p-8 bg-white">
            <h3 className="font-heading text-lg text-gray-900 mb-4">{col.title}</h3>
            <p className="font-body text-sm text-gray-600 font-light leading-relaxed mb-6 flex-1">
              {col.body}
            </p>
            {col.cta.external ? (
              <a
                href={col.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all"
              >
                {col.cta.label}
                <ExternalLink className="w-3 h-3" aria-hidden="true" />
              </a>
            ) : (
              <Link
                href={col.cta.href}
                className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all"
              >
                {col.cta.label}
                <ArrowRight className="w-3 h-3" aria-hidden="true" />
              </Link>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
