import Link from "next/link";
import { LOCATIONS } from "@/data/locations";

export default function Footer() {
  return (
    <footer className="bg-green-900 pt-16 text-white/60">
      <div className="max-w-7xl mx-auto px-6 pb-10 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div
              className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5" focusable="false">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div>
              <div className="font-bold text-xl text-white leading-tight">prayosha</div>
              <div className="text-[9px] uppercase tracking-[2px] text-white/60 font-medium -mt-0.5">
                Threading & Wax Bar
              </div>
            </div>
          </div>
          <p className="text-sm leading-relaxed max-w-[300px]">
            Toronto&apos;s trusted destination for expert threading, waxing, and beauty
            services since 2017.
          </p>
        </div>

        {/* Locations */}
        <div>
          <h2 className="font-sans text-xs uppercase tracking-[2px] text-green-300 font-semibold mb-5">
            Our Locations
          </h2>
          <ul className="space-y-2.5">
            {LOCATIONS.map((loc) => (
              <li key={loc.id}>
                <Link
                  href={`/locations/${loc.id}`}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span aria-hidden="true">📍</span> {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h2 className="font-sans text-xs uppercase tracking-[2px] text-green-300 font-semibold mb-5">
            Get In Touch
          </h2>
          <ul className="space-y-2.5">
            {LOCATIONS.map((loc) => (
              <li key={loc.id}>
                <a
                  href={`tel:${loc.phone}`}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2"
                >
                  <span aria-hidden="true">📞</span> {loc.name.split(" ")[0]}: {loc.phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 py-5 border-t border-white/[0.08] flex flex-wrap justify-between items-center gap-3 text-xs">
        <span>© 2026 Prayosha Threading & Wax Bar. All rights reserved.</span>
        <nav aria-label="Legal">
          <ul className="flex gap-5">
            <li>
              <a href="/privacy" className="text-white/60 hover:text-white transition-colors">
                Privacy
              </a>
            </li>
            <li>
              <a href="/terms" className="text-white/60 hover:text-white transition-colors">
                Terms
              </a>
            </li>
            <li>
              <a href="/sitemap.xml" className="text-white/60 hover:text-white transition-colors">
                Sitemap
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
