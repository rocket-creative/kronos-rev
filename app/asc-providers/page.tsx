import type { Metadata } from "next";
import { ASCProviderForm } from "@/components/ASCProviderForm";
import { BreadcrumbListSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "OON Provider at In-Network ASC? Recover What You Are Owed | Kronos Revenue",
  description:
    "If you are an out-of-network provider performing procedures at an in-network ASC or hospital, the No Surprises Act protects your right to fair payment. Kronos Revenue handles the disputes.",
  alternates: {
    canonical: "https://www.kronosrevenue.health/asc-providers",
  },
  openGraph: {
    title: "OON Provider at In-Network ASC? Recover What You Are Owed | Kronos Revenue",
    description:
      "OON provider at an in-network ASC or hospital? The NSA protects your right to fair payment. We handle the disputes.",
    url: "https://www.kronosrevenue.health/asc-providers",
    siteName: "Kronos Revenue",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OON Provider at In-Network ASC? Recover What You Are Owed | Kronos Revenue",
    description:
      "OON at an in-network facility? NSA dispute resolution by Kronos Revenue.",
  },
};

const TRUST_ITEMS = [
  "Specifically built for OON providers at in-network facilities",
  "GI, orthopedic, general surgery, pain management",
  "Flat fee per CPT code — never a percentage of recovery",
  "Full case management, start to finish",
];

export default function ASCProvidersPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: "https://www.kronosrevenue.health" },
          { name: "ASC Providers", url: "https://www.kronosrevenue.health/asc-providers" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              OON at an in-network facility
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6">
              Your ASC is in-network. You are not.
            </h1>
            <p className="font-body text-white/60 text-sm font-light leading-relaxed mb-8">
              When you perform procedures at an in-network ASC or hospital as an out-of-network provider, the No Surprises Act requires insurers to pay you fairly. Most do not. We make sure they do.
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
              Working with GI, orthopedic surgery, general surgery, pain management, ENT, and ophthalmology providers nationwide.
            </p>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="bg-kronos-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl text-white mb-6">Tell us about your practice</h2>
              <ASCProviderForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
