/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'game-of-squids': ['Squid', 'sans-serif'],
      },
    },
  },
  plugins: [],
}