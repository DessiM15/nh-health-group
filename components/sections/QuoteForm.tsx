"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function QuoteForm() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessName: "",
    employees: "",
    years: "",
    pocName: "",
    pocPhone: "",
    hasInsurance: null as boolean | null,
    carrier: "",
    monthlyPayment: "",
  });

  const [pocOpen, setPocOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      await fetch("https://formspree.io/f/PLACEHOLDER", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          formType: "quote-request",
        }),
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
    <section id="quote-form" className="bg-[#0F3F7A] py-24 px-6 scroll-mt-20">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
        {isSuccess ? (
          <div className="text-center py-8">
            <CheckCircle2
              size={48}
              className="text-[#C9A040] mx-auto mb-4"
            />
            <h2 className="font-display font-extrabold text-[#0F3F7A] text-2xl mb-3">
              {t("quoteForm.successHeading")}
            </h2>
            <p className="font-body text-[#334155] text-sm">
              {t("quoteForm.successMessage")}
            </p>
          </div>
        ) : (
          <>
            <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
              {t("quoteForm.eyebrow")}
            </span>
            <h2 className="font-display font-extrabold text-[#0F3F7A] text-2xl mt-2 mb-2">
              {t("quoteForm.heading")}
            </h2>
            <p className="font-body text-[#334155] text-sm mb-8">
              {t("quoteForm.description")}
            </p>

            <div className="flex flex-col gap-6">
              {/* ─── Section 1: Contact Info ─── */}
              <div>
                <h3 className={sectionHeadingClass}>
                  <span className="w-6 h-6 rounded-full bg-[#C9A040] text-[#0F3F7A] text-xs font-bold flex items-center justify-center">
                    1
                  </span>
                  {t("quoteForm.sectionContact")}
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        {t("quoteForm.labelFirstName")}
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder={t("quoteForm.placeholderFirstName")}
                        value={form.firstName}
                        onChange={(e) => update("firstName", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {t("quoteForm.labelLastName")}
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder={t("quoteForm.placeholderLastName")}
                        value={form.lastName}
                        onChange={(e) => update("lastName", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>
                      {t("quoteForm.labelEmail")}
                    </label>
                    <input
                      type="email"
                      className={inputClass}
                      placeholder={t("quoteForm.placeholderEmail")}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      {t("quoteForm.labelPhone")}
                    </label>
                    <input
                      type="tel"
                      className={inputClass}
                      placeholder={t("quoteForm.placeholderPhone")}
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#CBD5E1]" />

              {/* ─── Section 2: Business Info ─── */}
              <div>
                <h3 className={sectionHeadingClass}>
                  <span className="w-6 h-6 rounded-full bg-[#C9A040] text-[#0F3F7A] text-xs font-bold flex items-center justify-center">
                    2
                  </span>
                  {t("quoteForm.sectionBusiness")}
                </h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className={labelClass}>
                      {t("quoteForm.labelBusinessName")}
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      placeholder={t("quoteForm.placeholderBusinessName")}
                      value={form.businessName}
                      onChange={(e) => update("businessName", e.target.value)}
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>
                        {t("quoteForm.labelEmployees")}
                      </label>
                      <input
                        type="number"
                        min="1"
                        className={inputClass}
                        placeholder={t("quoteForm.placeholderEmployees")}
                        value={form.employees}
                        onChange={(e) => update("employees", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {t("quoteForm.labelYears")}
                      </label>
                      <input
                        type="number"
                        min="0"
                        className={inputClass}
                        placeholder={t("quoteForm.placeholderYears")}
                        value={form.years}
                        onChange={(e) => update("years", e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#CBD5E1]" />

              {/* ─── Section 3: Optional Point of Contact (collapsible) ─── */}
              <div>
                <button
                  type="button"
                  onClick={() => setPocOpen((prev) => !prev)}
                  className={`${sectionHeadingClass} w-full cursor-pointer mb-0`}
                >
                  <span className="w-6 h-6 rounded-full bg-[#C9A040] text-[#0F3F7A] text-xs font-bold flex items-center justify-center">
                    3
                  </span>
                  <span className="flex-1 text-left">
                    {t("quoteForm.sectionPOC")}
                  </span>
                  {pocOpen ? (
                    <ChevronUp size={18} className="text-[#64748B]" />
                  ) : (
                    <ChevronDown size={18} className="text-[#64748B]" />
                  )}
                </button>
                {pocOpen && (
                  <div className="mt-4 flex flex-col gap-4">
                    <p className="text-xs text-[#64748B]">
                      {t("quoteForm.sectionPOCDescription")}
                    </p>
                    <div>
                      <label className={labelClass}>
                        {t("quoteForm.labelPOCName")}
                      </label>
                      <input
                        type="text"
                        className={inputClass}
                        placeholder={t("quoteForm.placeholderPOCName")}
                        value={form.pocName}
                        onChange={(e) => update("pocName", e.target.value)}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {t("quoteForm.labelPOCPhone")}
                      </label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder={t("quoteForm.placeholderPOCPhone")}
                        value={form.pocPhone}
                        onChange={(e) => update("pocPhone", e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Divider */}
              <div className="h-px bg-[#CBD5E1]" />

              {/* ─── Section 4: Current Insurance ─── */}
              <div>
                <h3 className={sectionHeadingClass}>
                  <span className="w-6 h-6 rounded-full bg-[#C9A040] text-[#0F3F7A] text-xs font-bold flex items-center justify-center">
                    4
                  </span>
                  {t("quoteForm.sectionInsurance")}
                </h3>
                <div className="flex flex-col gap-4">
                  <div>
                    <label className={labelClass}>
                      {t("quoteForm.labelHasInsurance")}
                    </label>
                    <div className="flex gap-3 mt-1">
                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({ ...prev, hasInsurance: true }))
                        }
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold border transition-colors duration-200 ${
                          form.hasInsurance === true
                            ? "bg-[#1A5FAF] text-white border-[#1A5FAF]"
                            : "bg-white text-[#334155] border-[#CBD5E1] hover:border-[#1A5FAF]"
                        }`}
                      >
                        {t("quoteForm.yes")}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setForm((prev) => ({
                            ...prev,
                            hasInsurance: false,
                            carrier: "",
                            monthlyPayment: "",
                          }))
                        }
                        className={`flex-1 py-3 rounded-lg text-sm font-semibold border transition-colors duration-200 ${
                          form.hasInsurance === false
                            ? "bg-[#1A5FAF] text-white border-[#1A5FAF]"
                            : "bg-white text-[#334155] border-[#CBD5E1] hover:border-[#1A5FAF]"
                        }`}
                      >
                        {t("quoteForm.no")}
                      </button>
                    </div>
                  </div>

                  {form.hasInsurance === true && (
                    <>
                      <div>
                        <label className={labelClass}>
                          {t("quoteForm.labelCarrier")}
                        </label>
                        <input
                          type="text"
                          className={inputClass}
                          placeholder={t("quoteForm.placeholderCarrier")}
                          value={form.carrier}
                          onChange={(e) => update("carrier", e.target.value)}
                        />
                      </div>
                      <div>
                        <label className={labelClass}>
                          {t("quoteForm.labelMonthlyPayment")}
                        </label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B] text-sm">
                            $
                          </span>
                          <input
                            type="text"
                            inputMode="numeric"
                            className={`${inputClass} pl-7`}
                            placeholder={t(
                              "quoteForm.placeholderMonthlyPayment"
                            )}
                            value={form.monthlyPayment}
                            onChange={(e) =>
                              update(
                                "monthlyPayment",
                                e.target.value.replace(/[^0-9,]/g, "")
                              )
                            }
                          />
                        </div>
                      </div>
                    </>
                  )}

                  {form.hasInsurance === false && (
                    <div className="bg-[#F0F9FF] border border-[#BAE6FD] rounded-lg px-4 py-3 text-sm text-[#0369A1]">
                      {t("quoteForm.noInsuranceMessage")}
                    </div>
                  )}
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
                    {t("quoteForm.btnLoading")}
                  </>
                ) : (
                  t("quoteForm.btnSubmit")
                )}
              </button>

              {/* Fine print */}
              <p className="text-xs text-[#64748B] text-center mt-1">
                {t("quoteForm.finePrint")} New Horizons Benefits Group | (469)
                831-2672 | robert@newhorizonsbenefits.com
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
