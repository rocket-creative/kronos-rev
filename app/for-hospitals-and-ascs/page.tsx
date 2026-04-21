import type { Metadata } from "next";
import { HospitalGroupForm } from "@/components/HospitalGroupForm";
import { BreadcrumbListSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "OON Billing Partner for Hospital Groups and ASC Management Companies | Kronos Revenue",
  description:
    "Centralized No Surprises Act dispute resolution and out-of-network billing for multi-facility hospital groups and ASC management companies. One partner, every location.",
  alternates: {
    canonical: "https://www.kronosrevenue.health/for-hospitals-and-ascs",
  },
  openGraph: {
    title: "OON Billing Partner for Hospital Groups and ASC Management Companies | Kronos Revenue",
    description:
      "Centralized NSA dispute resolution and OON billing for multi-facility hospital groups and ASC companies.",
    url: "https://www.kronosrevenue.health/for-hospitals-and-ascs",
    siteName: "Kronos Revenue",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OON Billing Partner for Hospital Groups and ASC Management Companies | Kronos Revenue",
    description:
      "Centralized NSA and OON billing for hospital groups and ASC management companies.",
  },
};

const TRUST_ITEMS = [
  "Single point of contact across all facilities",
  "Consistent IDR strategy and outcomes reporting",
  "Scalable — 1 location or 50+",
  "Flat fee per CPT code, never a percentage",
];

export default function ForHospitalsAndASCsPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: "https://www.kronosrevenue.health" },
          { name: "For Hospitals and ASCs", url: "https://www.kronosrevenue.health/for-hospitals-and-ascs" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              Multi-facility partnership
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6">
              One OON billing partner for every facility
            </h1>
            <p className="font-body text-white/60 text-sm font-light leading-relaxed mb-8">
              Hospital groups and ASC management companies waste revenue because their OON billing is fragmented. Kronos Revenue centralizes your NSA dispute strategy and collections across all locations.
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
              Working with hospital systems, ASC management companies, and multi-specialty physician groups nationwide.
            </p>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="bg-kronos-card p-6 sm:p-8">
              <h2 className="font-heading text-2xl text-white mb-6">Tell us about your organization</h2>
              <HospitalGroupForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
