"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-kronos-bg/95 backdrop-blur-md border-t border-white/10 p-4 pb-safe-bottom"
      role="complementary"
      aria-label="Call to action"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
        <Link
          href="tel:+19147056830"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-kronos-cyan text-kronos-bg py-3 px-4 uppercase tracking-widest text-xs font-light hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-bg"
          aria-label="Call (914) 705 6830 for a free revenue review"
        >
          (914) 705 6830
        </Link>
        <Link
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-kronos-cyan text-kronos-cyan py-3 px-4 uppercase tracking-widest text-xs font-light hover:bg-kronos-cyan/10 transition-colors focus:outline-none focus:ring-2 focus:ring-kronos-cyan focus:ring-offset-2 focus:ring-offset-kronos-bg"
          aria-label="Request a free revenue review"
        >
          Free Revenue Review
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
