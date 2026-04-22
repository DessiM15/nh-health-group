"use client";

import {
  Stethoscope,
  PhoneCall,
  Scissors,
  BadgeDollarSign,
} from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

const featureIcons = [Stethoscope, PhoneCall, Scissors, BadgeDollarSign];

export default function FeaturesSection() {
  const { t } = useTranslation();

  const features = featureIcons.map((Icon, i) => ({
    Icon,
    title: t(`features.card${i + 1}Title`),
    body: t(`features.card${i + 1}Body`),
  }));

  return (
    <section className="bg-[#EBF3FC] py-20 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          {t("features.eyebrow")}
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-4">
          {t("features.heading")}
        </h2>
        <p className="font-body text-[#334155] text-[0.9375rem] max-w-xl mx-auto">
          {t("features.description")}
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map(({ Icon, title, body }, i) => (
          <div
            key={i}
            className="reveal bg-white rounded-2xl p-6 border-t-4 border-t-[#C9A040] shadow-[0_2px_20px_rgba(26,95,175,0.08)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Icon
              size={32}
              className="text-[#C9A040] mb-4"
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
