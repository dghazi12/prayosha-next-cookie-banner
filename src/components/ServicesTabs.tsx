"use client";

import { useState } from "react";
import { SERVICES } from "@/data/services";

export default function ServicesTabs() {
  const [active, setActive] = useState("waxing");
  const svc = SERVICES[active];

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 flex-wrap my-10" role="tablist" aria-label="Service categories">
        {Object.entries(SERVICES).map(([key, s]) => (
          <button
            key={key}
            className={`px-6 py-3 rounded-xl text-[15px] font-medium border transition-all flex items-center gap-2 ${
              active === key
                ? "bg-green-700 text-white border-green-700"
                : "bg-white text-gray-600 border-black/[0.06] hover:border-green-400 hover:text-green-700"
            }`}
            onClick={() => setActive(key)}
            role="tab"
            aria-selected={active === key}
            aria-controls={`panel-${key}`}
          >
            <span>{s.icon}</span> {s.title}
          </button>
        ))}
      </div>

      {/* Panel */}
      <div
        className="bg-white rounded-2xl overflow-hidden shadow-md"
        role="tabpanel"
        id={`panel-${active}`}
        aria-label={svc.title}
      >
        <div className="bg-green-800 p-8">
          <h3 className="text-white text-2xl font-serif mb-2">
            {svc.icon} {svc.title}
          </h3>
          <p className="text-white/70 text-[15px]">{svc.description}</p>
        </div>
        <table className="w-full" role="table">
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
                <td className="px-8 py-[18px] text-[15px] font-medium text-gray-800">
                  {item.area}
                </td>
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
