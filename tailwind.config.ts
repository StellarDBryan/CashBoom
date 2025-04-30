import type { Config } from "tailwindcss";
import { heroui } from "@heroui/react";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    }, 
    fontSize: {
      'h1': '2.986rem',
      'h2': '2.488rem',
      'h3': '2.074rem',
      'h4': '1.728rem',
      'h5': '1.44rem',
      'h6': '1.25rem', 
      'regular': '1rem', 
      'sm1': '0.833rem', 
      'sm2': '0.694rem'
    }
  },
  plugins: [heroui()],
};
export default config;
