import Link from "next/link";
import {
  Bone,
  Brain,
  Activity,
  Sparkles,
  Syringe,
  Scissors,
  type LucideIcon,
} from "lucide-react";
import { SPECIALTIES, type SpecialtySlug } from "@/lib/specialties";

const ICONS: Record<SpecialtySlug, LucideIcon> = {
  orthopedic: Bone,
  neurosurgery: Brain,
  spine: Activity,
  plastic: Sparkles,
  anesthesia: Syringe,
  "general-surgery": Scissors,
};

type PrimarySpecialtiesProps = {
  variant?: "light" | "dark";
  label?: string;
  linked?: boolean;
};

export function PrimarySpecialties({
  variant = "light",
  label = "Specialties Served",
  linked = false,
}: PrimarySpecialtiesProps) {
  const isDark = variant === "dark";

  return (
    <section
      className={`${
        isDark ? "bg-kronos-bg border-white/10" : "bg-white border-gray-100"
      } border-b py-8 sm:py-12`}
      aria-label={label}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        <p
          className={`font-body text-[10px] sm:text-xs tracking-widest uppercase mb-6 sm:mb-8 ${
            isDark ? "text-white/50" : "text-gray-400"
          }`}
        >
          {label}
        </p>
        <ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4"
          role="list"
        >
          {SPECIALTIES.map((specialty) => {
            const Icon = ICONS[specialty.slug];
            const content = (
              <>
                <div
                  className={`w-10 h-10 flex items-center justify-center mb-3 ${
                    isDark ? "bg-kronos-cyan/10" : "bg-gray-100"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${isDark ? "text-kronos-cyan" : "text-kronos-green-dark"}`}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>
                <span
                  className={`font-heading text-sm sm:text-base leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {specialty.shortName}
                </span>
              </>
            );

            return (
              <li key={specialty.slug}>
                {linked ? (
                  <Link
                    href={`/specialties#${specialty.slug}`}
                    className={`block p-4 border transition-colors min-h-[44px] focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan ${
                      isDark
                        ? "border-white/10 hover:border-kronos-cyan/50 hover:bg-white/5"
                        : "border-gray-200 hover:border-kronos-cyan hover:bg-gray-50"
                    }`}
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    className={`p-4 border ${
                      isDark ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    {content}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
