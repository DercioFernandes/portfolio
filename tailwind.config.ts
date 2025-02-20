import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        lapisLazuli: "#2660A4",
        bone: "#E0DDCF",
        richBlack: "#1C1C1E",
        pigmentGreen: "#069E2D",
        brightPink: "#EF476F",
        tangerine: "#F18701"
      },
    },
  },
  plugins: [],
} satisfies Config;
