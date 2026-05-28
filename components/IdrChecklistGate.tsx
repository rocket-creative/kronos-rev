"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { IDR_CHECKLIST_SECTIONS, IDR_CHECKLIST_REFERENCES } from "@/lib/idr-checklist-content";

export function IdrChecklistGate() {
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "idr_checklist",
          email: email.trim(),
        }),
      });
      if (!res.ok) {
        setError("Something went wrong. Email intake@kronosrevenue.com for the checklist.");
        return;
      }
      setUnlocked(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (unlocked) {
    return (
      <div className="max-w-3xl">
        <p className="font-body text-xs uppercase tracking-widest text-gray-500 mb-2">
          NSA IDR filing checklist · May 2026
        </p>
        <p className="font-body text-sm text-gray-600 mb-8">
          Medically reviewed by Dr. John M. Abrahams, MD
        </p>
        {IDR_CHECKLIST_SECTIONS.map((section) => (
          <section key={section.title} className="mb-10">
            <h2 className="font-heading text-lg text-gray-900 mb-4">{section.title}</h2>
            <ul className="space-y-2">
              {section.items.map((item) => (
                <li key={item} className="flex items-start gap-2 font-body text-sm text-gray-600 font-light">
                  <span className="text-kronos-cyan mt-0.5" aria-hidden="true">
                    □
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
        <section className="border-t border-gray-200 pt-8">
          <h2 className="font-heading text-lg text-gray-900 mb-4">Regulatory references</h2>
          <ul className="list-disc list-inside space-y-1 font-body text-sm text-gray-600 font-light">
            {IDR_CHECKLIST_REFERENCES.map((ref) => (
              <li key={ref}>{ref}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md border border-gray-200 p-6 sm:p-8 bg-gray-50">
      <label htmlFor="checklist-email" className="block font-body text-xs uppercase tracking-widest text-gray-600 mb-2">
        Work email
      </label>
      <input
        id="checklist-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full h-12 bg-white border border-gray-200 px-4 text-gray-900 font-body font-light mb-4 focus:outline-none focus:border-kronos-cyan"
        placeholder="you@practice.com"
      />
      {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full min-h-[48px] bg-kronos-cyan text-white uppercase tracking-widest text-xs font-bold hover:opacity-90 disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {loading ? <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" /> : null}
        Show the full checklist
      </button>
    </form>
  );
}
