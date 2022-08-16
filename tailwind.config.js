/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: "#FF8B50",
          50: "#FFFFFF",
          100: "#FFF7F3",
          200: "#FFDCCA",
          300: "#FFC1A2",
          400: "#FFA679",
          500: "#FF8B50",
          600: "#FF6618",
          700: "#DF4B00",
          800: "#A73800",
          900: "#6F2500",
        },
      },

      fontFamily: {
        bree: ["bree", "sans-serif"],
        lato: ["lato", "sans-serif"],
      },
    },
  },
  plugins: [
    require("prettier-plugin-tailwindcss"),
    require("@tailwindcss/forms"),
  ],
};
