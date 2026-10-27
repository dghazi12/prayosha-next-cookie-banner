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
  // User-controlled pause (WCAG 2.2.2)
  const [paused, setPaused] = useState(false);
  // Temporary pause while the user hovers or focuses inside the slider
  const [interacting, setInteracting] = useState(false);

  // Don't auto-rotate for users who prefer reduced motion
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPaused(true);
    }
  }, []);

  const rotating = !paused && !interacting;

  useEffect(() => {
    if (!rotating) return;
    const timer = setInterval(() => setIdx((i) => (i + 1) % SLIDER_ITEMS.length), 5500);
    return () => clearInterval(timer);
  }, [rotating]);

  const item = SLIDER_ITEMS[idx];

  return (
    <section
      className="relative overflow-hidden min-h-[520px] flex items-center"
      aria-roledescription="carousel"
      aria-label="Featured promotions"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setInteracting(false);
      }}
    >
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
          <span className="text-gold text-sm" aria-hidden="true">★</span> TORONTO&apos;S FAVOURITE SINCE 2017
        </div>

        <h1 className="animate-fade-up-d1 text-4xl md:text-5xl lg:text-6xl text-white mb-4 max-w-[600px]">
          Threading & waxing,{" "}
          <em className="italic text-green-200">perfected.</em>
        </h1>

        <p
          className="animate-fade-up-d2 text-white/80 text-lg max-w-[500px] mb-8 leading-relaxed"
          aria-live={rotating ? "off" : "polite"}
          aria-atomic="true"
        >
          <span className="sr-only">
            Slide {idx + 1} of {SLIDER_ITEMS.length}: {item.title}.{" "}
          </span>
          {item.text}
        </p>

        <div className="animate-fade-up-d3 flex gap-3 flex-wrap">
          <Link
            href="/locations"
            className="inline-flex items-center gap-2 bg-white text-green-800 px-7 py-3.5 rounded-xl font-semibold text-[15px] hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            <span aria-hidden="true">✂</span> Find a location
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-7 py-3.5 rounded-xl font-semibold text-[15px] border border-white/25 backdrop-blur-sm hover:bg-white/20 transition-all"
          >
            View all services
          </Link>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-3 mt-8">
          <button
            type="button"
            onClick={() => setPaused((p) => !p)}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors"
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          >
            {paused ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true" focusable="false">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true" focusable="false">
                <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
              </svg>
            )}
          </button>

          <ul className="flex gap-1" aria-label="Choose a slide">
            {SLIDER_ITEMS.map((slide, i) => (
              <li key={slide.title}>
                <button
                  type="button"
                  className="group flex items-center h-6 px-1"
                  onClick={() => setIdx(i)}
                  aria-label={`Slide ${i + 1}: ${slide.title}`}
                  aria-current={i === idx ? "true" : undefined}
                >
                  <span
                    aria-hidden="true"
                    className={`block h-1 rounded-sm transition-all duration-300 ${
                      i === idx ? "w-12 bg-white" : "w-8 bg-white/40 group-hover:bg-white/70"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
