"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle, Loader2 } from "lucide-react";

interface FieldErrors {
  name?: string;
  email?: string;
  phone?: string;
  organization?: string;
}

export function SydraWaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(formData: FormData): FieldErrors {
    const errors: FieldErrors = {};
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const organization = formData.get("organization") as string;

    if (!name?.trim()) errors.name = "Name is required";
    if (!email?.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!phone?.trim()) errors.phone = "Phone number is required";
    if (!organization?.trim()) errors.organization = "Practice or organization name is required";

    return errors;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const errors = validate(formData);
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          organization: formData.get("organization"),
          message: formData.get("message") || "",
          source: "sydra_waitlist",
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSubmitted(true);
      form.reset();
    } catch {
      setError("Something went wrong. Please call us at (914) 705 6830.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSubmitted) {
    return (
      <div className="bg-black/20 p-8 text-center">
        <CheckCircle className="w-12 h-12 text-white mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-heading text-2xl text-white mb-2">You&apos;re on the list</h3>
        <p className="font-body text-white/70 text-sm font-light">
          We will be in touch with early access details before Sydra launches.
        </p>
      </div>
    );
  }

  const inputClass = "w-full h-12 bg-black/20 border border-white/20 px-4 text-white placeholder:text-white/40 font-body font-light focus:outline-none focus:border-white/60 transition-colors";
  const errorClass = "text-white/80 text-xs mt-1";
  const labelClass = "block font-body text-xs text-white/70 font-light mb-1";

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="waitlist-name" className={labelClass}>
            Full Name
          </label>
          <input
            type="text"
            id="waitlist-name"
            name="name"
            placeholder="Full Name"
            required
            autoComplete="name"
            inputMode="text"
            style={{ fontSize: "16px" }}
            aria-invalid={!!fieldErrors.name}
            aria-describedby={fieldErrors.name ? "wl-name-error" : undefined}
            className={`${inputClass} ${fieldErrors.name ? "border-red-400" : ""}`}
          />
          {fieldErrors.name && (
            <p id="wl-name-error" role="alert" className={errorClass}>{fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label htmlFor="waitlist-phone" className={labelClass}>
            Phone Number
          </label>
          <input
            type="tel"
            id="waitlist-phone"
            name="phone"
            placeholder="Phone Number"
            required
            autoComplete="tel"
            inputMode="tel"
            style={{ fontSize: "16px" }}
            aria-invalid={!!fieldErrors.phone}
            aria-describedby={fieldErrors.phone ? "wl-phone-error" : undefined}
            className={`${inputClass} ${fieldErrors.phone ? "border-red-400" : ""}`}
          />
          {fieldErrors.phone && (
            <p id="wl-phone-error" role="alert" className={errorClass}>{fieldErrors.phone}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="waitlist-email" className={labelClass}>
          Work Email
        </label>
        <input
          type="email"
          id="waitlist-email"
          name="email"
          placeholder="Work Email"
          required
          autoComplete="email"
          inputMode="email"
          style={{ fontSize: "16px" }}
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? "wl-email-error" : undefined}
          className={`${inputClass} ${fieldErrors.email ? "border-red-400" : ""}`}
        />
        {fieldErrors.email && (
          <p id="wl-email-error" role="alert" className={errorClass}>{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="waitlist-org" className={labelClass}>
          Practice or Organization Name
        </label>
        <input
          type="text"
          id="waitlist-org"
          name="organization"
          placeholder="Practice or Organization Name"
          required
          autoComplete="organization"
          inputMode="text"
          style={{ fontSize: "16px" }}
          aria-invalid={!!fieldErrors.organization}
          aria-describedby={fieldErrors.organization ? "wl-org-error" : undefined}
          className={`${inputClass} ${fieldErrors.organization ? "border-red-400" : ""}`}
        />
        {fieldErrors.organization && (
          <p id="wl-org-error" role="alert" className={errorClass}>{fieldErrors.organization}</p>
        )}
      </div>

      <div>
        <label htmlFor="waitlist-message" className={labelClass}>
          Anything you want us to know? (optional)
        </label>
        <textarea
          id="waitlist-message"
          name="message"
          placeholder="e.g. specialty, average monthly IDR volume, current workflow"
          rows={3}
          style={{ fontSize: "16px" }}
          className="w-full bg-black/20 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 font-body font-light focus:outline-none focus:border-white/60 transition-colors resize-none"
        />
      </div>

      {error && (
        <p role="alert" className="text-white/80 text-sm font-body">{error}</p>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] bg-kronos-bg text-white py-3 px-8 uppercase tracking-widest text-xs font-light hover:bg-kronos-bg/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-kronos-green"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
            Submitting...
          </>
        ) : (
          <>
            Join the Waitlist
            <ArrowRight className="w-3 h-3" aria-hidden="true" />
          </>
        )}
      </button>
    </form>
  );
}
