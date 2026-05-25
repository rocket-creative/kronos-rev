"use client";

import { ReviewHighlight } from "@/components/ReviewHighlight";

export type ReferenceItem = {
  label: string;
  href: string;
};

const DEFAULT_REFERENCES: ReferenceItem[] = [
  {
    label: "CMS No Surprises Act overview",
    href: "https://www.cms.gov/nosurprises",
  },
  {
    label: "Federal IDR regulations (45 CFR Part 149)",
    href: "https://www.ecfr.gov/current/title-45/subtitle-A/subchapter-F/part-149",
  },
  {
    label: "HHS guidance on the No Surprises Act",
    href: "https://www.hhs.gov/no-surprises",
  },
];

type ReferencesSectionProps = {
  id?: string;
  items?: ReferenceItem[];
  variant?: "light" | "dark";
};

export function ReferencesSection({
  id = "references",
  items = DEFAULT_REFERENCES,
  variant = "dark",
}: ReferencesSectionProps) {
  const isDark = variant === "dark";

  return (
    <section
      id={id}
      className={isDark ? "bg-kronos-bg" : "bg-gray-50"}
      aria-labelledby={`${id}-heading`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10 sm:py-12">
        <h2
          id={`${id}-heading`}
          className={`font-heading text-xl sm:text-2xl mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          References
        </h2>
        <ol
          className={`list-decimal list-inside space-y-2 font-body text-sm font-light ${
            isDark ? "text-white/70" : "text-gray-600"
          }`}
        >
          {items.map((ref) => (
            <li key={ref.href}>
              <ReviewHighlight>
                <a
                  href={ref.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`underline hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan rounded ${
                    isDark ? "text-kronos-cyan" : "text-kronos-green-dark"
                  }`}
                >
                  {ref.label}
                </a>
              </ReviewHighlight>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
