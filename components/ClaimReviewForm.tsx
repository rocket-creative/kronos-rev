"use client";

import { Suspense, useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { useUtmParams } from "@/hooks/useUtmParams";

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
  { value: "not_filing", label: "Not filing IDR" },
  { value: "attorney", label: "Contingency attorney" },
  { value: "in_house", label: "In house" },
  { value: "mixed", label: "Mixed" },
];

const MONTHLY_CLAIMS = [
  { value: "fewer_than_5", label: "Fewer than 5" },
  { value: "5_to_15", label: "5 to 15" },
  { value: "15_to_30", label: "15 to 30" },
  { value: "30_or_more", label: "30 or more" },
];

const US_STATES = [
  "Texas",
  "California",
  "New York",
  "New Jersey",
  "Florida",
  "Arizona",
  "Other",
];

type FormVariant = "light" | "dark";

function getFormStyles(variant: FormVariant) {
  const isLight = variant === "light";
  return {
    input: isLight
      ? "w-full h-12 bg-white border border-gray-200 px-4 text-gray-900 placeholder:text-gray-400 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors"
      : "w-full h-12 bg-black/20 border border-white/10 px-4 text-white placeholder:text-white/40 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors",
    select: isLight
      ? "w-full h-12 bg-white border border-gray-200 px-4 text-base text-gray-900 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors"
      : "w-full h-12 bg-black/20 border border-white/10 px-4 text-base text-white font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors",
    textarea: isLight
      ? "w-full bg-white border border-gray-200 px-4 py-3 text-gray-900 placeholder:text-gray-400 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors resize-none"
      : "w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-white/40 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors resize-none",
    label: isLight
      ? "block font-body text-xs text-gray-700 uppercase tracking-widest mb-1.5"
      : "block font-body text-xs text-white/80 uppercase tracking-widest mb-1.5",
    error: isLight ? "text-red-600 text-xs mt-1" : "text-red-400 text-xs mt-1",
    radioLabel: isLight
      ? "font-body text-sm text-gray-700 group-hover:text-gray-900 transition-colors leading-snug"
      : "font-body text-sm text-white/70 group-hover:text-white transition-colors leading-snug",
    successBox: isLight
      ? "bg-gray-50 border border-gray-200 p-8 text-center"
      : "bg-black/20 p-8 text-center",
    successTitle: isLight ? "font-heading text-2xl text-gray-900 mb-2" : "font-heading text-2xl text-white mb-2",
    successBody: isLight
      ? "font-body text-gray-600 text-sm font-light"
      : "font-body text-white/60 text-sm font-light",
    submitFocus: isLight
      ? "focus:outline-none focus-visible:ring-2 focus-visible:ring-kronos-cyan"
      : "focus:outline-none focus-visible:ring-2 focus-visible:ring-white",
    loadingText: isLight ? "text-gray-500 text-sm font-body" : "text-white/50 text-sm font-body",
    legend: isLight ? "font-body text-gray-500 text-xs sr-only" : "font-body text-white/50 text-xs sr-only",
    formError: isLight ? "text-red-600 text-sm font-body" : "text-red-400 text-sm font-body",
  };
}

interface FieldErrors {
  contact_name?: string;
  practice_name?: string;
  email?: string;
  specialty?: string;
  state?: string;
}

