"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

const inputClass =
  "w-full h-12 bg-black/20 border border-white/10 px-4 text-white placeholder:text-white/55 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors";
const selectClass =
  "w-full h-12 bg-kronos-bg border border-white/10 px-4 text-white font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors appearance-none";
const labelClass = "block font-body text-xs text-white/70 uppercase tracking-widest mb-1.5";
const errorClass = "text-red-400 text-xs mt-1";

const SPECIALTIES = [
  "Gastroenterology",
  "General surgery",
  "Orthopedic surgery",
  "Pain management",
  "ENT",
  "Ophthalmology",
  "Other procedural specialty",
];

const FACILITY_TYPES = [
  "Ambulatory Surgery Center (ASC)",
  "Hospital outpatient",
  "Both",
  "Office-based",
];

const FACILITY_NETWORK_STATUS = [
  { value: "in_network_facility", label: "Facility is in-network, I am OON" },
  { value: "oon_both", label: "Facility and I are both OON" },
  { value: "not_sure", label: "Not sure" },
];

const MONTHLY_VOLUMES = [
  "Under 20",
  "20–50",
  "51–150",
  "151–400",
  "Over 400",
];

interface FieldErrors {
  contact_name?: string;
  practice_name?: string;
  phone?: string;
  email?: string;
  specialty?: string;
}

export function ASCProviderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(fd: FormData): FieldErrors {
    const errors: FieldErrors = {};
    if (!String(fd.get("contact_name") ?? "").trim()) errors.contact_name = "Name is required";
    if (!String(fd.get("practice_name") ?? "").trim()) errors.practice_name = "Practice name is required";
    if (!String(fd.get("phone") ?? "").trim()) errors.phone = "Phone number is required";
    const email = String(fd.get("email") ?? "").trim();
    if (!email) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Please enter a valid email address";
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
          form_type: "asc_provider",
          contact_name: fd.get("contact_name"),
          title: fd.get("title") || undefined,
          practice_name: fd.get("practice_name"),
          phone: fd.get("phone"),
          email: fd.get("email"),
          specialty: fd.get("specialty"),
          facility_type: fd.get("facility_type") || undefined,
          facility_network_status: fd.get("facility_network_status") || undefined,
          monthly_case_volume: fd.get("monthly_case_volume") || undefined,
          message: fd.get("message") || undefined,
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
        <h3 className="font-heading text-2xl text-white mb-2">Inquiry Received</h3>
        <p className="font-body text-white/70 text-sm font-light">
          Thank you. We will review your facility details and reach out shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="asc-name" className={labelClass}>Your name <span className="text-kronos-cyan">*</span></label>
          <input
            type="text" id="asc-name" name="contact_name" required
            autoComplete="name" inputMode="text" style={{ fontSize: "16px" }}
            aria-invalid={!!fieldErrors.contact_name}
            className={`${inputClass} ${fieldErrors.contact_name ? "border-red-400" : ""}`}
          />
          {fieldErrors.contact_name && <p className={errorClass} role="alert">{fieldErrors.contact_name}</p>}
        </div>
        <div>
          <label htmlFor="asc-title" className={labelClass}>Title</label>
          <input
            type="text" id="asc-title" name="title"
            placeholder="Physician, admin, biller…"
            autoComplete="organization-title" inputMode="text" style={{ fontSize: "16px" }}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="asc-practice" className={labelClass}>Practice name <span className="text-kronos-cyan">*</span></label>
        <input
          type="text" id="asc-practice" name="practice_name" required
          autoComplete="organization" inputMode="text" style={{ fontSize: "16px" }}
          aria-invalid={!!fieldErrors.practice_name}
          className={`${inputClass} ${fieldErrors.practice_name ? "border-red-400" : ""}`}
        />
        {fieldErrors.practice_name && <p className={errorClass} role="alert">{fieldErrors.practice_name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="asc-phone" className={labelClass}>Phone <span className="text-kronos-cyan">*</span></label>
          <input
            type="tel" id="asc-phone" name="phone" required
            autoComplete="tel" inputMode="tel" style={{ fontSize: "16px" }}
            aria-invalid={!!fieldErrors.phone}
            className={`${inputClass} ${fieldErrors.phone ? "border-red-400" : ""}`}
          />
          {fieldErrors.phone && <p className={errorClass} role="alert">{fieldErrors.phone}</p>}
        </div>
        <div>
          <label htmlFor="asc-email" className={labelClass}>Work email <span className="text-kronos-cyan">*</span></label>
          <input
            type="email" id="asc-email" name="email" required
            autoComplete="email" inputMode="email" style={{ fontSize: "16px" }}
            aria-invalid={!!fieldErrors.email}
            className={`${inputClass} ${fieldErrors.email ? "border-red-400" : ""}`}
          />
          {fieldErrors.email && <p className={errorClass} role="alert">{fieldErrors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="asc-specialty" className={labelClass}>Specialty <span className="text-kronos-cyan">*</span></label>
          <div className="relative">
            <select
              id="asc-specialty" name="specialty" required
              aria-invalid={!!fieldErrors.specialty}
              className={`${selectClass} ${fieldErrors.specialty ? "border-red-400" : ""}`}
              defaultValue=""
            >
              <option value="" disabled>Select specialty</option>
              {SPECIALTIES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-white/55" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
          {fieldErrors.specialty && <p className={errorClass} role="alert">{fieldErrors.specialty}</p>}
        </div>
        <div>
          <label htmlFor="asc-facility-type" className={labelClass}>Facility type</label>
          <div className="relative">
            <select id="asc-facility-type" name="facility_type" className={selectClass} defaultValue="">
              <option value="">Select type</option>
              {FACILITY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
              <svg className="w-4 h-4 text-white/55" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className={labelClass}>Your network situation</p>
        <div className="space-y-2.5 mt-1">
          {FACILITY_NETWORK_STATUS.map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer group">
              <input type="radio" name="facility_network_status" value={opt.value} className="accent-[#00E5BE]" />
              <span className="font-body text-sm text-white/70 group-hover:text-white transition-colors">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="asc-volume" className={labelClass}>Monthly case volume</label>
        <div className="relative">
          <select id="asc-volume" name="monthly_case_volume" className={selectClass} defaultValue="">
            <option value="">Select range</option>
            {MONTHLY_VOLUMES.map((v) => <option key={v} value={v}>{v}</option>)}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            <svg className="w-4 h-4 text-white/55" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="asc-message" className={labelClass}>Message (optional)</label>
        <textarea
          id="asc-message" name="message" rows={3}
          style={{ fontSize: "16px" }}
          className="w-full bg-black/20 border border-white/10 px-4 py-3 text-white placeholder:text-white/55 font-body font-light focus:outline-none focus:border-kronos-cyan transition-colors resize-none"
        />
      </div>

      {error && <p className="text-red-400 text-sm font-body" role="alert">{error}</p>}

      <button
        type="submit" disabled={isSubmitting}
        className="w-full min-h-[48px] bg-kronos-cyan text-kronos-bg font-body font-bold py-3 px-6 uppercase tracking-widest text-xs hover:bg-kronos-cyan/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        {isSubmitting ? (
          <><Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />Submitting…</>
        ) : (
          <>Request a Revenue Review<ArrowRight className="w-3 h-3" aria-hidden="true" /></>
        )}
      </button>
    </form>
  );
}
