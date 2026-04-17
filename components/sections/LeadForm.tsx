"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const coverageOptions = [
  "I currently offer group coverage",
  "I'm looking to offer group coverage for the first time",
  "I want to compare my current group plan",
  "I need coverage for myself as a business owner",
  "I have Medicare-eligible employees",
  "Just exploring my options",
];

export default function LeadForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coverage: "",
    zip: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsLoading(false);
    }
  };

  const inputClass =
    "w-full border border-[#CBD5E1] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1A5FAF]/30 focus:border-[#1A5FAF] transition";
  const labelClass =
    "text-xs font-semibold uppercase tracking-wide text-[#0F3F7A] mb-1 block";

  return (
    <section id="lead-form" className="bg-[#0F3F7A] py-24 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle2
              size={48}
              className="text-[#C9A040] mx-auto mb-4"
            />
            <h2 className="font-display font-extrabold text-[#0F3F7A] text-2xl mb-3">
              You&apos;re All Set!
            </h2>
            <p className="font-body text-[#334155] text-sm">
              Rigo will reach out within 1 business day with your personalized
              coverage options.
            </p>
          </div>
        ) : (
          <>
            <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
              Let&apos;s Find Your Savings
            </span>
            <h2 className="font-display font-extrabold text-[#0F3F7A] text-2xl mt-2 mb-2">
              Get Your Free Health Insurance Review
            </h2>
            <p className="font-body text-[#334155] text-sm mb-6">
              Tell us about your situation. Rigo will reach out within 1
              business day with real options.
            </p>

            <div className="flex flex-col gap-4">
              {/* First + Last Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>First Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={(e) => update("firstName", e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>Last Name</label>
                  <input
                    type="text"
                    className={inputClass}
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => update("lastName", e.target.value)}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelClass}>Email Address</label>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="jane.doe@company.com"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                />
              </div>

              {/* Phone */}
              <div>
                <label className={labelClass}>Phone Number</label>
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="(555) 123-4567"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>

              {/* Coverage Situation */}
              <div>
                <label className={labelClass}>
                  Current Coverage Situation
                </label>
                <select
                  className={`${inputClass} ${
                    !form.coverage ? "text-gray-400" : "text-[#334155]"
                  }`}
                  value={form.coverage}
                  onChange={(e) => update("coverage", e.target.value)}
                >
                  <option value="" disabled>
                    Select your situation...
                  </option>
                  {coverageOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Zip Code */}
              <div>
                <label className={labelClass}>Zip Code</label>
                <input
                  type="text"
                  className={inputClass}
                  placeholder="75078"
                  value={form.zip}
                  onChange={(e) => update("zip", e.target.value)}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-[#C9A040] hover:bg-[#A07C20] text-[#0F3F7A] font-bold text-lg py-4 rounded-xl transition-colors duration-200 mt-6 disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                      />
                    </svg>
                    Checking your options...
                  </>
                ) : (
                  "Get My Free Savings Review →"
                )}
              </button>

              {/* Fine print */}
              <p className="text-xs text-[#64748B] text-center mt-3">
                Free review. No obligation. No spam. New Horizons Benefits
                Group | (469) 831-2672 | robert@newhorizonsbenefits.com
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
