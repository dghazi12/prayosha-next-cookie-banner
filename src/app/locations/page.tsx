import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/data/locations";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find your nearest Prayosha Threading & Wax Bar. 5 convenient Toronto locations offering expert threading, waxing, tinting, and facials. Walk-ins welcome.",
  openGraph: {
    title: "Our Locations | Prayosha Threading & Wax Bar",
    description:
      "5 convenient Toronto locations. Walk-ins welcome or book ahead.",
  },
};

export default function LocationsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[2.5px] text-green-600 mb-3">
        Our Locations
      </p>
      <h1 className="font-serif text-3xl md:text-4xl text-green-800 mb-4">
        Choose your nearest salon
      </h1>
      <p className="text-gray-500 text-base max-w-[540px] leading-relaxed">
        Visit any of our 5 convenient Toronto locations. Walk-ins welcome, or book
        ahead for guaranteed availability.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        {LOCATIONS.map((loc, i) => (
          <Link
            key={loc.id}
            href={`/locations/${loc.id}`}
            className="group bg-white rounded-xl overflow-hidden border border-black/[0.06] border-t-4 border-t-green-600 hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <div className="p-7">
              {/* Header */}
              <div className="flex items-start gap-3.5 mb-4">
                <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center font-bold text-green-700 text-sm shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h2 className="font-serif text-xl text-green-800 group-hover:text-green-600 transition-colors">
                    {loc.name}
                  </h2>
                  <p className="text-[13px] text-gray-500">{loc.subtitle}</p>
                </div>
              </div>

              {/* Details */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1.5">
                <span>📍</span> {loc.address}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>📞</span> {loc.phone}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-2">
                <span className="text-[13px] text-gray-500 uppercase tracking-wide">
                  {loc.hours}
                </span>
                <span className="text-green-700 font-semibold text-sm flex items-center gap-1.5 group-hover:gap-2.5 transition-all">
                  Location details <span>→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
