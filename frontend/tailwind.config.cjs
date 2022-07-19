/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Jasmine: "#F9D783",
        Chestnut: "#964F25",
        EearieBlack: "#191919",
        Alabaster: "#F6F1E7",
        GradientBlack: "rgba(0, 0, 0, 0.02)",
      },
      fontFamily: {
        rambla: ["Rambla", "sans-serif"],
        inter: ["inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
