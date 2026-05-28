"use client";

export type ReferenceItem = {
  label: string;
  href: string;
};

import { MASTER_REFERENCES } from "@/lib/references";

const DEFAULT_REFERENCES: ReferenceItem[] = MASTER_REFERENCES;

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
            isDark ? "text-white/80" : "text-gray-700"
          }`}
        >
          {items.map((ref) => (
            <li key={ref.href}>
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
