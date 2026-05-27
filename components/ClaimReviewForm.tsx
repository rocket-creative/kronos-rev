"use client";

import { Suspense, useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useUtmParams } from "@/hooks/useUtmParams";

const inputClass =
  "w-full h-12 bg-black/20 border border-white/10 px-4 text-white placeholder:text-white/40 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors";
const selectClass =
  "w-full h-12 bg-kronos-bg border border-white/10 px-4 text-base text-white font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors appearance-none";
const labelClass = "block font-body text-xs text-white/60 uppercase tracking-widest mb-1.5";
const errorClass = "text-red-400 text-xs mt-1";

const SPECIALTIES = [
  "Orthopedic surgery",
  "Neurosurgery",
  "Spine surgery",
  "Plastic surgery",
  "Anesthesiology",
  "General surgery",
  "Other surgical / procedural specialty",
];

const CURRENT_HANDLING = [
  { value: "attorney", label: "Currently using an attorney" },
  { value: "in_house", label: "In-house biller" },
  { value: "third_party", label: "Third-party RCM" },
  { value: "nothing", label: "Not disputing today" },
];

const MONTHLY_CLAIMS = ["Under 10", "10–50", "51–200", "201–500", "Over 500"];

const BEST_TIME_OPTIONS = [
  { value: "morning", label: "Morning, 9am–12pm ET" },
  { value: "afternoon", label: "Afternoon, 12pm–5pm ET" },
  { value: "either", label: "Either works" },
  { value: "email", label: "Email is fine — no call needed" },
];

interface FieldErrors {
  contact_name?: string;
  practice_name?: string;
  phone?: string;
  email?: string;
  specialty?: string;
}

