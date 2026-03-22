import type { Metadata } from "next";
import ServicesTabs from "@/components/ServicesTabs";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Explore Prayosha's complete range of threading, waxing, tinting, and facial services with transparent pricing. Expert beauty care at 5 Toronto locations.",
  openGraph: {
    title: "Services & Pricing | Prayosha Threading & Wax Bar",
    description:
      "Threading, waxing, tinting & facials with transparent pricing at all Toronto locations.",
  },
};

export default function ServicesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <p className="text-xs font-semibold uppercase tracking-[2.5px] text-green-600 mb-3">
        Our Services
      </p>
      <h1 className="font-serif text-3xl md:text-4xl text-green-800 mb-4">
        Services & Pricing
      </h1>
      <p className="text-gray-500 text-base max-w-[540px] leading-relaxed">
        Explore our complete range of threading, waxing, tinting, and facial services
        with transparent pricing.
      </p>
      <ServicesTabs />
    </section>
  );
}
