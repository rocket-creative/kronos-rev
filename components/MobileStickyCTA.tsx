"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileStickyCTA() {
  return (
    <div
      className="xl:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg p-4 pb-safe-bottom"
      role="complementary"
      aria-label="Call to action"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-4">
        <Link
          href="tel:+19147056830"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-kronos-cyan text-white py-3 px-4 uppercase tracking-widest text-xs font-light hover:bg-kronos-green-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Call (914) 705 6830 for a free revenue review"
        >
          (914) 705 6830
        </Link>
        <Link
          href="#contact"
          className="flex-1 inline-flex items-center justify-center gap-2 border border-kronos-cyan text-kronos-cyan py-3 px-4 uppercase tracking-widest text-xs font-light hover:bg-kronos-cyan/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          aria-label="Request a free revenue review"
        >
          Free Revenue Review
          <ArrowRight className="w-3 h-3" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}
