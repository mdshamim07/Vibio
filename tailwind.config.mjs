/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