function ClaimReviewFormInner({ variant }: { variant: FormVariant }) {
  const styles = getFormStyles(variant);
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
    const email = String(fd.get("email") ?? "").trim();
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Please enter a valid email address";
    if (!String(fd.get("specialty") ?? "").trim()) errors.specialty = "Specialty is required";
    if (!String(fd.get("state") ?? "").trim()) errors.state = "State is required";
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
          phone: fd.get("phone") || undefined,
          email: fd.get("email"),
          specialty: fd.get("specialty"),
          current_handling: fd.get("current_handling") || undefined,
          best_time_to_reach: fd.get("best_time_to_reach") || undefined,
          state: fd.get("state"),
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
      <div className={styles.successBox}>
        <CheckCircle className="w-12 h-12 text-kronos-cyan mx-auto mb-4" aria-hidden="true" />
        <h3 className={styles.successTitle}>Request Received</h3>
        <p className={styles.successBody}>
          You will receive a confirmation email within a few minutes. A Kronos specialist will
          respond within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <p className={styles.legend} id="cr-required-legend">
        Required fields are marked with an asterisk.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cr-name" className={styles.label}>
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
            className={`${styles.input} ${fieldErrors.contact_name ? "border-red-400" : ""} scroll-mt-28`}
          />
          {fieldErrors.contact_name && (
            <p id="cr-name-error" className={styles.error} role="alert">
              {fieldErrors.contact_name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cr-title" className={styles.label}>
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
            className={styles.input}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cr-practice" className={styles.label}>
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
          className={`${styles.input} ${fieldErrors.practice_name ? "border-red-400" : ""} scroll-mt-28`}
        />
        {fieldErrors.practice_name && (
          <p id="cr-practice-error" className={styles.error} role="alert">
            {fieldErrors.practice_name}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cr-phone" className={styles.label}>
            Phone (optional)
          </label>
          <input
            type="tel"
            id="cr-phone"
            name="phone"
            autoComplete="tel"
            inputMode="tel"
            style={{ fontSize: "16px" }}
            className={styles.input}
          />
        </div>
        <div>
          <label htmlFor="cr-email" className={styles.label}>
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
            className={`${styles.input} ${fieldErrors.email ? "border-red-400" : ""} scroll-mt-28`}
          />
          {fieldErrors.email && (
            <p id="cr-email-error" className={styles.error} role="alert">
              {fieldErrors.email}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cr-specialty" className={styles.label}>
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
              className={`${styles.select} ${fieldErrors.specialty ? "border-red-400" : ""} scroll-mt-28`}
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
            <p id="cr-specialty-error" className={styles.error} role="alert">
              {fieldErrors.specialty}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="cr-state" className={styles.label}>
            State <span className="text-kronos-cyan" aria-hidden="true">*</span>
          </label>
          <select
            id="cr-state"
            name="state"
            required
            aria-required="true"
            className={`${styles.select} ${fieldErrors.state ? "border-red-400" : ""}`}
            defaultValue=""
          >
            <option value="" disabled>
              Select state
            </option>
            {US_STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {fieldErrors.state && (
            <p id="cr-state-error" className={styles.error} role="alert">
              {fieldErrors.state}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="cr-volume" className={styles.label}>
            Monthly OON claim volume estimate <span className="text-kronos-cyan" aria-hidden="true">*</span>
          </label>
          <select
            id="cr-volume"
            name="monthly_oon_claims"
            required
            className={styles.select}
            defaultValue=""
          >
            <option value="" disabled>
              Select range
            </option>
            {MONTHLY_CLAIMS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="cr-arrangement" className={styles.label}>
            Current IDR arrangement <span className="text-kronos-cyan" aria-hidden="true">*</span>
          </label>
          <select
            id="cr-arrangement"
            name="current_handling"
            required
            className={styles.select}
            defaultValue=""
          >
            <option value="" disabled>
              Select arrangement
            </option>
            {CURRENT_HANDLING.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="cr-claims" className={styles.label}>
          Describe your current IDR situation (optional)
        </label>
        <textarea
          id="cr-claims"
          name="message"
          rows={4}
          placeholder="Payers, typical CPT codes, dispute volume, or anything that helps us prepare for your review…"
          style={{ fontSize: "16px" }}
          className={styles.textarea}
        />
      </div>

      {error && (
        <p className={styles.formError} role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full min-h-[48px] bg-kronos-cyan text-white font-body font-bold py-3 px-6 uppercase tracking-widest text-xs hover:bg-kronos-green-dark disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-colors ${styles.submitFocus}`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Submitting…
          </>
        ) : (
          <>
            Send my IDR review request
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}

export function ClaimReviewForm({ variant = "light" }: { variant?: FormVariant }) {
  return (
    <Suspense fallback={<p className={getFormStyles(variant).loadingText}>Loading form…</p>}>
      <ClaimReviewFormInner variant={variant} />
    </Suspense>
  );
}
