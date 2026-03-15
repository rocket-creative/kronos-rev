import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-kronos-bg flex flex-col items-center justify-center px-4">
      <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
        404
      </h1>
      <p className="font-body text-white/60 font-light mb-8 text-center max-w-md">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-kronos-cyan text-kronos-bg py-3 px-6 uppercase tracking-widest text-xs font-light hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-bg"
      >
        Return home
      </Link>
    </div>
  );
}
