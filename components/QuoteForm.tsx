"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
import { business } from "@/lib/business-config";
import { locations } from "@/lib/locations";
import { services } from "@/lib/services";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  serviceRequested: string;
  city: string;
  propertyType: string;
  projectDetails: string;
  company: string;
};

const initialState: FormState = {
  fullName: "",
  phone: "",
  email: "",
  serviceRequested: services[0]?.name ?? "Window Cleaning",
  city: "Vancouver, WA",
  propertyType: "Residential",
  projectDetails: "",
  company: "",
};

export function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      next.fullName = "Please enter your full name.";
    }
    if (!/^[+()\d\s.-]{10,}$/.test(form.phone.trim())) {
      next.phone = "Enter a valid phone number.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!form.serviceRequested) next.serviceRequested = "Select a service.";
    if (!form.city) next.city = "Select a city.";
    if (!form.propertyType) next.propertyType = "Select a property type.";
    if (!form.projectDetails.trim() || form.projectDetails.trim().length < 10) {
      next.projectDetails = "Please share a few project details.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          formId: business.quoteFormId,
        }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        message?: string;
        delivery?: string;
      };

      if (!response.ok || !data.ok) {
        throw new Error(data.message || "Unable to submit your request.");
      }

      setStatus("success");
      setMessage(
        data.delivery === "logged"
          ? "Thanks — your request was received. Email delivery is not fully configured yet, so please also call or email if you need a faster response."
          : "Thanks — your free quote request was submitted successfully. We will follow up soon.",
      );
      setForm(initialState);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or call us.",
      );
    }
  }

  const fieldClass =
    "w-full rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/15";

  return (
    <form
      onSubmit={onSubmit}
      className="relative space-y-4 rounded-[1.75rem] border border-line bg-white p-5 shadow-[0_18px_50px_rgba(16,20,18,0.08)] sm:p-7"
      noValidate
    >
      <div>
        <h2 className="text-2xl font-bold text-ink">Request Your Free Quote</h2>
        <p className="mt-2 text-sm text-muted">
          Share a few details and we will follow up about your exterior cleaning project.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 text-sm font-semibold text-ink">
          Full Name
          <input
            className={fieldClass}
            name="fullName"
            autoComplete="name"
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName ? (
            <span className="block font-medium text-red-700">{errors.fullName}</span>
          ) : null}
        </label>

        <label className="block space-y-1.5 text-sm font-semibold text-ink">
          Phone Number
          <input
            className={fieldClass}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? (
            <span className="block font-medium text-red-700">{errors.phone}</span>
          ) : null}
        </label>
      </div>

      <label className="block space-y-1.5 text-sm font-semibold text-ink">
        Email
        <input
          className={fieldClass}
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email ? (
          <span className="block font-medium text-red-700">{errors.email}</span>
        ) : null}
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5 text-sm font-semibold text-ink">
          Service Requested
          <select
            className={fieldClass}
            name="serviceRequested"
            value={form.serviceRequested}
            onChange={(e) => update("serviceRequested", e.target.value)}
          >
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
            <option value="Multiple Services">Multiple Services</option>
          </select>
        </label>

        <label className="block space-y-1.5 text-sm font-semibold text-ink">
          City
          <select
            className={fieldClass}
            name="city"
            value={form.city}
            onChange={(e) => update("city", e.target.value)}
          >
            {locations.map((location) => (
              <option key={location.slug} value={location.name}>
                {location.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </label>
      </div>

      <label className="block space-y-1.5 text-sm font-semibold text-ink">
        Property Type
        <select
          className={fieldClass}
          name="propertyType"
          value={form.propertyType}
          onChange={(e) => update("propertyType", e.target.value)}
        >
          <option value="Residential">Residential</option>
          <option value="Commercial">Commercial</option>
        </select>
      </label>

      <label className="block space-y-1.5 text-sm font-semibold text-ink">
        Project Details
        <textarea
          className={`${fieldClass} min-h-28 resize-y`}
          name="projectDetails"
          value={form.projectDetails}
          onChange={(e) => update("projectDetails", e.target.value)}
          aria-invalid={Boolean(errors.projectDetails)}
          placeholder="Tell us about the property, number of windows, surfaces to clean, or timing preferences."
        />
        {errors.projectDetails ? (
          <span className="block font-medium text-red-700">{errors.projectDetails}</span>
        ) : null}
      </label>

      {/* Honeypot */}
      <input
        type="text"
        name="company"
        value={form.company}
        onChange={(e) => update("company", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        hidden
      />

      <button
        type="submit"
        className="btn-primary w-full justify-center disabled:cursor-not-allowed disabled:opacity-70"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Submit Free Quote Request"
        )}
      </button>

      <div aria-live="polite" className="min-h-6 text-sm">
        {status === "success" ? (
          <p className="font-medium text-forest">{message}</p>
        ) : null}
        {status === "error" ? (
          <p className="font-medium text-red-700">{message}</p>
        ) : null}
      </div>
    </form>
  );
}
