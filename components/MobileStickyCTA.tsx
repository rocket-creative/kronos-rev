"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

export function MobileStickyCTA() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const formHref = isHome ? "#contact" : "/contact";

  return (
    <div
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 pb-safe-bottom"
      role="complementary"
      aria-label="Call to action"
    >
      <div className="flex border-t border-gray-200 bg-white shadow-lg">
        <Link
          href={`tel:${PHONE_TEL}`}
          className="flex-1 inline-flex items-center justify-center min-h-[56px] gap-2 text-[13px] uppercase tracking-widest text-kronos-green-dark border-r border-gray-200 font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-kronos-cyan select-none"
          aria-label={`Call ${PHONE_DISPLAY} for a free revenue review`}
        >
          {PHONE_DISPLAY}
        </Link>
        <Link
          href={formHref}
          className="flex-1 inline-flex items-center justify-center min-h-[56px] text-[13px] uppercase tracking-widest bg-kronos-cyan text-white font-body hover:bg-kronos-green-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white select-none"
          aria-label="Request a free revenue review"
        >
          Free review
        </Link>
      </div>
    </div>
  );
}
