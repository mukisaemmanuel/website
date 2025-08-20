/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backdropBlur: {
        xs: "2px",
      },
      colors: {
        "glass-dark": "rgba(255, 255, 255, 0.1)",
        "glass-light": "rgba(255, 255, 255, 0.2)",
        "glass-border": "rgba(255, 255, 255, 0.2)",
      },
      animation: {
        press: "press 0.1s ease-in-out",
      },
      keyframes: {
        press: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
