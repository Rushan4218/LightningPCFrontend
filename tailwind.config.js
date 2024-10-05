/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F2F5FF",
          200: "#BED0FE",
          300: "#87ACF6",
          400: "#4E87E0",
          500: "#1B60B5",
          600: "#094E91",
          700: "#023F6E",
          800: "#002E4A",
          900: "#001A26",
        },
        secondary: {
          100: "#FEFFF2",
          200: "#FCFFBB",
          300: "#FFFD83",
          400: "#FFF24C",
          500: "#FFE014",
          600: "#C9A407",
          700: "#936E01",
          800: "#5C4000",
          900: "#261800",
        },
        neutral: {
          100: "#FAFAFC",
          200: "#EAEBEE",
          300: "#DADCE0",
          400: "#CACDD2",
          500: "#BBBFC4",
          600: "#93989D",
          700: "#6D7175",
          800: "#474B4E",
          900: "#222526",
        },
      },
    },
  },
  plugins: [],
};
