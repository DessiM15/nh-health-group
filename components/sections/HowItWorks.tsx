const steps = [
  {
    number: "1",
    title: "Request Your Free Review",
    description:
      "Fill out the short form below. No commitment, no pressure \u2014 just information.",
  },
  {
    number: "2",
    title: "We Compare Your Options",
    description:
      "Rigo reviews your current coverage and pulls quotes from multiple carriers to find you real savings.",
  },
  {
    number: "3",
    title: "You Choose \u2014 Zero Pressure",
    description:
      "We walk you through what we found. You decide if and when you want to switch. Simple as that.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F8FAFD] py-20 px-6 scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          The Process
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3">
          A Free Review in 3 Simple Steps
        </h2>
      </div>

      {/* Steps */}
      <div className="max-w-4xl mx-auto relative flex flex-col md:flex-row items-start md:items-start justify-between gap-12 md:gap-0">
        {/* Dashed connector line — desktop only */}
        <div className="hidden md:block absolute top-7 left-[calc(16.67%+28px)] right-[calc(16.67%+28px)] border-t-2 border-dashed border-[#C9A040] opacity-50" />

        {steps.map(({ number, title, description }, i) => (
          <div
            key={number}
            className="reveal flex-1 flex flex-col items-center text-center px-4"
            style={{ transitionDelay: `${i * 0.15}s` }}
          >
            {/* Circle */}
            <div className="relative z-10 w-14 h-14 bg-[#C9A040] rounded-full flex items-center justify-center mb-5 shadow-[0_4px_16px_rgba(201,160,64,0.3)]">
              <span className="font-display font-extrabold text-[#0F3F7A] text-xl">
                {number}
              </span>
            </div>
            {/* Text */}
            <h3 className="font-display font-bold text-[#0F3F7A] text-[1.05rem] mb-2">
              {title}
            </h3>
            <p className="font-body text-[#334155] text-[0.9375rem] leading-relaxed max-w-[260px]">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
