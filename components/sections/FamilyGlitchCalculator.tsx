"use client";

import { useState } from "react";
import { Calculator, DollarSign, Users, ChevronDown, CheckCircle, XCircle, Info } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

const PAY_FREQ_KEYS = [
  { key: "calculator.freqWeekly", multiplier: 52 },
  { key: "calculator.freqBiWeekly", multiplier: 26 },
  { key: "calculator.freqTwiceMonthly", multiplier: 24 },
  { key: "calculator.freqMonthly", multiplier: 12 },
];

const AFFORDABILITY_THRESHOLD = 0.0996; // 9.96% for 2026

interface Results {
  employeeAnnualPremium: number;
  familyAnnualPremium: number;
  affordabilityLimit: number;
  employeeEligible: boolean;
  familyEligible: boolean;
}

export default function FamilyGlitchCalculator() {
  const { t } = useTranslation();
  const [income, setIncome] = useState("");
  const [payFrequency, setPayFrequency] = useState("");
  const [employeePremium, setEmployeePremium] = useState("");
  const [familyPremium, setFamilyPremium] = useState("");
  const [results, setResults] = useState<Results | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  const canCalculate =
    income && payFrequency && employeePremium && familyPremium;

  const handleCalculate = () => {
    if (!canCalculate) return;

    const annualIncome = parseFloat(income.replace(/,/g, ""));
    const freq = PAY_FREQ_KEYS.find((f) => f.key === payFrequency);
    if (!freq || isNaN(annualIncome)) return;

    const empPremium = parseFloat(employeePremium.replace(/,/g, ""));
    const famPremium = parseFloat(familyPremium.replace(/,/g, ""));
    if (isNaN(empPremium) || isNaN(famPremium)) return;

    const employeeAnnualPremium = empPremium * freq.multiplier;
    const familyAnnualPremium = famPremium * freq.multiplier;
    const affordabilityLimit = annualIncome * AFFORDABILITY_THRESHOLD;

    setResults({
      employeeAnnualPremium,
      familyAnnualPremium,
      affordabilityLimit,
      employeeEligible: employeeAnnualPremium > affordabilityLimit,
      familyEligible: familyAnnualPremium > affordabilityLimit,
    });
  };

  const handleReset = () => {
    setIncome("");
    setPayFrequency("");
    setEmployeePremium("");
    setFamilyPremium("");
    setResults(null);
  };

  const formatCurrency = (n: number) =>
    n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

  return (
    <section id="calculator" className="bg-[#EBF3FC] py-20 px-6 scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          {t("calculator.eyebrow")}
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-3">
          {t("calculator.heading")}
        </h2>
        <p className="font-display font-medium text-[#1A5FAF] text-lg mb-4">
          {t("calculator.subheading")}
        </p>
        <p className="font-body text-[#334155] text-[0.9375rem] max-w-2xl mx-auto">
          {t("calculator.description")}
        </p>
      </div>

      {/* Calculator Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-[0_2px_20px_rgba(26,95,175,0.08)] overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#0F3F7A] to-[#1A5FAF] px-6 py-5 flex items-center gap-3">
            <Calculator size={24} className="text-[#C9A040]" />
            <h3 className="font-display font-bold text-white text-lg">
              {t("calculator.cardTitle")}
            </h3>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Household Income */}
            <div>
              <label className="block font-display font-semibold text-[#0F3F7A] text-sm mb-2">
                {t("calculator.labelSalary")}
              </label>
              <div className="relative">
                <DollarSign
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder={t("calculator.placeholderSalary")}
                  value={income}
                  onChange={(e) => setIncome(e.target.value.replace(/[^0-9,]/g, ""))}
                  className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#CBD5E1] text-[#334155] text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#1A5FAF] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Pay Frequency */}
            <div>
              <label className="block font-display font-semibold text-[#0F3F7A] text-sm mb-2">
                {t("calculator.labelPayFreq")}
              </label>
              <div className="relative">
                <select
                  value={payFrequency}
                  onChange={(e) => setPayFrequency(e.target.value)}
                  className="w-full appearance-none px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm font-body bg-white text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#1A5FAF] focus:border-transparent transition-all"
                >
                  <option value="" disabled>
                    {t("calculator.placeholderPayFreq")}
                  </option>
                  {PAY_FREQ_KEYS.map(({ key }) => (
                    <option key={key} value={key}>
                      {t(key)}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={18}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#64748B] pointer-events-none"
                />
              </div>
            </div>

            {/* Premiums — side by side on desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Employee-Only Premium */}
              <div>
                <label className="block font-display font-semibold text-[#0F3F7A] text-sm mb-2">
                  {t("calculator.labelEmployeePremium")}
                  <span className="block font-normal text-[#64748B] text-xs mt-0.5">
                    {t("calculator.labelEmployeePremiumHelper")}
                  </span>
                </label>
                <div className="relative">
                  <DollarSign
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder={t("calculator.placeholderEmployeePremium")}
                    value={employeePremium}
                    onChange={(e) =>
                      setEmployeePremium(e.target.value.replace(/[^0-9.,]/g, ""))
                    }
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#CBD5E1] text-[#334155] text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#1A5FAF] focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Family Premium */}
              <div>
                <label className="block font-display font-semibold text-[#0F3F7A] text-sm mb-2">
                  {t("calculator.labelFamilyPremium")}
                  <span className="block font-normal text-[#64748B] text-xs mt-0.5">
                    {t("calculator.labelFamilyPremiumHelper")}
                  </span>
                </label>
                <div className="relative">
                  <DollarSign
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]"
                  />
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder={t("calculator.placeholderFamilyPremium")}
                    value={familyPremium}
                    onChange={(e) =>
                      setFamilyPremium(e.target.value.replace(/[^0-9.,]/g, ""))
                    }
                    className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#CBD5E1] text-[#334155] text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#1A5FAF] focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Info Toggle */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="flex items-center gap-2 text-[#1A5FAF] text-sm font-display font-medium hover:text-[#C9A040] transition-colors"
            >
              <Info size={16} />
              {t("calculator.infoToggle")}
            </button>
            {showInfo && (
              <div className="bg-[#EBF3FC] rounded-xl p-4 text-sm text-[#334155] font-body leading-relaxed">
                {t("calculator.infoPanel")}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={handleCalculate}
                disabled={!canCalculate}
                className={`flex-1 font-display font-bold text-sm py-3.5 rounded-xl transition-all duration-200 ${
                  canCalculate
                    ? "bg-[#C9A040] text-[#0F3F7A] hover:bg-[#A07C20] shadow-md hover:shadow-lg"
                    : "bg-[#CBD5E1] text-[#64748B] cursor-not-allowed"
                }`}
              >
                {t("calculator.btnCalculate")}
              </button>
              {results && (
                <button
                  onClick={handleReset}
                  className="px-5 py-3.5 rounded-xl border border-[#CBD5E1] text-[#64748B] text-sm font-display font-medium hover:border-[#1A5FAF] hover:text-[#1A5FAF] transition-colors"
                >
                  {t("calculator.btnReset")}
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="border-t border-[#CBD5E1] p-6 md:p-8 space-y-4 bg-[#F8FAFD]">
              <h4 className="font-display font-bold text-[#0F3F7A] text-base mb-4">
                {t("calculator.resultsHeading")}
              </h4>

              {/* Employee Result */}
              <div
                className={`flex items-start gap-3 p-4 rounded-xl border ${
                  results.employeeEligible
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                {results.employeeEligible ? (
                  <CheckCircle size={22} className="text-emerald-600 mt-0.5 shrink-0" />
                ) : (
                  <XCircle size={22} className="text-red-500 mt-0.5 shrink-0" />
                )}
                <div>
                  <p
                    className={`font-display font-bold text-sm ${
                      results.employeeEligible ? "text-emerald-800" : "text-red-800"
                    }`}
                  >
                    <Users size={14} className="inline mr-1 -mt-0.5" />
                    {t("calculator.employeeCoverage")}
                  </p>
                  <p className="text-sm text-[#334155] mt-1 font-body leading-relaxed">
                    {t("calculator.employeePremiumText")}{" "}
                    <strong>{formatCurrency(results.employeeAnnualPremium)}</strong>.{" "}
                    {t("calculator.affordabilityText")}{" "}
                    <strong>{formatCurrency(results.affordabilityLimit)}</strong>.
                  </p>
                  <p
                    className={`text-sm font-display font-semibold mt-2 ${
                      results.employeeEligible ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {results.employeeEligible
                      ? t("calculator.employeeEligible")
                      : t("calculator.employeeNotEligible")}
                  </p>
                </div>
              </div>

              {/* Family Result */}
              <div
                className={`flex items-start gap-3 p-4 rounded-xl border ${
                  results.familyEligible
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-red-50 border-red-200"
                }`}
              >
                {results.familyEligible ? (
                  <CheckCircle size={22} className="text-emerald-600 mt-0.5 shrink-0" />
                ) : (
                  <XCircle size={22} className="text-red-500 mt-0.5 shrink-0" />
                )}
                <div>
                  <p
                    className={`font-display font-bold text-sm ${
                      results.familyEligible ? "text-emerald-800" : "text-red-800"
                    }`}
                  >
                    <Users size={14} className="inline mr-1 -mt-0.5" />
                    {t("calculator.familyCoverage")}
                  </p>
                  <p className="text-sm text-[#334155] mt-1 font-body leading-relaxed">
                    {t("calculator.familyPremiumText")}{" "}
                    <strong>{formatCurrency(results.familyAnnualPremium)}</strong>.{" "}
                    {t("calculator.affordabilityText")}{" "}
                    <strong>{formatCurrency(results.affordabilityLimit)}</strong>.
                  </p>
                  <p
                    className={`text-sm font-display font-semibold mt-2 ${
                      results.familyEligible ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {results.familyEligible
                      ? t("calculator.familyEligible")
                      : t("calculator.familyNotEligible")}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-[#CBD5E1] text-center">
                {results.employeeEligible || results.familyEligible ? (
                  <>
                    <p className="text-sm text-[#334155] font-body mb-4">
                      {t("calculator.eligibleCtaText")}
                    </p>
                    <a
                      href="tel:+14698312672"
                      className="inline-flex items-center gap-2 bg-emerald-600 text-white font-display font-bold text-base px-8 py-4 rounded-xl hover:bg-emerald-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      {t("calculator.callRobert")}
                    </a>
                    <a
                      href="#lead-form"
                      className="block mt-3 text-sm text-[#1A5FAF] font-display font-medium hover:text-[#C9A040] transition-colors"
                    >
                      {t("calculator.orFillForm")}
                    </a>
                  </>
                ) : (
                  <>
                    <p className="text-sm text-[#334155] font-body mb-4">
                      {t("calculator.notEligibleCtaText")}
                    </p>
                    <a
                      href="#lead-form"
                      className="inline-block bg-[#C9A040] text-[#0F3F7A] font-display font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-[#A07C20] transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      {t("calculator.notEligibleCta")}
                    </a>
                  </>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#64748B] mt-6 font-body max-w-lg mx-auto leading-relaxed">
          {t("calculator.disclaimer")}
        </p>
      </div>
    </section>
  );
}
