import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["var(--font-anton)", "Impact", "sans-serif"],
        caveat: ["var(--font-caveat)", "cursive"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#040926",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#E4E7ED",
          foreground: "#040926",
        },
        muted: {
          DEFAULT: "#F4F5F8",
          foreground: "#4B5162",
        },
        ring: "#C8CAD3",
        foreground: "#0E1020",
        "brand-purple-500": "#6B46C1",
        "brand-pink-500": "#EC4899",
        "brand-yellow-400": "#FACC15",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-in-from-bottom-2": {
          "0%": { transform: "translateY(0.5rem)" },
          "100%": { transform: "translateY(0)" },
        },
      },
      animation: {
        "in": "fade-in 500ms ease-out, slide-in-from-bottom-2 500ms ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
