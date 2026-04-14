import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { BreadcrumbListSchema } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Kronos Revenue | Free Revenue Review",
  description:
    "Reach out to Kronos Revenue for a free revenue review. We specialize in No Surprises Act dispute resolution and out-of-network billing for surgical providers.",
  alternates: {
    canonical: "https://kronosrevenue.co/contact",
  },
  openGraph: {
    title: "Contact Kronos Revenue | Free Revenue Review",
    description:
      "Reach out for a free revenue review. No Surprises Act dispute resolution and OON billing for surgical providers.",
    url: "https://kronosrevenue.co/contact",
    siteName: "Kronos Revenue",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Kronos Revenue | Free Revenue Review",
    description:
      "Reach out for a free revenue review. NSA dispute resolution and OON billing for surgical providers.",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", url: "https://kronosrevenue.co" },
          { name: "Contact", url: "https://kronosrevenue.co/contact" },
        ]}
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left — copy */}
          <div className="lg:col-span-5">
            <p className="font-body text-xs text-kronos-cyan uppercase tracking-widest mb-4">
              Get in touch
            </p>
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-none mb-6">
              Free revenue review
            </h1>
            <p className="font-body text-white/60 text-sm font-light leading-relaxed mb-10">
              Tell us about your practice and we will show you exactly where you are leaving money on the table — at no cost, no commitment.
            </p>
            <div className="space-y-6">
              <div className="border-l-2 border-kronos-cyan/30 pl-4">
                <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">Phone</p>
                <a
                  href="tel:+19147056830"
                  className="font-body text-sm text-white hover:text-kronos-cyan transition-colors"
                >
                  (914) 705 6830
                </a>
              </div>
              <div className="border-l-2 border-kronos-cyan/30 pl-4">
                <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">Email</p>
                <a
                  href="mailto:info@kronosrevenue.com"
                  className="font-body text-sm text-white hover:text-kronos-cyan transition-colors"
                >
                  info@kronosrevenue.com
                </a>
              </div>
              <div className="border-l-2 border-kronos-cyan/30 pl-4">
                <p className="font-body text-xs text-white/40 uppercase tracking-widest mb-1">Office</p>
                <address className="not-italic font-body text-sm text-white/70 font-light">
                  244 Westchester Ave, Ste 209<br />
                  West Harrison, NY 10604
                </address>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-7">
            <div className="bg-kronos-card p-6 sm:p-8">
              <ContactForm source="contact_page" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
