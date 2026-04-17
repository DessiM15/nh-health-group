"use client";

import { useState } from "react";
import { Calculator, DollarSign, Users, ChevronDown, CheckCircle, XCircle, Info } from "lucide-react";

const PAY_FREQUENCIES = [
  { label: "Weekly", multiplier: 52 },
  { label: "Bi-Weekly", multiplier: 26 },
  { label: "Twice Monthly", multiplier: 24 },
  { label: "Monthly", multiplier: 12 },
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
    const freq = PAY_FREQUENCIES.find((f) => f.label === payFrequency);
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
          Free Tool
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-3">
          Group Plan Cost Estimator
        </h2>
        <p className="font-display font-medium text-[#1A5FAF] text-lg mb-4">
          Estimate Your Group Health Plan Costs
        </p>
        <p className="font-body text-[#334155] text-[0.9375rem] max-w-2xl mx-auto">
          Use this tool to get a ballpark estimate of what group health coverage might cost for your business.
          Actual rates depend on group size, demographics, and plan design &mdash; we&apos;ll provide a detailed quote during your free consultation.
        </p>
      </div>

      {/* Calculator Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl border border-[#CBD5E1] shadow-[0_2px_20px_rgba(26,95,175,0.08)] overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-[#0F3F7A] to-[#1A5FAF] px-6 py-5 flex items-center gap-3">
            <Calculator size={24} className="text-[#C9A040]" />
            <h3 className="font-display font-bold text-white text-lg">
              Check Your Eligibility
            </h3>
          </div>

          {/* Form */}
          <div className="p-6 md:p-8 space-y-6">
            {/* Household Income */}
            <div>
              <label className="block font-display font-semibold text-[#0F3F7A] text-sm mb-2">
                Average Employee Salary
              </label>
              <div className="relative">
                <DollarSign
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#64748B]"
                />
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="e.g. 55,000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value.replace(/[^0-9,]/g, ""))}
                  className="w-full pl-9 pr-4 py-3 rounded-xl border border-[#CBD5E1] text-[#334155] text-sm font-body focus:outline-none focus:ring-2 focus:ring-[#1A5FAF] focus:border-transparent transition-all"
                />
              </div>
            </div>

            {/* Pay Frequency */}
            <div>
              <label className="block font-display font-semibold text-[#0F3F7A] text-sm mb-2">
                Pay Frequency
              </label>
              <div className="relative">
                <select
                  value={payFrequency}
                  onChange={(e) => setPayFrequency(e.target.value)}
                  className="w-full appearance-none px-4 py-3 rounded-xl border border-[#CBD5E1] text-sm font-body bg-white text-[#334155] focus:outline-none focus:ring-2 focus:ring-[#1A5FAF] focus:border-transparent transition-all"
                >
                  <option value="" disabled>
                    Select your pay frequency
                  </option>
                  {PAY_FREQUENCIES.map(({ label }) => (
                    <option key={label} value={label}>
                      {label}
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
                  Estimated Employee-Only Premium
                  <span className="block font-normal text-[#64748B] text-xs mt-0.5">
                    Per paycheck (lowest-cost plan)
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
                    placeholder="e.g. 150"
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
                  Estimated Family Premium
                  <span className="block font-normal text-[#64748B] text-xs mt-0.5">
                    Per paycheck (lowest-cost plan)
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
                    placeholder="e.g. 450"
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
              How are group plan costs determined?
            </button>
            {showInfo && (
              <div className="bg-[#EBF3FC] rounded-xl p-4 text-sm text-[#334155] font-body leading-relaxed">
                Group plan costs depend on factors like group size, average age, location, and plan design.
                This estimator provides a rough benchmark &mdash; your actual rates may differ.
                We&apos;ll provide exact quotes during your consultation.
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
                Estimate Group Costs
              </button>
              {results && (
                <button
                  onClick={handleReset}
                  className="px-5 py-3.5 rounded-xl border border-[#CBD5E1] text-[#64748B] text-sm font-display font-medium hover:border-[#1A5FAF] hover:text-[#1A5FAF] transition-colors"
                >
                  Reset
                </button>
              )}
            </div>
          </div>

          {/* Results */}
          {results && (
            <div className="border-t border-[#CBD5E1] p-6 md:p-8 space-y-4 bg-[#F8FAFD]">
              <h4 className="font-display font-bold text-[#0F3F7A] text-base mb-4">
                Your Results
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
                    Employee Coverage
                  </p>
                  <p className="text-sm text-[#334155] mt-1 font-body leading-relaxed">
                    Your annual employee-only premium is{" "}
                    <strong>{formatCurrency(results.employeeAnnualPremium)}</strong>.
                    The affordability threshold ({(AFFORDABILITY_THRESHOLD * 100).toFixed(2)}% of income) is{" "}
                    <strong>{formatCurrency(results.affordabilityLimit)}</strong>.
                  </p>
                  <p
                    className={`text-sm font-display font-semibold mt-2 ${
                      results.employeeEligible ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {results.employeeEligible
                      ? "You may qualify for financial help through the Marketplace."
                      : "Your employer coverage is considered affordable — you likely won't qualify for Marketplace subsidies based on employee-only cost."}
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
                    Family / Dependent Coverage
                  </p>
                  <p className="text-sm text-[#334155] mt-1 font-body leading-relaxed">
                    Your annual family premium is{" "}
                    <strong>{formatCurrency(results.familyAnnualPremium)}</strong>.
                    The affordability threshold ({(AFFORDABILITY_THRESHOLD * 100).toFixed(2)}% of income) is{" "}
                    <strong>{formatCurrency(results.affordabilityLimit)}</strong>.
                  </p>
                  <p
                    className={`text-sm font-display font-semibold mt-2 ${
                      results.familyEligible ? "text-emerald-700" : "text-red-700"
                    }`}
                  >
                    {results.familyEligible
                      ? "Your spouse and dependents may qualify for financial help through the Marketplace — the 'Family Glitch' fix may apply to you!"
                      : "Your family coverage is considered affordable — your spouse/dependents likely won't qualify for separate Marketplace subsidies."}
                  </p>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-4 border-t border-[#CBD5E1] text-center">
                <p className="text-sm text-[#334155] font-body mb-4">
                  {results.employeeEligible || results.familyEligible
                    ? "Great news! Let us run a free, personalized savings review to find the best plan for you."
                    : "Even if you don't qualify for subsidies, we may still find you better coverage at a lower cost."}
                </p>
                <a
                  href="#lead-form"
                  className="inline-block bg-[#C9A040] text-[#0F3F7A] font-display font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-[#A07C20] transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Get My Free Savings Review
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-[#64748B] mt-6 font-body max-w-lg mx-auto leading-relaxed">
          This calculator provides an estimate only and does not constitute tax or legal advice.
          Actual eligibility depends on additional factors. The affordability threshold for 2026 is {(AFFORDABILITY_THRESHOLD * 100).toFixed(2)}% of household income.
        </p>
      </div>
    </section>
  );
}
