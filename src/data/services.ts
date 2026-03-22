export interface ServiceItem {
  area: string;
  price: string;
}

export interface ServiceCategory {
  title: string;
  icon: string;
  description: string;
  items: ServiceItem[];
}

export const SERVICES: Record<string, ServiceCategory> = {
  waxing: {
    title: "Waxing",
    icon: "✦",
    description:
      "Full-body waxing using premium, gentle wax for silky-smooth results.",
    items: [
      { area: "Full Legs", price: "$45" },
      { area: "Half Legs", price: "$30" },
      { area: "Full Arms", price: "$30" },
      { area: "Half Arms", price: "$20" },
      { area: "Underarms", price: "$15" },
      { area: "Full Face", price: "$35" },
      { area: "Upper Lip", price: "$10" },
      { area: "Chin", price: "$10" },
      { area: "Bikini", price: "$30" },
      { area: "Brazilian", price: "$50" },
      { area: "Full Back", price: "$45" },
      { area: "Chest", price: "$40" },
      { area: "Stomach", price: "$20" },
    ],
  },
  threading: {
    title: "Threading",
    icon: "◈",
    description:
      "Precise, gentle threading for perfectly defined brows and smooth skin.",
    items: [
      { area: "Eyebrows", price: "$12" },
      { area: "Upper Lip", price: "$7" },
      { area: "Lower Lip / Chin", price: "$8" },
      { area: "Full Face", price: "$35" },
      { area: "Forehead", price: "$8" },
      { area: "Sides of Face", price: "$15" },
      { area: "Neck", price: "$10" },
      { area: "Eyebrow Shaping (First Visit)", price: "$18" },
    ],
  },
  tinting: {
    title: "Tinting",
    icon: "◉",
    description:
      "Enhance your natural features with professional lash and brow tinting.",
    items: [
      { area: "Eyebrow Tint", price: "$20" },
      { area: "Eyelash Tint", price: "$25" },
      { area: "Brow & Lash Combo", price: "$40" },
      { area: "Henna Brow Tint", price: "$35" },
      { area: "Beard Tint", price: "$25" },
    ],
  },
  facials: {
    title: "Facials",
    icon: "❋",
    description:
      "Rejuvenating facials tailored to your skin type for a natural glow.",
    items: [
      { area: "Classic Facial (30 min)", price: "$55" },
      { area: "Deep Cleansing Facial (45 min)", price: "$75" },
      { area: "Hydrating Facial (45 min)", price: "$80" },
      { area: "Anti-Aging Facial (60 min)", price: "$95" },
      { area: "Brightening Facial (60 min)", price: "$90" },
      { area: "Acne Treatment Facial (45 min)", price: "$85" },
      { area: "Gold Facial (60 min)", price: "$110" },
    ],
  },
};
