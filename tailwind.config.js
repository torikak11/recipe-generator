/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "green-100": "#93AE9F",
      "green-200": "#3C5949",
      cream: "#FDFAF7",
      grey: "#8B8B8B",
      white: "#FFFFFF",
      "orange-100": "#F9E7CF",
      "orange-200": "#EDD1AB",
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
  ],
};
