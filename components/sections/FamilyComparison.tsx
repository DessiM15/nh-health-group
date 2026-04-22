"use client";

import { Umbrella, GitBranch } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function FamilyComparison() {
  const { t } = useTranslation();

  return (
    <section className="bg-white py-20 px-6 scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          {t("familyComparison.eyebrow")}
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-3">
          {t("familyComparison.heading")}
        </h2>
        <p className="font-body text-[#334155] text-[0.9375rem] max-w-2xl mx-auto">
          {t("familyComparison.description")}
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card A — One Family Plan */}
        <div className="reveal relative rounded-2xl border-2 border-red-200 bg-red-50/50 p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
              <Umbrella size={24} className="text-red-500" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#0F3F7A] text-lg">
                {t("familyComparison.cardATitle")}
              </h3>
              <p className="font-body text-[#64748B] text-sm">
                {t("familyComparison.cardASubtitle")}
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-red-200/60">
              <span className="font-body text-[#334155] text-sm">
                {t("familyComparison.rowAMembers")}
              </span>
              <span className="font-display font-bold text-red-600 text-sm">
                {t("familyComparison.rowAMembersValue")}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-red-200/60">
              <span className="font-body text-[#334155] text-sm">
                {t("familyComparison.rowAMonthly")}
              </span>
              <span className="font-display font-bold text-red-600 text-base">
                {t("familyComparison.rowAMonthlyValue")}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-body text-[#334155] text-sm">
                {t("familyComparison.rowAAnnual")}
              </span>
              <span className="font-display font-bold text-red-600 text-base">
                {t("familyComparison.rowAAnnualValue")}
              </span>
            </div>
          </div>

          <div className="bg-red-100/80 rounded-xl px-4 py-3 text-center">
            <p className="font-display font-bold text-red-700 text-sm">
              {t("familyComparison.cardACallout")}
            </p>
          </div>
        </div>

        {/* Card B — Split Strategy */}
        <div className="reveal relative rounded-2xl border-2 border-emerald-300 bg-emerald-50/50 p-8 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
          {/* Savings badge */}
          <div className="absolute -top-3 right-6 bg-emerald-500 text-white font-display font-bold text-xs px-4 py-1.5 rounded-full shadow-md">
            {t("familyComparison.savingsBadge")}
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
              <GitBranch size={24} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-[#0F3F7A] text-lg">
                {t("familyComparison.cardBTitle")}
              </h3>
              <p className="font-body text-[#64748B] text-sm">
                {t("familyComparison.cardBSubtitle")}
              </p>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <div className="flex justify-between items-center py-2 border-b border-emerald-200/60">
              <span className="font-body text-[#334155] text-sm">
                {t("familyComparison.rowBEmployee")}
              </span>
              <span className="font-display font-bold text-[#334155] text-sm">
                {t("familyComparison.rowBEmployeeValue")}
              </span>
            </div>
            <div className="flex justify-between items-center py-2 border-b border-emerald-200/60">
              <span className="font-body text-[#334155] text-sm">
                {t("familyComparison.rowBFamily")}
              </span>
              <span className="font-display font-bold text-[#334155] text-sm">
                {t("familyComparison.rowBFamilyValue")}
              </span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="font-body text-[#334155] text-sm">
                {t("familyComparison.rowBTotal")}
              </span>
              <span className="font-display font-bold text-emerald-600 text-base">
                {t("familyComparison.rowBTotalValue")}
              </span>
            </div>
          </div>

          <div className="bg-emerald-100/80 rounded-xl px-4 py-3 text-center">
            <p className="font-display font-bold text-emerald-700 text-sm">
              {t("familyComparison.cardBCallout")}
            </p>
          </div>
        </div>
      </div>

      {/* Explainer + CTA */}
      <div className="max-w-3xl mx-auto mt-12 text-center">
        <p
          className="font-body text-[#334155] text-[0.9375rem] leading-relaxed mb-6"
          dangerouslySetInnerHTML={{ __html: t("familyComparison.explainer") }}
        />
        <a
          href="#calculator"
          className="inline-block bg-[#C9A040] text-[#0F3F7A] font-display font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-[#A07C20] transition-colors duration-200 shadow-md hover:shadow-lg"
        >
          {t("familyComparison.cta")}
        </a>
      </div>
    </section>
  );
}
