import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { CTA } from "@/lib/ctas";
import { SYDRA_UTM_URL } from "@/lib/site";
import { PER_SUBMISSION_SYDRA, LIFECYCLE_MANUAL_HOURS } from "@/lib/time-savings";

const DECISION_QUESTIONS = [
  {
    question: "Does your team have capacity for about 5 minutes of review per claim?",
    route: "Sydra software on sydrahealth.com",
    href: SYDRA_UTM_URL,
    external: true,
  },
  {
    question: "Do you want zero biller time on IDR?",
    route: "Kronos Full Service on this site",
    href: CTA.caseReview.href,
    external: false,
  },
  {
    question: "Do you want both: software in house with a team one escalation away?",
    route: "Start with the free review",
    href: CTA.caseReview.href,
    external: false,
  },
] as const;

export default function SydraBridgeContent() {
  return (
    <>
      <section
        className="py-16 sm:py-24 lg:py-32"
        style={{ background: "linear-gradient(160deg, #001A0A 0%, #003D1A 45%, #005C2A 100%)" }}
        aria-labelledby="sydra-bridge-heading"
      >
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
            Kronos Health · Software + Full Service
          </p>
          <h1
            id="sydra-bridge-heading"
            className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6"
          >
            In house IDR vs outsourcing: two products, one foundation
          </h1>
          <p className="font-body text-sm sm:text-base text-white/90 font-light leading-relaxed mb-8">
            Sydra is the software your team operates, {PER_SUBMISSION_SYDRA} of review per claim.
            Kronos Revenue is the team, zero biller time. Same specialty trained foundation, same one
            claim per CPT discipline, different operator.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a
              href={SYDRA_UTM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-kronos-cyan text-kronos-bg py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-bold hover:opacity-90 hover:gap-5 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
              aria-label={CTA.seeSydra.ariaLabel}
            >
              {CTA.seeSydra.label}
              <ExternalLink className="w-3 h-3" aria-hidden="true" />
            </a>
            <Link
              href={CTA.caseReview.href}
              className="inline-flex items-center justify-center gap-3 border border-white/40 text-white py-3 sm:py-4 px-6 sm:px-8 uppercase tracking-widest text-xs font-light hover:bg-white/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[48px]"
            >
              Get the free review either way
              <ArrowRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="sydra-labor-heading">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="sydra-labor-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
            The in house labor math.
          </h2>
          <p className="font-body text-gray-600 font-light leading-relaxed mb-4">
            Monthly dispute volume times roughly {LIFECYCLE_MANUAL_HOURS} hours of lifecycle staff
            time per claim by hand, times your loaded hourly cost. That is the cost of recovery before
            recovering anything. At scale, small claims stop getting filed in house because the labor
            cost exceeds the dispute value.
          </p>
          <p className="font-body text-gray-600 font-light leading-relaxed">
            Sydra cuts per claim review to {PER_SUBMISSION_SYDRA}. Kronos Full Service cuts biller time
            to zero. The right choice depends on who operates the workflow, not volume alone.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-kronos-gray-200" aria-labelledby="sydra-hybrid-heading">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="sydra-hybrid-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
            The hybrid model.
          </h2>
          <p className="font-body text-gray-600 font-light leading-relaxed mb-4">
            Run Sydra in house for volume, with the Kronos team one escalation away when a case is too
            large or contested to risk. High value cases and adverse determinations already escalate to
            Heisha Rivera&apos;s desk on Full Service.
          </p>
          <p className="font-body text-gray-600 font-light leading-relaxed">
            Software competitors cannot offer the team. Law firms cannot offer the software. Kronos
            Health is the only player with both.
          </p>
          <p className="font-body text-xs text-gray-500 mt-6">
            HIPAA compliant · BAA on request for Kronos Full Service. Sydra is built to support HIPAA
            safeguards, BAA available.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="sydra-decision-heading">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12">
          <h2 id="sydra-decision-heading" className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">
            Three decision questions.
          </h2>
          <div className="space-y-6">
            {DECISION_QUESTIONS.map((item) => (
              <div key={item.question} className="border border-gray-200 p-6">
                <p className="font-heading text-lg text-gray-900 mb-3">{item.question}</p>
                {item.external ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all"
                  >
                    {item.route}
                    <ExternalLink className="w-3 h-3" aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-kronos-green-dark uppercase tracking-widest text-xs font-bold hover:gap-3 transition-all"
                  >
                    {item.route}
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODO: Add "Sydra runs on Claude via Amazon Bedrock" once Sydra site ships naming. */}
    </>
  );
}
