"use client";

import Image from "next/image";
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
    <section className="relative overflow-hidden">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left column — text content */}
        <div className="relative z-10 flex flex-col justify-center bg-[#0F3F7A] px-8 sm:px-12 lg:px-16 xl:px-24 py-24 lg:py-32">
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
          <div className="h-[3px] w-20 bg-[#C9A040] my-6 opacity-0 animate-[fadeUp_0.6s_ease_0.3s_forwards]" />

          {/* Subheadline */}
          <p className="font-body text-white/80 text-lg max-w-xl mb-8 opacity-0 animate-[fadeUp_0.6s_ease_0.4s_forwards]">
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
          <div className="flex gap-6 flex-wrap mt-4 opacity-0 animate-[fadeUp_0.6s_ease_0.6s_forwards]">
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

        {/* Right column — photo */}
        <div className="relative min-h-[300px] lg:min-h-0">
          <Image
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
            alt="Diverse business team in a modern office"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Bottom wave transition */}
      <svg
        className="absolute bottom-0 left-0 w-full z-10"
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
