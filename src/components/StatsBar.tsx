export default function StatsBar() {
  const stats = [
    { number: "5", label: "Toronto locations" },
    { number: "7+", label: "Years of expertise" },
    { number: "10k+", label: "Happy clients" },
    { number: "4.8★", label: "Average rating" },
  ];

  return (
    <section className="bg-green-800 py-12" aria-label="Company statistics">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <div key={stat.label}>
            <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-300 leading-none mb-1.5">
              {stat.number}
            </div>
            <div className="text-sm text-white/60">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
