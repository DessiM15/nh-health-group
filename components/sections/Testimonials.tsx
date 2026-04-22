"use client";

import Image from "next/image";
import { useTranslation } from "@/lib/useTranslation";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "David K.",
      role: t("testimonials.t1Role"),
      avatar:
        "https://ui-avatars.com/api/?name=David+K&background=1A5FAF&color=C9A040&bold=true&size=80",
      quote: t("testimonials.t1Quote"),
    },
    {
      name: "Sarah M.",
      role: t("testimonials.t2Role"),
      avatar:
        "https://ui-avatars.com/api/?name=Sarah+M&background=1A5FAF&color=C9A040&bold=true&size=80",
      quote: t("testimonials.t2Quote"),
    },
    {
      name: "Robert L.",
      role: t("testimonials.t3Role"),
      avatar:
        "https://ui-avatars.com/api/?name=Robert+L&background=1A5FAF&color=C9A040&bold=true&size=80",
      quote: t("testimonials.t3Quote"),
    },
  ];

  return (
    <section id="testimonials" className="bg-[#F1F5F9] py-20 px-6 scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          {t("testimonials.eyebrow")}
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3">
          {t("testimonials.heading")}
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(({ name, role, avatar, quote }, i) => (
          <div
            key={name}
            className="reveal relative bg-white rounded-2xl p-6 shadow-[0_2px_20px_rgba(26,95,175,0.08)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Stars */}
            <div className="text-[#C9A040] text-sm mb-3 tracking-wide">
              {"\u2605\u2605\u2605\u2605\u2605"}
            </div>

            {/* Decorative quote mark */}
            <span
              className="absolute top-3 left-4 font-serif text-[5rem] leading-none text-[#C9A040] opacity-20 select-none pointer-events-none"
              aria-hidden="true"
            >
              {"\u201c"}
            </span>

            {/* Quote */}
            <p className="relative z-10 font-serif italic text-[#334155] text-[0.975rem] leading-relaxed mb-5">
              {quote}
            </p>

            {/* Divider */}
            <div className="h-px bg-[#CBD5E1] mb-4" />

            {/* Author */}
            <div className="flex items-center gap-3">
              <Image
                src={avatar}
                alt={name}
                width={40}
                height={40}
                className="rounded-full"
                unoptimized
              />
              <div>
                <p className="font-display font-bold text-[#0F3F7A] text-sm">
                  {name}
                </p>
                <p className="font-body text-[#64748B] text-xs">{role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
