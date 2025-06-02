/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // aggiungi altri percorsi se avrai cartelle diverse
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
  ],
}