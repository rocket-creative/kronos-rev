"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { CTA } from "@/lib/ctas";

export function PricingExitIntent() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = window.scrollY / scrollable;
      if (pct >= 0.8) setVisible(true);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  if (!visible || dismissed) return null;

  return (
    <div
      className="fixed bottom-20 lg:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 bg-white border border-gray-200 shadow-lg p-6"
      role="dialog"
      aria-labelledby="exit-intent-heading"
    >
      <button
        type="button"
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 p-2 text-gray-400 hover:text-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" aria-hidden="true" />
      </button>
      <p id="exit-intent-heading" className="font-heading text-lg text-gray-900 mb-2 pr-8">
        Before you go
      </p>
      <p className="font-body text-sm text-gray-600 font-light mb-4">
        Download the NSA IDR filing checklist. Every document, deadline, and CPT rule before you
        submit to the IDRE portal.
      </p>
      <Link
        href={CTA.idrChecklist.href}
        className="inline-flex items-center justify-center w-full bg-kronos-cyan text-white py-3 px-6 uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-opacity"
        onClick={() => setDismissed(true)}
      >
        {CTA.idrChecklist.label}
      </Link>
    </div>
  );
}
