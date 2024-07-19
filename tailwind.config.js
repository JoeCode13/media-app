/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1E2D", // Un color oscuro para el fondo principal
        secondary: {
          DEFAULT: "#BB86FC", // Un color púrpura brillante para resaltar
          100: "#9E77ED",
          200: "#7B52D9",
        },
        black: {
          DEFAULT: "#121212", // Un negro más oscuro
          100: "#1E1E2D",
          200: "#232533",
        },
        gray: {
          100: "#A1A1AA", // Un gris claro para texto secundario
        },
      },
      fontFamily: {
        pthin: ["Poppins-Thin", "sans-serif"],
        pextralight: ["Poppins-ExtraLight", "sans-serif"],
        plight: ["Poppins-Light", "sans-serif"],
        pregular: ["Poppins-Regular", "sans-serif"],
        pmedium: ["Poppins-Medium", "sans-serif"],
        psemibold: ["Poppins-SemiBold", "sans-serif"],
        pbold: ["Poppins-Bold", "sans-serif"],
        pextrabold: ["Poppins-ExtraBold", "sans-serif"],
        pblack: ["Poppins-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
