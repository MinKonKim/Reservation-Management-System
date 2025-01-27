import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-roboto)", "monospace"],
      },
      colors: {
        primary: {
          100: "#E9EDF3",
          200: "#D3DAE7",
          300: "#BDC7DB",
          400: "#A7B4CF",
          500: "#91A2C3",
          600: "#7B8FB7",
          700: "#647CA9",
          800: "#4C6081",
          900: "#2E3A59",
        },

        secondary: {
          100: "#F8F9FA",
          200: "#F3F4F7",
          300: "#EEEFF2",
          400: "#E8EAEE",
          500: "#E2E5EA",
          600: "#DBDFE5",
          700: "#D4D9E0",
          800: "#BEC3CC",
          900: "#A8AEB8",
        },

        point: {
          100: "#FFF2EB",
          200: "#FFE6D7",
          300: "#FFD9C2",
          400: "#FFCCAE",
          500: "#FF884B", // 원본 컬러
          600: "#F3773E",
          700: "#E65B2A",
          800: "#C84D22",
          900: "#A33E1C",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
