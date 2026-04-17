const stats = [
  {
    value: "57%",
    label: "Documented discount on in-network services",
  },
  {
    value: "Largest PPO",
    label: "PHCS Multi-Plan is one of the oldest & largest PPO networks in the US",
  },
  {
    value: "In-Network",
    label: "Check if your current doctor is already covered — most are",
  },
];

export default function NetworkSection() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left: Text */}
        <div className="reveal">
          <span className="font-display font-medium text-[0.8rem] uppercase tracking-widest text-[#C9A040]">
            The Network
          </span>
          <h2 className="font-display font-extrabold text-[#0F3F7A] text-3xl md:text-4xl mt-3 mb-5 leading-tight">
            Access to One of the Largest PPO Networks in the Country
          </h2>
          <p className="font-body text-[#334155] text-[0.9375rem] leading-relaxed mb-5">
            The Multi-Plan PHCS Network gives New Horizons clients access to a
            massive nationwide PPO network — meaning your doctors, specialists,
            and hospitals are likely already in-network.
          </p>
          <p className="font-body text-[#334155] text-[0.9375rem] leading-relaxed mb-5">
            In-network repricing means you benefit from pre-negotiated rates — in
            one documented case, a 57% discount was applied to services rendered.
          </p>
          <a
            href="https://www3.viiad.com/NewEraLife/member/choose.asp?msg=info(security.asp)"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display font-semibold text-[#C9A040] underline underline-offset-4 decoration-[#C9A040] hover:text-[#A07C20] hover:decoration-[#A07C20] transition-colors text-[0.9375rem]"
          >
            Check if your doctor is in-network →
          </a>
        </div>

        {/* Right: Stat boxes */}
        <div className="reveal flex flex-col gap-5" style={{ transitionDelay: "0.15s" }}>
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="bg-white rounded-xl border-l-4 border-l-[#1A5FAF] p-5 shadow-[0_2px_20px_rgba(26,95,175,0.08)]"
            >
              <p className="font-mono font-medium text-2xl text-[#0F3F7A] leading-tight">
                {stat.value}
              </p>
              <p className="font-display font-medium text-[0.8rem] text-[#334155] mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
