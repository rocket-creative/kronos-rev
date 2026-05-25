import Link from "next/link";
import type { NavLink } from "@/lib/navigation";

type RelatedServicesProps = {
  heading?: string;
  links: NavLink[];
  currentPath: string;
};

export function RelatedServices({
  heading = "Related services",
  links,
  currentPath,
}: RelatedServicesProps) {
  const filtered = links.filter((l) => l.href !== currentPath);
  if (filtered.length === 0) return null;

  return (
    <section
      className="bg-kronos-bg border-t border-white/10"
      aria-labelledby="related-services-heading"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-10">
        <h2
          id="related-services-heading"
          className="font-heading text-xl text-white mb-4"
        >
          {heading}
        </h2>
        <ul className="flex flex-wrap gap-3">
          {filtered.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex min-h-[44px] items-center px-4 py-2 border border-white/20 text-white/80 font-body text-xs uppercase tracking-widest hover:border-kronos-cyan hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
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
