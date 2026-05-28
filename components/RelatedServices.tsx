import Link from "next/link";
import type { NavLink } from "@/lib/navigation";

type RelatedServicesProps = {
  heading?: string;
  links: NavLink[];
  currentPath: string;
  variant?: "dark" | "light";
};

export function RelatedServices({
  heading = "Explore more on Kronos Revenue",
  links,
  currentPath,
  variant = "dark",
}: RelatedServicesProps) {
  const filtered = links.filter((l) => l.href !== currentPath);
  if (filtered.length === 0) return null;

  const isLight = variant === "light";

  return (
    <section
      className={isLight ? "bg-kronos-gray-200 border-t border-kronos-gray-300" : "bg-kronos-bg border-t border-white/10"}
      aria-labelledby="related-services-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
        <h2
          id="related-services-heading"
          className={`font-heading text-xl mb-4 ${isLight ? "text-gray-900" : "text-white"}`}
        >
          {heading}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {filtered.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`inline-flex min-h-[44px] items-center px-4 py-2 border font-body text-xs uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan scroll-mt-28 ${
                  isLight
                    ? "border-gray-200 text-gray-600 hover:border-kronos-cyan hover:text-kronos-green-dark"
                    : "border-white/20 text-white/80 hover:border-kronos-cyan hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
