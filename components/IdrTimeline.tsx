import Link from "next/link";
import { IDR_TIMELINE_STEPS } from "@/lib/idr-timeline";

type IdrTimelineProps = {
  variant?: "light" | "dark";
};

export function IdrTimeline({ variant = "light" }: IdrTimelineProps) {
  const isDark = variant === "dark";

  return (
    <ol className="space-y-6 max-w-3xl">
      {IDR_TIMELINE_STEPS.map((step, index) => (
        <li key={step.title} className="flex gap-4">
          <span
            className={`flex-shrink-0 w-8 h-8 flex items-center justify-center font-heading text-sm ${
              isDark ? "bg-kronos-cyan/20 text-kronos-cyan" : "bg-kronos-cyan/10 text-kronos-green-dark"
            }`}
            aria-hidden="true"
          >
            {index + 1}
          </span>
          <div>
            <h3 className={`font-heading text-lg mb-1 ${isDark ? "text-white" : "text-gray-900"}`}>
              {step.title}
            </h3>
            <p
              className={`font-body text-xs uppercase tracking-widest mb-2 ${
                isDark ? "text-kronos-cyan" : "text-kronos-green-dark"
              }`}
            >
              {step.window}
            </p>
            <p className={`font-body text-sm font-light leading-relaxed ${isDark ? "text-white/80" : "text-gray-600"}`}>
              {step.body}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function SpecialtyLinksGrid() {
  const specialties = [
    { href: "/specialties/orthopedic", label: "Orthopedic surgery" },
    { href: "/specialties/neurosurgery", label: "Neurosurgery" },
    { href: "/specialties/spine", label: "Spine surgery" },
    { href: "/specialties/plastic-surgery", label: "Plastic surgery" },
    { href: "/specialties/anesthesia", label: "Anesthesiology" },
    { href: "/specialties/general-surgery", label: "General surgery" },
  ];

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {specialties.map((s) => (
        <li key={s.href}>
          <Link
            href={s.href}
            className="block border border-gray-200 p-4 font-body text-sm text-gray-900 hover:border-kronos-cyan transition-colors"
          >
            {s.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
