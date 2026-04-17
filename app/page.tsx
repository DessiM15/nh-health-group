"use client";

import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import CoverageOptions from "@/components/sections/CoverageOptions";
import FamilyGlitchCalculator from "@/components/sections/FamilyGlitchCalculator";
import NetworkSection from "@/components/sections/NetworkSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import WhoIsItFor from "@/components/sections/WhoIsItFor";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import LeadForm from "@/components/sections/LeadForm";
import Footer from "@/components/layout/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <Hero />
      <StatsBar />
      <CoverageOptions />
      <FamilyGlitchCalculator />
      <NetworkSection />
      <FeaturesSection />
      <WhoIsItFor />
      <HowItWorks />
      <Testimonials />
      <LeadForm />
      <Footer />
    </>
  );
}
