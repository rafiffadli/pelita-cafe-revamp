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
        canvas: {
          DEFAULT: "#FFF9EE",
          subtle: "#FAF3E0",
          alt: "#F5ECD7",
        },
        espresso: {
          50: "#FBF7F2",
          100: "#F3E8DC",
          200: "#E3CEB8",
          300: "#CFAF8E",
          400: "#9E6D44",
          500: "#603814",
          600: "#4D2D10",
          700: "#3D230C",
          800: "#2B1808",
          900: "#1A0F05",
          DEFAULT: "#603814",
        },
        terracotta: {
          50: "#FDF2F2",
          100: "#FBE4E4",
          500: "#A33737",
          600: "#7E2A2A",
          700: "#5F1F1F",
          DEFAULT: "#7E2A2A",
        },
        caramel: {
          50: "#FAF6EC",
          100: "#F3E9CD",
          200: "#E6D19C",
          300: "#D8B978",
          400: "#C89E50",
          500: "#B88630",
          DEFAULT: "#D8B978",
        },
        roast: {
          DEFAULT: "#170F0A",
          surface: "#241811",
          border: "#3D2A1F",
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.8" },
        },
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(96, 56, 20, 0.08), 0 4px 6px -2px rgba(96, 56, 20, 0.04)",
        elevated: "0 20px 40px -15px rgba(96, 56, 20, 0.15)",
        roast: "0 20px 50px -10px rgba(23, 15, 10, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
