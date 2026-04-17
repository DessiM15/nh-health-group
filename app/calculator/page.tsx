"use client";

import Navbar from "@/components/layout/Navbar";
import FamilyGlitchCalculator from "@/components/sections/FamilyGlitchCalculator";
import Footer from "@/components/layout/Footer";

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      {/* Spacer for fixed navbar */}
      <div className="h-[72px]" />
      <FamilyGlitchCalculator />
      <Footer />
    </>
  );
}
