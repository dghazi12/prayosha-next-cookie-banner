"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/services", label: "Services" },
    { href: "/points", label: "Prayosha Points" },
    { href: "/locations", label: "Locations" },
    { href: "/careers", label: "Careers" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Prayosha home">
          <div className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center transition-colors group-hover:bg-green-800">
            <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-xl text-green-700 tracking-tight leading-tight">
              prayosha
            </div>
            <div className="text-[9px] uppercase tracking-[2px] text-green-600 font-medium -mt-0.5">
              Threading & Wax Bar
            </div>
          </div>
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col items-center justify-center gap-[5px] w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span
            className={`w-[22px] h-[2px] bg-green-800 rounded-sm transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-[22px] h-[2px] bg-green-800 rounded-sm transition-all duration-300 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-[22px] h-[2px] bg-green-800 rounded-sm transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        {/* Nav */}
        <nav
          className={`${
            menuOpen ? "flex" : "hidden"
          } md:flex absolute md:relative top-[72px] md:top-0 left-0 right-0 bg-white md:bg-transparent flex-col md:flex-row items-stretch md:items-center gap-1 p-4 md:p-0 shadow-xl md:shadow-none rounded-b-2xl md:rounded-none z-50`}
          role="navigation"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`px-4 py-2.5 md:py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === item.href || pathname.startsWith(item.href + "/")
                  ? "text-green-700 font-semibold bg-green-50 md:bg-transparent"
                  : "text-gray-600 hover:text-green-700 hover:bg-green-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <a
            href=""
            className="bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-800 transition-colors mt-2 md:mt-0 md:ml-2 text-center"
            aria-label="Book an appointment now"
          >
            Book now
          </a>
        </nav>
      </div>
    </header>
  );
}
