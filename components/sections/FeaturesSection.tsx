import {
  Stethoscope,
  PhoneCall,
  Scissors,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    Icon: Stethoscope,
    title: "TelaDoc Telemedicine",
    body: "Skip the waiting room. Consult with a licensed physician anytime, anywhere, right from your phone. Available 24/7 for non-emergency care.",
  },
  {
    Icon: PhoneCall,
    title: "Concierge Medical Service",
    body: "A personal concierge will find in-network providers near you and even schedule your appointments. No more hunting for who accepts your plan.",
  },
  {
    Icon: Scissors,
    title: "Surgery Saver",
    body: "For any non-emergency surgery, we shop both in-network and out-of-network surgery centers for the best price. Just provide your CPT codes — we handle the rest.",
  },
  {
    Icon: BadgeDollarSign,
    title: "Bill Negotiator (Karis 360)",
    body: "Karis 360 negotiates directly with providers on bills over $2,500. They have a 70% success rate in lowering bills — and a 25% success rate in getting them to $0.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#EBF3FC] py-20 px-6">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-14">
        <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
          Included With Your Plan
        </span>
        <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-4">
          More Than Just Insurance
        </h2>
        <p className="font-body text-[#334155] text-[0.9375rem] max-w-xl mx-auto">
          Every New Horizons plan comes loaded with features most insurance
          companies charge extra for — or don&apos;t offer at all.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map(({ Icon, title, body }, i) => (
          <div
            key={title}
            className="reveal bg-white rounded-2xl p-6 border-t-4 border-t-[#C9A040] shadow-[0_2px_20px_rgba(26,95,175,0.08)]"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <Icon
              size={32}
              className="text-[#C9A040] mb-4"
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
