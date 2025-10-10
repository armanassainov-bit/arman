import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.75rem"
      },
      colors: {
        primary: {
          DEFAULT: "#1f5a7d",
          light: "#2b7aa3",
          dark: "#163f59"
        },
        accent: "#f39c3d"
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(135deg, rgba(31,90,125,0.92), rgba(20,35,54,0.95)), url('https://images.unsplash.com/photo-1587560699334-cc1c4842f4a8?auto=format&fit=crop&w=1200&q=80')"
      },
      boxShadow: {
        card: "0 20px 45px -20px rgba(0, 0, 0, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
