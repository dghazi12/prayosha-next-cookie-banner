export default function StatsBar() {
  const stats: { number: string; suffix?: string; label: string }[] = [
    { number: "5", label: "Toronto locations" },
    { number: "7+", label: "Years of expertise" },
    { number: "10k+", label: "Happy clients" },
    { number: "4.8", suffix: "★", label: "Average star rating" },
  ];

  return (
    <section className="bg-green-800 py-12" aria-label="Company statistics">
      <ul className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat) => (
          <li key={stat.label}>
            <div className="font-serif text-3xl md:text-4xl lg:text-5xl text-green-300 leading-none mb-1.5">
              {stat.number}
              {stat.suffix && <span aria-hidden="true">{stat.suffix}</span>}
            </div>
            <div className="text-sm text-white/70">{stat.label}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