function ClaimReviewFormInner() {
  const utm = useUtmParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(fd: FormData): FieldErrors {
    const errors: FieldErrors = {};
    if (!String(fd.get("contact_name") ?? "").trim()) errors.contact_name = "Name is required";
    if (!String(fd.get("practice_name") ?? "").trim())
      errors.practice_name = "Practice name is required";
    if (!String(fd.get("phone") ?? "").trim()) errors.phone = "Phone number is required";
    const email = String(fd.get("email") ?? "").trim();
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Please enter a valid email address";
    if (!String(fd.get("specialty") ?? "").trim()) errors.specialty = "Specialty is required";
    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const fd = new FormData(form);
    const errors = validate(fd);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          form_type: "claim_review",
          contact_name: fd.get("contact_name"),
          title: fd.get("title") || undefined,
          practice_name: fd.get("practice_name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          specialty: fd.get("specialty"),
          current_handling: fd.get("current_handling") || undefined,
          best_time_to_reach: fd.get("best_time_to_reach") || undefined,
          state: fd.get("state") || undefined,
          monthly_oon_claims: fd.get("monthly_oon_claims") || undefined,
          message: fd.get("message") || undefined,
          utm: Object.keys(utm).length > 0 ? utm : undefined,
        }),
      });
      if (!res.ok) throw new Error();
      setIsSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-black/20 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-kronos-cyan mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-heading text-2xl text-white mb-2">Request Received</h3>
        <p className="font-body text-white/60 text-sm font-light">
          We&apos;ve received your case review request. A Kronos specialist will reply within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className="font-body text-white/50 text-xs sr-only" id="cr-required-legend">
        Required fields are marked with an asterisk.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cr-name" className={labelClass}>
            Your name <span className="text-kronos-cyan" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="cr-name"
            name="contact_name"
            required
            aria-required="true"
            autoComplete="name"
            inputMode="text"
            style={{ fontSize: "16px" }}
            aria-invalid={!!fieldErrors.contact_name}
            aria-describedby={
              fieldErrors.contact_name ? "cr-name-error cr-required-legend" : "cr-required-legend"
            }
            className={`${inputClass} ${fieldErrors.contact_name ? "border-red-400" : ""} scroll-mt-28`}
          />
          {fieldErrors.contact_name && (
            <p id="cr-name-error" className={errorClass} role="alert">
              {fieldErrors.contact_name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cr-title" className={labelClass}>
            Title
          </label>
          <input
            type="text"
            id="cr-title"
            name="title"
            placeholder="Physician, CFO, admin…"
            autoComplete="organization-title"
            inputMode="text"
            style={{ fontSize: "16px" }}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cr-practice" className={labelClass}>
          Practice name <span className="text-kronos-cyan" aria-hidden="true">*</span>
        </label>
        <input
          type="text"
          id="cr-practice"
          name="practice_name"
          required
          aria-required="true"
          autoComplete="organization"
          inputMode="text"
          style={{ fontSize: "16px" }}
          aria-invalid={!!fieldErrors.practice_name}
          aria-describedby={
            fieldErrors.practice_name ? "cr-practice-error cr-required-legend" : "cr-required-legend"
          }
          className={`${inputClass} ${fieldErrors.practice_name ? "border-red-400" : ""} scroll-mt-28`}
        />
        {fieldErrors.practice_name && (
          <p id="cr-practice-error" className={errorClass} role="alert">
            {fieldErrors.practice_name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cr-phone" className={labelClass}>
            Phone <span className="text-kronos-cyan" aria-hidden="true">*</span>
          </label>
          <input
            type="tel"
            id="cr-phone"
            name="phone"
            required
            aria-required="true"
            autoComplete="tel"
            inputMode="tel"
            style={{ fontSize: "16px" }}
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={
              fieldErrors.phone ? "cr-phone-error cr-required-legend" : "cr-required-legend"
            }
            className={`${inputClass} ${fieldErrors.phone ? "border-red-400" : ""} scroll-mt-28`}
          />
          {fieldErrors.phone && (
            <p id="cr-phone-error" className={errorClass} role="alert">
              {fieldErrors.phone}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cr-email" className={labelClass}>
            Work email <span className="text-kronos-cyan" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="cr-email"
            name="email"
            required
            aria-required="true"
            autoComplete="email"
            inputMode="email"
            style={{ fontSize: "16px" }}
            aria-invalid={!!fieldErrors.email}
            aria-describedby={
              fieldErrors.email ? "cr-email-error cr-required-legend" : "cr-required-legend"
            }
            className={`${inputClass} ${fieldErrors.email ? "border-red-400" : ""} scroll-mt-28`}
          />
          {fieldErrors.email && (
            <p id="cr-email-error" className={errorClass} role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cr-specialty" className={labelClass}>
            Primary specialty <span className="text-kronos-cyan" aria-hidden="true">*</span>
          </label>
          <div className="relative">
            <select
              id="cr-specialty"
              name="specialty"
              required
              aria-required="true"
              aria-invalid={!!fieldErrors.specialty}
              aria-describedby={
                fieldErrors.specialty ? "cr-specialty-error cr-required-legend" : "cr-required-legend"
              }
              className={`${selectClass} ${fieldErrors.specialty ? "border-red-400" : ""} scroll-mt-28`}
              defaultValue=""
            >
              <option value="" disabled>
                Select specialty
              </option>
              {SPECIALTIES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          {fieldErrors.specialty && (
            <p id="cr-specialty-error" className={errorClass} role="alert">
              {fieldErrors.specialty}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cr-volume" className={labelClass}>
            Monthly NSA volume (approx.)
          </label>
          <div className="relative">
            <select id="cr-volume" name="monthly_oon_claims" className={selectClass} defaultValue="">
              <option value="">Select range</option>
              {MONTHLY_CLAIMS.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div>
        <label className={labelClass}>Current handling</label>
        <div className="space-y-2.5 mt-1">
          {CURRENT_HANDLING.map((opt) => (
            <label
              key={opt.value}
              className="flex items-center min-h-[44px] gap-3 cursor-pointer group py-1"
            >
              <input
                type="radio"
                name="current_handling"
                value={opt.value}
                className="mt-0.5 accent-[#00E5BE] shrink-0"
              />
              <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors leading-snug">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="cr-best-time" className={labelClass}>
          Best time to reach you
        </label>
        <div className="relative">
          <select id="cr-best-time" name="best_time_to_reach" className={selectClass} defaultValue="">
            <option value="">Select a time (optional)</option>
            {BEST_TIME_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.label}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cr-claims" className={labelClass}>
          Tell us about your claims
        </label>
        <textarea
          id="cr-claims"
          name="message"
          rows={4}
          placeholder="Payers, typical CPT codes, dispute volume, or anything that helps us prepare for your review…"
          style={{ fontSize: "16px" }}
          className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors resize-none"
        />
      </div>

      {error && (
        <p className="text-red-400 text-sm font-body" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] bg-kronos-cyan text-kronos-bg font-body font-bold py-3 px-6 uppercase tracking-widest text-xs hover:bg-kronos-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            Get a free NSA IDR review
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}

export function ClaimReviewForm() {
  return (
    <Suspense fallback={<p className="text-white/50 text-sm font-body">Loading form…</p>}>
      <ClaimReviewFormInner />
    </Suspense>
  );
}
