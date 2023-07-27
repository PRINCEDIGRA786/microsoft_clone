/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        tab: { "max": "870px" },
        phot: { "min": "1024px", "max": "1200px" }
      }
    },
  },
  plugins: [],
}