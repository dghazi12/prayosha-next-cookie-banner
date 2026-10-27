"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { SERVICES } from "@/data/services";

export default function ServicesTabs() {
  const [active, setActive] = useState("waxing");
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const keys = Object.keys(SERVICES);
  const svc = SERVICES[active];

  // WAI-ARIA tabs keyboard pattern: arrows, Home and End move between tabs
  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const current = keys.indexOf(active);
    let next: number | null = null;
    if (e.key === "ArrowRight") next = (current + 1) % keys.length;
    else if (e.key === "ArrowLeft") next = (current - 1 + keys.length) % keys.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = keys.length - 1;
    if (next === null) return;
    e.preventDefault();
    setActive(keys[next]);
    tabRefs.current[keys[next]]?.focus();
  };

  return (
    <div>
      {/* Tabs */}
      <div
        className="flex gap-2 flex-wrap my-10"
        role="tablist"
        aria-label="Service categories"
        onKeyDown={handleKeyDown}
      >
        {Object.entries(SERVICES).map(([key, s]) => (
          <button
            key={key}
            ref={(el) => {
              tabRefs.current[key] = el;
            }}
            type="button"
            id={`tab-${key}`}
            className={`px-6 py-3 rounded-xl text-[15px] font-medium border transition-all flex items-center gap-2 ${
              active === key
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-600 border-gray-300 hover:border-green-400 hover:text-green-700"
            }`}
            onClick={() => setActive(key)}
            role="tab"
            aria-selected={active === key}
            aria-controls={`panel-${key}`}
            tabIndex={active === key ? 0 : -1}
          >
            <span aria-hidden="true">{s.icon}</span> {s.title}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-md"
        role="tabpanel"
        id={`panel-${active}`}
        aria-labelledby={`tab-${active}`}
        tabIndex={0}
      >
        <div className="bg-green-800 p-8">
          <h2 className="text-white text-2xl font-serif mb-2">
            <span aria-hidden="true">{svc.icon}</span> {svc.title}
          </h2>
          <p className="text-white/80 text-[15px]">{svc.description}</p>
        </div>
        <table className="w-full">
          <caption className="sr-only">{svc.title} prices</caption>
          <thead className="sr-only">
            <tr>
              <th scope="col">Service Area</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {svc.items.map((item, i) => (
              <tr
                key={i}
                className="border-b border-cream-dark last:border-b-0 hover:bg-green-50 transition-colors"
              >
                <th
                  scope="row"
                  className="px-8 py-[18px] text-left text-[15px] font-medium text-gray-800"
                >
                  {item.area}
                </th>
                <td className="px-8 py-[18px] text-right text-base font-bold text-green-700">
                  {item.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
