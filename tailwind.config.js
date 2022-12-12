/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#98CA3F",
        blue: "#121F3D",
        darkblue: "#0A1122",
        skyblue: "#33B1FF"
      }
    },
  },
  plugins: [],
}
