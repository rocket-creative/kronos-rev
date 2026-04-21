import type { Metadata } from "next";
import { SynaptixBillingForm } from "@/components/SynaptixBillingForm";
import { BreadcrumbListSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Synaptix Concussion Program Billing | Kronos Revenue",
  description:
    "Kronos Revenue handles CPT coding, claim management, and NSA dispute filing for Synaptix licensees running concussion programs. Get paid for every session.",
  alternates: {
    canonical: "https://www.kronosrevenue.health/synaptix-billing",
  },
  openGraph: {
    title: "Synaptix Concussion Program Billing | Kronos Revenue",
    description:
      "CPT coding, claim management, and NSA disputes for Synaptix concussion programs. Get paid for every session.",
    url: "https://www.kronosrevenue.health/synaptix-billing",
    siteName: "Kronos Revenue",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Synaptix Concussion Program Billing | Kronos Revenue",
    description:
      "Concussion program billing and NSA disputes for Synaptix licensees.",
  },
};

const TRUST_ITEMS = [
  "Full CPT coding for every concussion session",
  "Claim management and payer follow-up",
  "NSA dispute filing when payers short-pay",
  "Built for Synaptix licensees — we know the protocol",
];

export default function SynaptixBillingPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: "https://www.kronosrevenue.health" },
          { name: "Synaptix Billing", url: "https://www.kronosrevenue.health/synaptix-billing" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              Synaptix add-on billing
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6">
              Get paid for every concussion session
            </h1>
            <p className="font-body text-white/60 text-sm font-light leading-relaxed mb-8">
              You have licensed Synaptix. Your concussion program is running. Now let us handle the billing — CPT coding, claim submission, payer disputes, and collections — so you capture every dollar the program generates.
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
              Working with neurosurgery, orthopedic surgery, neurology, PM&amp;R, and sports medicine practices.
            </p>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="bg-kronos-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl text-white mb-6">Tell us about your program</h2>
              <SynaptixBillingForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
