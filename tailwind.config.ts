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
        // deep forest / pine greens
        pine: {
          950: "#1b2614",
          900: "#243218",
          800: "#2e4220",
          700: "#3a5128",
          600: "#496231",
          500: "#5c763e",
        },
        // soft olive / sage
        sage: {
          50: "#f4f7ea",
          100: "#e9efd4",
          200: "#d9e2b6",
          300: "#c6d295",
          400: "#aebd74",
        },
        // warm cream / peach
        peach: {
          50: "#fbf5ec",
          100: "#f7ecdb",
          200: "#f2ddc3",
          300: "#eccaa3",
          400: "#e2b079",
        },
        // terracotta / clay accent
        clay: {
          300: "#ec9a6e",
          400: "#e3895a",
          500: "#d76f3c",
          600: "#c25b2c",
          700: "#a14926",
        },
        paper: "#f6f1e7",
        ink: "#272219",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenburns: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s cubic-bezier(0.22,1,0.36,1) forwards",
        kenburns: "kenburns 18s ease-out forwards",
        marquee: "marquee 34s linear infinite",
      },
      boxShadow: {
        editorial: "0 24px 60px -24px rgba(36, 50, 24, 0.45)",
        card: "0 18px 50px -20px rgba(36, 50, 24, 0.30)",
      },
      letterSpacing: {
        widest2: "0.28em",
      },
    },
  },
  plugins: [],
};

export default config;
