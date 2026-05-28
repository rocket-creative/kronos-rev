import type { Metadata } from "next";
import Link from "next/link";
import { serviceLinks } from "@/lib/navigation";

export const metadata: Metadata = {
  title: "Page Not Found | Kronos Revenue",
  description: "The page you requested could not be found on Kronos Revenue.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-[60vh] bg-kronos-bg flex flex-col items-center justify-center px-4">
      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">404</h1>
      <p className="font-body text-white/70 font-light mb-8 text-center max-w-md">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-kronos-cyan text-kronos-bg py-3 px-6 uppercase tracking-widest text-xs font-light hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-bg mb-8"
      >
        Return home
      </Link>
      <nav aria-label="Helpful links" className="flex flex-wrap justify-center gap-4">
        {serviceLinks.slice(0, 4).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="font-body text-xs text-white/60 hover:text-white uppercase tracking-widest focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan rounded"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
