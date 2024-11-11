/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p: "#cc7832",
        sl: "#ffc66d",
        bg2: "#27282c",
        gray: "#3d3e42",
        stone: "#aaaaaa",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
