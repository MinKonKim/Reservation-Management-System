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
        background: "var(--background)",
        foreground: "var(--foreground)",
        Prime: {
          100: "#7FC890",
          200: "#639E6F",
          300: "#4D7858",
          400: "#386641",
          500: "#30563A",
          600: "#27472E",
          700: "#1E3724 ",
        },
        Sub: {
          100: "#FBF2E2",
          200: "#F7EDD9",
          300: "#F4E8D0",
          400: "#F2E8CF", // 기준 색상
          500: "#E0D7B9",
          600: "#C4B996",
          700: "#A89C73",
        },
        Point: {
          100: "#F2C6C7",
          200: "#E89D9F",
          300: "#DE7678",
          400: "#BC4749", // 기준 색상
          500: "#9B3A3B",
          600: "#7A2E2E",
          700: "#5A2222",
        },
      },
    },
  },
  plugins: [],
};
export default config;
