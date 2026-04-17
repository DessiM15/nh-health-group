export default function StatsBar() {
  const stats = [
    { value: "$200–$500", label: "Average Savings per Employee" },
    { value: "PHCS PPO", label: "One of the Largest Networks in the Country" },
    { value: "$0", label: "Cost for Your Coverage Review" },
  ];

  return (
    <section className="bg-[linear-gradient(135deg,#C9A040_0%,#E8C97A_100%)]">
      <div className="max-w-5xl mx-auto py-10 flex flex-col md:flex-row items-center justify-center">
        {stats.map((stat, i) => (
          <div key={stat.value} className="flex items-center">
            <div className="text-center px-8 py-4">
              <p className="font-mono font-medium text-[2.25rem] text-[#0F3F7A] leading-tight">
                {stat.value}
              </p>
              <p className="font-display font-medium text-[0.8rem] text-[#0F3F7A]/80 uppercase tracking-widest mt-1">
                {stat.label}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div className="hidden md:block w-px h-14 bg-white/30" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
