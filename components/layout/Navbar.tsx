"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useTranslation } from "@/lib/useTranslation";

const navLinkKeys = [
  { key: "navbar.coverage", href: "#coverage" },
  { key: "navbar.howItWorks", href: "#how-it-works" },
  { key: "navbar.reviews", href: "#testimonials" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const LanguageToggle = () => (
    <div className="flex items-center gap-1.5 text-sm font-display font-medium">
      <button
        onClick={() => setLang("en")}
        className={`transition-colors duration-300 ${
          lang === "en"
            ? scrolled || mobileOpen
              ? "text-[#0F3F7A] font-bold"
              : "text-white font-bold"
            : scrolled || mobileOpen
              ? "text-[#334155]/50 hover:text-[#334155]"
              : "text-white/50 hover:text-white"
        }`}
      >
        EN
      </button>
      <span
        className={`transition-colors duration-300 ${
          scrolled || mobileOpen ? "text-[#334155]/30" : "text-white/30"
        }`}
      >
        |
      </span>
      <button
        onClick={() => setLang("es")}
        className={`transition-colors duration-300 ${
          lang === "es"
            ? scrolled || mobileOpen
              ? "text-[#0F3F7A] font-bold"
              : "text-white font-bold"
            : scrolled || mobileOpen
              ? "text-[#334155]/50 hover:text-[#334155]"
              : "text-white/50 hover:text-white"
        }`}
      >
        ES
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-white shadow-[0_2px_20px_rgba(26,95,175,0.08)]"
          : "bg-[#0F3F7A]/60 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Left: Logo + Company Name */}
        <a href="#" className="flex items-center gap-3" onClick={closeMobile}>
          <span
            className={`inline-flex transition-all duration-300 ${
              scrolled || mobileOpen
                ? "bg-white rounded-lg p-1 shadow-sm"
                : ""
            }`}
          >
            <Image
              src="/logo.png"
              alt="New Horizons Benefits Group"
              width={64}
              height={64}
              className="h-[64px] w-auto"
              priority
            />
          </span>
          <span
            className={`hidden md:inline-block font-display font-bold text-sm transition-colors duration-300 ${
              scrolled || mobileOpen ? "text-[#0F3F7A]" : "text-white"
            }`}
          >
            New Horizons Benefits Group
          </span>
        </a>

        {/* Center: Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinkKeys.map(({ key, href }) => (
            <a
              key={href}
              href={href}
              className={`font-display font-medium text-sm transition-colors duration-300 hover:text-[#C9A040] ${
                scrolled ? "text-[#334155]" : "text-white/90"
              }`}
            >
              {t(key)}
            </a>
          ))}
        </div>

        {/* Right: Language Toggle + CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>

          <a
            href="#lead-form"
            className="hidden sm:inline-block bg-[#C9A040] text-[#0F3F7A] font-semibold rounded-lg px-5 py-2 text-sm hover:bg-[#A07C20] transition-colors duration-200"
          >
            {t("navbar.cta")}
          </a>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X size={26} className="text-[#0F3F7A]" />
            ) : (
              <Menu
                size={26}
                className={`transition-colors duration-300 ${
                  scrolled ? "text-[#0F3F7A]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-[#CBD5E1] px-6 pb-5 pt-3 flex flex-col gap-4">
          <div className="flex justify-center py-1">
            <LanguageToggle />
          </div>
          {navLinkKeys.map(({ key, href }) => (
            <a
              key={href}
              href={href}
              onClick={closeMobile}
              className="font-display font-medium text-sm text-[#334155] hover:text-[#C9A040] transition-colors"
            >
              {t(key)}
            </a>
          ))}
          <a
            href="#lead-form"
            onClick={closeMobile}
            className="bg-[#C9A040] text-[#0F3F7A] font-semibold rounded-lg px-5 py-2.5 text-sm text-center hover:bg-[#A07C20] transition-colors duration-200"
          >
            {t("navbar.cta")}
          </a>
        </div>
      )}
    </nav>
  );
}
