/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Noto: ["Noto Sans"],
    },
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [],
};
