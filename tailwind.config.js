/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#07beb8",
        hover: "#3dccc7",
        bgColor: "#f3f4f6",
        boxColor: "#f9f9f9",
        secondaryBg: "#e0e0e0",
      },
    },
  },
  plugins: [],
};
