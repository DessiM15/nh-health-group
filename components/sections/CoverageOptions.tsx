"use client";

import {
  Heart,
  Building2,
  Shield,
  Zap,
  Plus,
  Award,
  FileText,
} from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

const cardIcons = [Building2, Heart, Shield, Zap, Plus, Award, FileText];

export default function CoverageOptions() {
  const { t } = useTranslation();

  const cards = cardIcons.map((Icon, i) => ({
    Icon,
    title: t(`coverageOptions.card${i + 1}Title`),
    body: t(`coverageOptions.card${i + 1}Body`),
  }));

  return (
    <section id="coverage" className="bg-[#F8FAFD] py-20 px-6 scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          {t("coverageOptions.eyebrow")}
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-4">
          {t("coverageOptions.heading")}
        </h2>
        <p className="font-body text-[#334155] text-[0.9375rem] max-w-xl mx-auto">
          {t("coverageOptions.description")}
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ Icon, title, body }, i) => (
          <div
            key={i}
            className="reveal group bg-white rounded-2xl p-6 border border-[#CBD5E1] shadow-[0_2px_20px_rgba(26,95,175,0.08)] transition-all duration-200 hover:border-t-4 hover:border-t-[#1A5FAF] hover:shadow-[0_8px_32px_rgba(26,95,175,0.18)] hover:-translate-y-1"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Icon
              size={32}
              className="text-[#1A5FAF] mb-4"
              strokeWidth={1.75}
            />
            <h3 className="font-display font-bold text-[#0F3F7A] text-[1.125rem] mb-2">
              {title}
            </h3>
            <p className="font-body text-[#334155] text-[0.9375rem] leading-relaxed">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
