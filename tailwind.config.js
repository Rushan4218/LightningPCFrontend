/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#F2FFFE",
          200: "#C1FEF6",
          300: "#8FFBE5",
          400: "#5CF1CA",
          500: "#2ADEA5",
          600: "#0EB073",
          700: "#03824B",
          800: "#00542B",
          900: "#002611",
        },
        secondary: {
          100: "#FFF8F2",
          200: "#FFD8C3",
          300: "#FDB293",
          400: "#F78662",
          500: "#ED5432",
          600: "#BB2712",
          700: "#8A0E05",
          800: "#580201",
          900: "#260000",
        },
        neutral: {
          100: "#FAFCFC",
          200: "#E9EDEC",
          300: "#D8DEDB",
          400: "#C8CFCB",
          500: "#B8BFBB",
          600: "#919994",
          700: "#6B736D",
          800: "#464D48",
          900: "#222623",
          1000: "#040408"
        },
      },
    },
  },
  plugins: [],
};
