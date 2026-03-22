import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: "#f0f8e8",
          100: "#d4edb4",
          200: "#a8d86e",
          300: "#7bc043",
          400: "#5da033",
          500: "#4a8528",
          600: "#3a6b1e",
          700: "#2d5016",
          800: "#1a3409",
          900: "#0d1a05",
        },
        cream: {
          DEFAULT: "#faf8f2",
          dark: "#f2efe6",
        },
        gold: {
          DEFAULT: "#c4962c",
          light: "#f5e6c0",
        },
      },
      fontFamily: {
        serif: ["DM Serif Display", "Georgia", "serif"],
        sans: ["DM Sans", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
