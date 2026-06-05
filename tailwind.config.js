/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        luxury: {
          charcoal: "#0a0a0a",
          dark: "#121212",
          gray: "#1e1e1e",
          lightGray: "#2a2a2a",
          cream: "#faf8f5",
          ivory: "#f5f2eb",
          sand: "#ebe6da",
          gold: {
            DEFAULT: "#b89047",
            light: "#c5a059",
            dark: "#aa7c11",
            glow: "#d4af37"
          },
          emerald: {
            DEFAULT: "#114b34",
            light: "#23825b",
            dark: "#0b3022",
            mint: "#e8f3ee"
          }
        }
      },
      fontFamily: {
        sans: ["Outfit", "Inter", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"]
      },
      boxShadow: {
        glow: "0 0 15px rgba(184, 144, 71, 0.2)",
        "glow-lg": "0 0 25px rgba(184, 144, 71, 0.35)",
        luxury: "0 4px 30px rgba(0, 0, 0, 0.4)",
      },
      borderRadius: {
        luxury: "8px",
      }
    },
  },
  plugins: [],
}
