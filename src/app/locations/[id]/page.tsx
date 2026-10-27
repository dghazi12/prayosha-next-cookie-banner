import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LOCATIONS } from "@/data/locations";
import ConsentMap from "@/components/ConsentMap";

interface PageProps {
  params: { id: string };
}

export function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ id: loc.id }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const loc = LOCATIONS.find((l) => l.id === params.id);
  if (!loc) return {};

  return {
    title: `${loc.name} Location`,
    description: `Visit Prayosha Threading & Wax Bar at ${loc.address}. ${loc.description} Open ${loc.hours}. Call ${loc.phone} or book online.`,
    openGraph: {
      title: `${loc.name} | Prayosha Threading & Wax Bar`,
      description: `Expert threading & waxing at ${loc.address}. Open ${loc.hours}.`,
    },
  };
}

export default function LocationDetailPage({ params }: PageProps) {
  const loc = LOCATIONS.find((l) => l.id === params.id);
  if (!loc) notFound();

  return (
    <>
      {/* Hero */}
      <div className="bg-green-800 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <Link
            href="/locations"
            className="inline-flex items-center gap-1.5 text-green-300 text-sm font-medium hover:text-white transition-colors mb-4"
          >
            <span aria-hidden="true">←</span> Back to all locations
          </Link>
          <p className="text-xs uppercase tracking-[2px] text-green-300 mb-2">
            Ontario
          </p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white">
            {loc.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Hours */}
          <section
            className="bg-white rounded-2xl overflow-hidden shadow-md self-start"
            aria-labelledby="hours-heading"
          >
            <h2
              id="hours-heading"
              className="px-7 py-5 font-sans font-bold text-[15px] text-gray-800 flex items-center gap-2 border-b border-cream-dark"
            >
              <span aria-hidden="true">🕐</span> Hours
            </h2>
            <dl>
              {loc.hoursDetail.map((h, i) => (
                <div
                  key={i}
                  className="flex justify-between px-7 py-3.5 text-sm border-b border-cream-dark last:border-b-0"
                >
                  <dt className="text-gray-600">{h.day}</dt>
                  <dd className="font-semibold text-gray-800">{h.time}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Info + Map */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-7 shadow-md space-y-5">
              {/* Address */}
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center shrink-0 text-base" aria-hidden="true">
                  📍
                </div>
                <div>
                  <strong className="text-gray-800 block">Address</strong>
                  {loc.address}
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center shrink-0 text-base" aria-hidden="true">
                  📞
                </div>
                <div>
                  <strong className="text-gray-800 block">Phone</strong>
                  <a
                    href={`tel:${loc.phone}`}
                    className="text-green-700 underline"
                  >
                    {loc.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <div className="w-9 h-9 bg-green-50 rounded-xl flex items-center justify-center shrink-0 text-base" aria-hidden="true">
                  ✉️
                </div>
                <div>
                  <strong className="text-gray-800 block">Email</strong>
                  <a
                    href={`mailto:${loc.email}`}
                    className="text-green-700 underline"
                  >
                    {loc.email}
                  </a>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-3 flex-wrap pt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={loc.bookingLink}
                  className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold text-sm hover:bg-green-800 transition-colors"
                >
                  Book This Location
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-50 text-green-700 rounded-lg font-semibold text-sm hover:bg-green-100 transition-colors"
                >
                  Get Directions
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <ConsentMap
              locationName={loc.name}
              mapQuery={loc.mapQuery}
              directionsUrl={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
            />
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-2xl p-8 shadow-md mt-8">
          <h2 className="font-serif text-xl text-green-800 mb-3">
            About This Location
          </h2>
          <p className="text-gray-600 leading-relaxed">{loc.description}</p>
          <div className="flex gap-3 flex-wrap mt-6">
            <a
              href={loc.bookingLink}
              className="px-6 py-3 bg-green-700 text-white rounded-lg font-semibold text-sm hover:bg-green-800 transition-colors"
            >
              Book This Location
            </a>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${loc.mapQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-50 text-green-700 rounded-lg font-semibold text-sm hover:bg-green-100 transition-colors"
            >
              Get Directions
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
