import {
  Heart,
  Building2,
  Shield,
  Zap,
  Plus,
  Award,
} from "lucide-react";

const cards = [
  {
    Icon: Building2,
    title: "Small Group Plans (2\u201350)",
    body: "Tailored health plans for small businesses. We help you navigate carrier options and find the best fit for your team and budget.",
  },
  {
    Icon: Heart,
    title: "Level-Funded Plans",
    body: "A hybrid approach that combines the savings potential of self-funding with the predictability of a fully-insured plan. Ideal for healthy groups.",
  },
  {
    Icon: Shield,
    title: "Fully-Insured Plans",
    body: "Traditional group coverage with fixed monthly premiums. Predictable costs and comprehensive benefits your employees can count on.",
  },
  {
    Icon: Zap,
    title: "Health Reimbursement Arrangements",
    body: "HRAs and ICHRAs let you reimburse employees for individual coverage \u2014 a flexible, tax-advantaged alternative to traditional group plans.",
  },
  {
    Icon: Plus,
    title: "Supplemental & Voluntary Benefits",
    body: "Dental, vision, life, disability, accident, and critical illness coverage. Enhance your benefits package without increasing your core plan costs.",
  },
  {
    Icon: Award,
    title: "Medicare-Eligible Employees",
    body: "Guidance for businesses with employees approaching 65. We help coordinate group coverage with Medicare to avoid gaps and reduce costs.",
  },
];

export default function CoverageOptions() {
  return (
    <section id="coverage" className="bg-[#F8FAFD] py-20 px-6 scroll-mt-20">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          What We Offer
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-4">
          Coverage Built Around Your Business
        </h2>
        <p className="font-body text-[#334155] text-[0.9375rem] max-w-xl mx-auto">
          We don&apos;t believe in one-size-fits-all. Every plan we recommend is
          built around your team, your industry, and your budget.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ Icon, title, body }, i) => (
          <div
            key={title}
            className="reveal group bg-white rounded-2xl p-6 border border-[#CBD5E1] shadow-[0_2px_20px_rgba(26,95,175,0.08)] transition-all duration-200 hover:border-t-4 hover:border-t-[#1A5FAF] hover:shadow-[0_8px_32px_rgba(26,95,175,0.18)] hover:-translate-y-1"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Icon
              size={32}
              className="text-[#1A5FAF] mb-4"
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
