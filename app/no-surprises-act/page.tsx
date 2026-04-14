import type { Metadata } from "next";
import { NSADisputeForm } from "@/components/NSADisputeForm";
import { BreadcrumbListSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "No Surprises Act Dispute Resolution for Surgeons | Kronos Revenue",
  description:
    "Out-of-network surgeons being short-paid by United, Cigna, Anthem, or Aetna. Kronos Revenue handles your NSA IDR disputes from filing through final arbitration.",
  alternates: {
    canonical: "https://kronosrevenue.co/no-surprises-act",
  },
  openGraph: {
    title: "No Surprises Act Dispute Resolution for Surgeons | Kronos Revenue",
    description:
      "OON surgeons short-paid by United, Cigna, Anthem, or Aetna. We handle NSA IDR disputes from filing through arbitration.",
    url: "https://kronosrevenue.co/no-surprises-act",
    siteName: "Kronos Revenue",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "No Surprises Act Dispute Resolution for Surgeons | Kronos Revenue",
    description:
      "NSA IDR dispute resolution for out-of-network surgeons. Flat fee per CPT code.",
  },
};

const TRUST_ITEMS = [
  "All major commercial payers — United, Cigna, Anthem, Aetna",
  "Flat fee per CPT code, never a percentage",
  "Full case management from filing through arbitration",
  "Operative report reviewed for every dispute",
];

export default function NoSurprisesActPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: "https://kronosrevenue.co" },
          { name: "No Surprises Act", url: "https://kronosrevenue.co/no-surprises-act" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              NSA IDR dispute resolution
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6">
              Stop leaving money on the table
            </h1>
            <p className="font-body text-white/60 text-sm font-light leading-relaxed mb-8">
              United, Cigna, Anthem, and Aetna are systematically short-paying out-of-network surgical claims. The No Surprises Act gives you the right to dispute. We fight every one.
            </p>
            <ul className="space-y-3 mb-10">
              {TRUST_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 w-4 h-4 shrink-0 border border-kronos-cyan/40 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-kronos-cyan" />
                  </span>
                  <span className="font-body text-sm text-white/70 font-light">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-xs text-white/30 font-light">
              We work with out-of-network neurosurgeons, general surgeons, and surgical subspecialists nationwide.
            </p>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="bg-kronos-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl text-white mb-6">Tell us about your disputes</h2>
              <NSADisputeForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
