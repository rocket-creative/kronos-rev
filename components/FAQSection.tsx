"use client";

import type { FaqItem } from "@/lib/faqs";

type FAQSectionProps = {
  id?: string;
  heading?: string;
  headingId?: string;
  items: FaqItem[];
  variant?: "light" | "dark";
};

export function FAQSection({
  id = "faq",
  heading = "Frequently asked questions",
  headingId = "page-faq-heading",
  items,
  variant = "dark",
}: FAQSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={isDark ? "bg-kronos-bg border-t border-white/10" : "bg-white"}
      aria-labelledby={headingId}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16">
        <h2
          id={headingId}
          className={`font-heading text-2xl sm:text-3xl mb-8 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {heading}
        </h2>
        <dl className="space-y-6">
          {items.map((item) => (
            <div key={item.question} className={`border-b pb-6 ${isDark ? "border-white/10" : "border-gray-100"}`}>
              <dt
                className={`font-heading text-base sm:text-lg mb-2 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                {item.question}
              </dt>
              <dd
                className={`font-body text-sm font-light leading-relaxed ${
                  isDark ? "text-white/70" : "text-gray-600"
                }`}
              >
                {item.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
