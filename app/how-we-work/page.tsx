import type { Metadata } from "next";
import {
  MarketingPage,
  MarketingSection,
  SydraCrossLink,
} from "@/components/MarketingPage";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbItems } from "@/lib/navigation";
import { KRONOS_FEE_SHORT, DOLLAR_KEPT_CONTRAST, VASTLY_MORE_LINE } from "@/lib/pricing-copy";

export const metadata: Metadata = createPageMetadata({
  title: "NSA IDR Process | Done for You | Kronos Revenue",
  description:
    "The done for you No Surprises Act and federal IDR operation, built by surgeons. Forward your EOBs — we handle every NSA IDR dispute end to end.",
  path: "/how-we-work",
});

const youDo = [
  "Forward your EOBs (or grant secure access to your EMR / billing system).",
  "Tell us your specialty mix and provider count.",
  "Sign the BAA and engagement letter.",
  "Show up for the quarterly review.",
];

const weDo = [
  "Parse every EOB the moment it comes in.",
  "Identify every eligible CPT. File one claim per CPT — specialty coded.",
  "Build the IDR submission with the documentation that wins.",
  "Submit. Track. Negotiate. Resolve.",
  "Report monthly. Review with the practice quarterly.",
];

const onboarding = [
  { week: "Week 1", detail: "BAA + engagement letter signed. Practice profile built." },
  { week: "Week 2", detail: "First 5 claims processed in parallel with your current process — proof of concept." },
  { week: "Week 3", detail: "Full handover. Kronos Revenue is now the IDR layer for your practice." },
  { week: "Week 4", detail: "First monthly report." },
];

export default function HowWeWorkPage() {
  const crumbs = breadcrumbItems([{ name: "NSA IDR Process", path: "/how-we-work" }]);

  return (
    <MarketingPage
      breadcrumbs={crumbs}
      eyebrow="NSA · Federal IDR"
      h1="The done for you NSA IDR operation, built by surgeons."
      intro={`You hand us the EOBs. We handle every step of the No Surprises Act IDR process — specialty coded, one claim per CPT. ${KRONOS_FEE_SHORT}. ${VASTLY_MORE_LINE}`}
      primaryCta="consultation"
      bottomCtaHeading="Book an NSA IDR consultation"
    >
      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">What you do</h2>
        <p className="font-body text-gray-500 text-sm uppercase tracking-widest mb-6">
          Four steps. The rest is on us.
        </p>
        <ol className="space-y-4 max-w-2xl">
          {youDo.map((step, i) => (
            <li key={step} className="flex items-start gap-4">
              <span className="font-heading text-kronos-cyan text-lg shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-body text-gray-600 font-light">{step}</span>
            </li>
          ))}
        </ol>
      </MarketingSection>

      <MarketingSection variant="neutral">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">What we do</h2>
        <ul className="space-y-4 max-w-3xl">
          {weDo.map((item) => (
            <li key={item} className="flex items-start gap-3 font-body text-gray-600 font-light">
              <span className="w-1.5 h-1.5 bg-kronos-green-dark mt-2 shrink-0" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </MarketingSection>

      <MarketingSection variant="white">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-8">Onboarding</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
          {onboarding.map(({ week, detail }) => (
            <div key={week} className="border border-gray-200 p-6">
              <p className="font-body text-xs uppercase tracking-widest text-kronos-cyan mb-2">
                {week}
              </p>
              <p className="font-body text-gray-600 font-light text-sm">{detail}</p>
            </div>
          ))}
        </div>
      </MarketingSection>

      <MarketingSection variant="neutral">
        <h2 className="font-heading text-2xl sm:text-3xl text-gray-900 mb-6">
          The SYDRA software under the hood
        </h2>
        <SydraCrossLink />
        <p className="font-body text-gray-600 font-light leading-relaxed max-w-3xl mt-6">
          Kronos Revenue runs on our own SYDRA software platform — the same engine you could license
          and operate yourself if you preferred. Tier 3 means you do not have to.
        </p>
      </MarketingSection>
    </MarketingPage>
  );
}
