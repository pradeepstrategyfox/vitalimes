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
        cream: {
          DEFAULT: "#FEFCF3",
          50: "#FFFEFB",
          100: "#FEFCF3",
          200: "#FBF6E3",
        },
        leaf: {
          50: "#F1F6EE",
          100: "#DDE9D5",
          200: "#BBD3AB",
          300: "#92B97C",
          400: "#6B9B54",
          500: "#4E7E3A",
          600: "#3A6429",
          700: "#2C4D20",
          800: "#1F3B19",
          900: "#16290F",
        },
        lemon: {
          50: "#FFFDF0",
          100: "#FEF9D3",
          200: "#FDF1A6",
          300: "#FBE56E",
          400: "#F7D33C",
          500: "#EFBC18",
          600: "#D49A0C",
          700: "#A9740F",
          800: "#8A5C15",
          900: "#744C17",
        },
        charcoal: {
          DEFAULT: "#241F1B",
          light: "#3A322C",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        swaySlow: {
          "0%, 100%": { transform: "rotate(2deg) translateY(0px)" },
          "50%": { transform: "rotate(-2deg) translateY(6px)" },
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        sway: "sway 6s ease-in-out infinite",
        swaySlow: "swaySlow 8s ease-in-out infinite",
        floaty: "floaty 7s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(44, 77, 32, 0.18)",
        glow: "0 0 60px -10px rgba(247, 211, 60, 0.45)",
      },
    },
  },
  plugins: [],
};

export default config;
