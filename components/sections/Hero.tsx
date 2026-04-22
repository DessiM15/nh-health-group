"use client";

import { ShieldCheck } from "lucide-react";
import { useTranslation } from "@/lib/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  const trustItems = [
    t("hero.trust1"),
    t("hero.trust2"),
    t("hero.trust3"),
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/health-insurance-hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,63,122,0.88)_0%,rgba(26,95,175,0.85)_50%,rgba(34,114,195,0.82)_100%)]" />

      {/* SVG wave texture */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M0 300 Q360 200 720 350 T1440 250 V900 H0Z"
          fill="white"
          opacity="0.04"
        />
        <path
          d="M0 500 Q360 400 720 550 T1440 450 V900 H0Z"
          fill="white"
          opacity="0.04"
        />
        <path
          d="M0 650 Q360 580 720 700 T1440 620 V900 H0Z"
          fill="white"
          opacity="0.04"
        />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center px-6 flex flex-col items-center justify-center py-32">
        {/* Shield Icon */}
        <div className="mb-6 opacity-0 animate-[fadeUp_0.6s_ease_0.1s_forwards]">
          <ShieldCheck
            size={56}
            className="text-[#C9A040]"
            style={{ filter: "drop-shadow(0 0 20px rgba(201,160,64,0.4))" }}
          />
        </div>

        {/* Headline */}
        <h1
          className="font-display font-extrabold text-white leading-tight mb-4 opacity-0 animate-[fadeUp_0.6s_ease_0.2s_forwards]"
          style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)" }}
        >
          {t("hero.headline")}
        </h1>

        {/* Gold rule */}
        <div className="h-[3px] w-20 bg-[#C9A040] mx-auto my-6 opacity-0 animate-[fadeUp_0.6s_ease_0.3s_forwards]" />

        {/* Subheadline */}
        <p className="font-body text-white/80 text-lg max-w-xl mx-auto mb-8 opacity-0 animate-[fadeUp_0.6s_ease_0.4s_forwards]">
          {t("hero.subheadline")}
        </p>

        {/* Primary CTA */}
        <a
          href="#lead-form"
          className="inline-block w-full sm:w-auto bg-[#C9A040] text-[#0F3F7A] font-bold text-lg px-10 py-4 rounded-xl hover:bg-[#A07C20] transition-colors duration-200 shadow-[0_4px_20px_rgba(201,160,64,0.4)] mb-4 opacity-0 animate-[fadeUp_0.6s_ease_0.5s_forwards] text-center"
        >
          {t("hero.cta")}
        </a>

        {/* Trust strip */}
        <div className="flex gap-6 justify-center flex-wrap mt-4 opacity-0 animate-[fadeUp_0.6s_ease_0.6s_forwards]">
          {trustItems.map((item) => (
            <span
              key={item}
              className="flex items-center gap-1.5 text-sm text-white/75 font-body"
            >
              <span className="text-[#C9A040]">{"\u2713"}</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom wave transition */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 40 Q360 0 720 40 T1440 40 V80 H0Z" fill="#F8FAFD" />
      </svg>
    </section>
  );
}
