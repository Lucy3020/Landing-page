/** @type {import('tailwindcss').Config} */
module.exports = {
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [],
}
