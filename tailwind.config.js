/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "pulse-01": {
          "0%, 100%": {height: "80px", backgroundColor: "#3C5949"},
          "20%, 80%": {height: "80px"},
          "40%": {height: "120px", backgroundColor: "#93AE9F"},
        },
      },
      animation: {
        "pulse-01": "pulse-01 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 0s infinite",
        "pulse-02": "pulse-01 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 200ms infinite",
        "pulse-03": "pulse-01 1200ms cubic-bezier(0.445, 0.05, 0.55, 0.95) 400ms infinite",
      }
    },
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
