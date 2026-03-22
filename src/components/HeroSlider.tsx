"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const SLIDER_ITEMS = [
  {
    title: "Expert Brow Shaping",
    text: "Precision threading by trained specialists for your perfect arch.",
    bg: "linear-gradient(135deg, #2d5016 0%, #1a3409 100%)",
  },
  {
    title: "Silky Smooth Waxing",
    text: "Premium wax formulas that are gentle on skin, tough on hair.",
    bg: "linear-gradient(135deg, #3a6b1e 0%, #2d5016 100%)",
  },
  {
    title: "Rejuvenating Facials",
    text: "Customized treatments that leave your skin glowing and refreshed.",
    bg: "linear-gradient(135deg, #1a3409 0%, #0d1a05 100%)",
  },
];

export default function HeroSlider() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % SLIDER_ITEMS.length), 5500);
    return () => clearInterval(timer);
  }, []);

  const item = SLIDER_ITEMS[idx];

  return (
    <section className="relative overflow-hidden min-h-[520px] flex items-center" aria-label="Featured promotions">
      {/* Background */}
      <div
        className="absolute inset-0 transition-opacity duration-800"
        style={{ background: item.bg }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-green-900/85 to-green-900/40"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="animate-fade-up inline-flex items-center gap-2 bg-white/[0.12] backdrop-blur-sm border border-white/15 px-5 py-2 rounded-full text-white text-xs font-semibold uppercase tracking-wider mb-6">
          <span className="text-gold text-sm">★</span> TORONTO&apos;S FAVOURITE SINCE 2017
        </div>

        <h1 className="animate-fade-up-d1 text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-[600px]">
          Threading & waxing,{" "}
          <em className="italic text-green-200">perfected.</em>
        </h1>

        <p className="animate-fade-up-d2 text-white/70 text-lg max-w-[500px] mb-8 leading-relaxed">
          {item.text}
        </p>

        <div className="animate-fade-up-d3 flex gap-3 flex-wrap">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 bg-white text-green-800 px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            ✂ Find a location
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] border border-white/25 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            View all services
          </Link>
        </div>

        {/* Dots */}
        <div className="flex gap-2 mt-8" role="tablist" aria-label="Slide controls">
          {SLIDER_ITEMS.map((_, i) => (
            <button
              key={i}
              className={`h-1 rounded-sm transition-all duration-300 ${
                i === idx ? "w-12 bg-white" : "w-8 bg-white/30"
              }`}
              onClick={() => setIdx(i)}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
