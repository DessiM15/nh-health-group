"use client";

import { Briefcase, Users, Calendar } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

const audienceIcons = [Briefcase, Users, Calendar];

export default function WhoIsItFor() {
  const { t } = useTranslation();

  const audiences = audienceIcons.map((Icon, i) => ({
    Icon,
    title: t(`whoIsItFor.card${i + 1}Title`),
    body: t(`whoIsItFor.card${i + 1}Body`),
  }));

  return (
    <section className="bg-white py-20 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          {t("whoIsItFor.eyebrow")}
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3">
          {t("whoIsItFor.heading")}
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {audiences.map(({ Icon, title, body }, i) => (
          <div
            key={i}
            className="reveal bg-white rounded-2xl p-6 border-l-4 border-l-[#C9A040] shadow-[0_2px_20px_rgba(26,95,175,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(26,95,175,0.18)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Icon
              size={32}
              className="text-[#C9A040] mb-3"
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
