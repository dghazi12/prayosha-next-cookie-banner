import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import StatsBar from "@/components/StatsBar";
import { SERVICES } from "@/data/services";

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      {/* Promo Banner */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl px-7 py-5 flex items-center justify-between shadow-xl gap-4 flex-wrap">
          <div className="flex items-center gap-3.5">
            <div
              className="w-11 h-11 bg-gold-light rounded-xl flex items-center justify-center text-xl shrink-0"
              aria-hidden="true"
            >
              ✦
            </div>
            <div>
              <div className="font-bold text-gray-800 text-[15px]">
                Women&apos;s waxing — 20% off
              </div>
              <div className="text-[13px] text-gray-500">
                Applies on services over $15. Available at all locations.
              </div>
            </div>
          </div>
          <Link
            href="/services"
            className="bg-gold-light text-amber-900 font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-amber-200 transition-colors whitespace-nowrap"
          >
            Learn more<span className="sr-only"> about women&apos;s waxing 20% off</span>
          </Link>
        </div>
      </div>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[2.5px] text-green-600 mb-3">
          Our Services
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-green-800 mb-4">
          Beauty care, tailored to you
        </h2>
        <p className="text-gray-500 text-base max-w-[540px] leading-relaxed">
          From precision brow shaping to full-body waxing and rejuvenating facials, we
          offer a complete range of beauty services.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
          {Object.entries(SERVICES).map(([key, s]) => (
            <Link
              key={key}
              href="/services"
              className="bg-white rounded-2xl p-8 shadow-sm border border-black/[0.04] hover:-translate-y-1 hover:shadow-lg transition-all group"
            >
              <div className="text-3xl mb-4" aria-hidden="true">{s.icon}</div>
              <h3 className="text-lg font-serif text-green-800 mb-2 group-hover:text-green-700 transition-colors">
                {s.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">{s.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <StatsBar />
    </>
  );
}
