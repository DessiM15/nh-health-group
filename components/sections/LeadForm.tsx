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

interface FamilyMember {
  age: string;
  gender: string;
}

export default function LeadForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zip: "",
    totalPeople: "",
    needingInsurance: "",
    annualIncome: "",
    householdIncome: "",
    coverage: "",
  });
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));

    if (field === "needingInsurance") {
      const count = parseInt(value, 10);
      if (!isNaN(count) && count > 0 && count <= 20) {
        setFamilyMembers((prev) => {
          const next: FamilyMember[] = [];
          for (let i = 0; i < count; i++) {
            next.push(prev[i] ?? { age: "", gender: "" });
          }
          return next;
        });
      } else {
        setFamilyMembers([]);
      }
    }
  };

  const updateMember = (index: number, field: keyof FamilyMember, value: string) => {
    setFamilyMembers((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, familyMembers }),
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
  const sectionHeadingClass =
    "font-display font-bold text-[#0F3F7A] text-base mb-4 flex items-center gap-2";

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
              Robert will reach out within 1 business day with your personalized
              coverage options.
            </p>
          </div>
        ) : (
          <>
            <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
              Let&apos;s Find Your Savings
            </span>
            <h2 className="font-display font-extrabold text-[#0F3F7A] text-2xl mt-2 mb-2">
              Get Your Free Health Insurance Quote
            </h2>
            <p className="font-body text-[#334155] text-sm mb-8">
              Tell us about your household. Robert will reach out within 1
              business day with real options.
            </p>

            <div className="flex flex-col gap-6">
              {/* ─── Section 1: Contact Info ─── */}
              <div>
                <h3 className={sectionHeadingClass}>
                  <span className="w-6 h-6 rounded-full bg-[#C9A040] text-[#0F3F7A] text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  Contact Information
                </h3>
                <div className="flex flex-col gap-4">
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
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#CBD5E1]" />

              {/* ─── Section 2: Household Info ─── */}
              <div>
                <h3 className={sectionHeadingClass}>
                  <span className="w-6 h-6 rounded-full bg-[#C9A040] text-[#0F3F7A] text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  Household Information
                </h3>
                <div className="flex flex-col gap-4">
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        Total People in Household
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        className={inputClass}
                        placeholder="4"
                        value={form.totalPeople}
                        onChange={(e) => update("totalPeople", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        Number Needing Insurance
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        className={inputClass}
                        placeholder="3"
                        value={form.needingInsurance}
                        onChange={(e) =>
                          update("needingInsurance", e.target.value)
                        }
                      />
                      <p className="text-xs text-[#64748B] mt-1">
                        Minus 1 if one person is already on an employer plan
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Annual Income</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] text-sm">
                          $
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          className={`${inputClass} pl-7`}
                          placeholder="55,000"
                          value={form.annualIncome}
                          onChange={(e) =>
                            update(
                              "annualIncome",
                              e.target.value.replace(/[^0-9,]/g, "")
                            )
                          }
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelClass}>
                        Annual Household Income
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] text-sm">
                          $
                        </span>
                        <input
                          type="text"
                          inputMode="numeric"
                          className={`${inputClass} pl-7`}
                          placeholder="85,000"
                          value={form.householdIncome}
                          onChange={(e) =>
                            update(
                              "householdIncome",
                              e.target.value.replace(/[^0-9,]/g, "")
                            )
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ─── Section 3: Family Members (dynamic) ─── */}
              {familyMembers.length > 0 && (
                <>
                  <div className="h-px bg-[#CBD5E1]" />
                  <div>
                    <h3 className={sectionHeadingClass}>
                      <span className="w-6 h-6 rounded-full bg-[#C9A040] text-[#0F3F7A] text-xs font-bold flex items-center justify-center">
                        3
                      </span>
                      Family Members Needing Coverage
                    </h3>
                    <div className="flex flex-col gap-3">
                      {familyMembers.map((member, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[1fr_120px_120px] gap-3 items-end"
                        >
                          <div>
                            <label className={labelClass}>
                              Person {i + 1}
                            </label>
                            <div className="text-xs text-[#64748B] -mt-0.5 mb-1">
                              Age &amp; Gender
                            </div>
                          </div>
                          <div>
                            <input
                              type="number"
                              min="0"
                              max="120"
                              className={inputClass}
                              placeholder="Age"
                              value={member.age}
                              onChange={(e) =>
                                updateMember(i, "age", e.target.value)
                              }
                            />
                          </div>
                          <div>
                            <select
                              className={`${inputClass} ${
                                !member.gender
                                  ? "text-gray-400"
                                  : "text-[#334155]"
                              }`}
                              value={member.gender}
                              onChange={(e) =>
                                updateMember(i, "gender", e.target.value)
                              }
                            >
                              <option value="" disabled>
                                Gender
                              </option>
                              <option value="M">M</option>
                              <option value="F">F</option>
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Divider */}
              <div className="h-px bg-[#CBD5E1]" />

              {/* ─── Section 4: Coverage Situation + Submit ─── */}
              <div>
                <h3 className={sectionHeadingClass}>
                  <span className="w-6 h-6 rounded-full bg-[#C9A040] text-[#0F3F7A] text-xs font-bold flex items-center justify-center">
                    {familyMembers.length > 0 ? "4" : "3"}
                  </span>
                  Coverage Details
                </h3>
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
              </div>

              {/* Submit */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-[#C9A040] hover:bg-[#A07C20] text-[#0F3F7A] font-bold text-lg py-4 rounded-xl transition-colors duration-200 mt-2 disabled:opacity-70 flex items-center justify-center gap-2"
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
                  "Get My Free Savings Review \u2192"
                )}
              </button>

              {/* Fine print */}
              <p className="text-xs text-[#64748B] text-center mt-1">
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
