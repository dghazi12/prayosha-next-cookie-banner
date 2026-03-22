import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayosha Points Rewards Program",
  description:
    "Earn points with every visit to Prayosha. Unlock exclusive rewards, VIP perks, and climb through Bronze, Silver, and Gold tiers as a loyal member.",
  openGraph: {
    title: "Prayosha Points | Rewards Program",
    description:
      "Earn points, unlock rewards, and enjoy VIP perks at Prayosha Threading & Wax Bar.",
  },
};

const TIERS = [
  {
    name: "Bronze",
    req: "0–199 points",
    benefits: "5% off all services, birthday discount",
  },
  {
    name: "Silver",
    req: "200–499 points",
    benefits:
      "10% off all services, priority booking, free brow threading annually",
  },
  {
    name: "Gold",
    req: "500+ points",
    benefits:
      "15% off all services, VIP booking, free facial annually, exclusive events",
  },
];

export default function PointsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Hero */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-[2.5px] text-green-600 mb-3">
          Rewards Program
        </p>
        <h1 className="font-serif text-3xl md:text-4xl text-green-800 mb-4">
          Prayosha Points
        </h1>
        <p className="text-gray-500 text-base max-w-[540px] mx-auto leading-relaxed">
          Earn points with every visit, unlock exclusive rewards, and enjoy VIP perks
          as a loyal Prayosha member.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: "🌟",
            title: "Earn Points",
            desc: "Earn 1 point for every $1 spent on any service at any Prayosha location. Points accumulate automatically.",
          },
          {
            icon: "🎁",
            title: "Redeem Rewards",
            desc: "Use your points for free services, exclusive discounts, and special seasonal offers available only to members.",
          },
          {
            icon: "👑",
            title: "VIP Tiers",
            desc: "Climb through Bronze, Silver, and Gold tiers to unlock increasing benefits, priority booking, and birthday perks.",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-2xl p-9 shadow-md text-center border border-black/[0.04] hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-5">
              {card.icon}
            </div>
            <h3 className="font-serif text-lg text-green-800 mb-2.5">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>

      {/* Tiers Table */}
      <div className="mt-16">
        <h2 className="font-serif text-2xl text-green-800 mb-6">
          Membership Tiers
        </h2>

        {/* Header */}
        <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr_1fr] gap-[2px] bg-black/[0.04] rounded-xl overflow-hidden">
          <div className="bg-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
            Tier
          </div>
          <div className="bg-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 hidden sm:block">
            Requirement
          </div>
          <div className="bg-white px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 hidden sm:block">
            Benefits
          </div>

          {TIERS.map((tier) => (
            <>
              <div
                key={`${tier.name}-name`}
                className="bg-white px-6 py-4 text-sm font-bold text-green-700"
              >
                {tier.name}
              </div>
              <div
                key={`${tier.name}-req`}
                className="bg-white px-6 py-4 text-sm text-gray-600"
              >
                <span className="sm:hidden font-semibold text-gray-800">
                  Requirement:{" "}
                </span>
                {tier.req}
              </div>
              <div
                key={`${tier.name}-ben`}
                className="bg-white px-6 py-4 text-sm text-gray-600"
              >
                <span className="sm:hidden font-semibold text-gray-800">
                  Benefits:{" "}
                </span>
                {tier.benefits}
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
