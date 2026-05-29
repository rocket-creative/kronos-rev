"use client";

import Link from "next/link";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";
import { CTA } from "@/lib/ctas";
import { SHELL_MAX } from "@/lib/layout";

export function MobileStickyCTA() {
  return (
    <div
      className={`lg:hidden fixed bottom-0 left-0 right-0 mx-auto w-full ${SHELL_MAX} z-40 pb-safe-bottom`}
      role="complementary"
      aria-label="Call to action"
    >
      <div className="flex border-t border-gray-200 bg-white shadow-lg">
        <Link
          href={`tel:${PHONE_TEL}`}
          className="flex-1 inline-flex items-center justify-center min-h-[56px] gap-2 text-[13px] uppercase tracking-widest text-kronos-green-dark border-r border-gray-200 font-body focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-kronos-cyan select-none"
          aria-label={`Call ${PHONE_DISPLAY}`}
        >
          {PHONE_DISPLAY}
        </Link>
        <Link
          href={CTA.caseReview.href}
          className="flex-1 inline-flex items-center justify-center min-h-[56px] text-[13px] uppercase tracking-widest bg-kronos-cyan text-white font-body hover:bg-kronos-green-dark transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white select-none"
          aria-label={CTA.caseReview.ariaLabel}
        >
          Free IDR review
        </Link>
      </div>
    </div>
  );
}
