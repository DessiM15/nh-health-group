export default function CostCallout() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0F3F7A] via-[#1A5FAF] to-[#0F3F7A] py-16 px-6">
      {/* Gold accent line top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-[#C9A040] to-transparent" />

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display font-extrabold text-white text-3xl md:text-4xl leading-tight mb-4">
          Paying More for Health Insurance
          <span className="block text-[#C9A040]">Than Your Mortgage?</span>
        </h2>
        <p className="font-body text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8">
          If so, it&apos;s time to revisit your plan. You could be saving
          hundreds every month.
        </p>
        <a
          href="#calculator"
          className="inline-block bg-[#C9A040] text-[#0F3F7A] font-display font-bold text-base px-8 py-4 rounded-xl hover:bg-[#A07C20] transition-colors duration-200 shadow-lg hover:shadow-xl"
        >
          Check Your Savings &darr;
        </a>
      </div>

      {/* Gold accent line bottom */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#C9A040] to-transparent" />
    </section>
  );
}
