import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fbf7ec",
          100: "#f5ebc7",
          200: "#ead68d",
          300: "#dcbb53",
          400: "#caa330",
          500: "#b08925",
          600: "#8d6b1d",
          700: "#6a4f17",
          800: "#473411",
          900: "#26200b"
        },
        ink: {
          900: "#08070b",
          800: "#0d0c12",
          700: "#15131c",
          600: "#1d1b27",
          500: "#2b2838"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"]
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #f5ebc7 0%, #caa330 40%, #8d6b1d 100%)",
        "noise":
          "radial-gradient(circle at 30% 20%, rgba(202,163,48,0.10), transparent 50%), radial-gradient(circle at 80% 60%, rgba(176,137,37,0.08), transparent 55%)"
      }
    }
  },
  plugins: []
};

export default config;
