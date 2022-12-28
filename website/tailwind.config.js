// tailwind.config.js
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'very-dark-blue': '#000B26',
        'very-light-blue': '#DADEEA',
        'dark-blue': '#001E6A',
      },
      fontFamily: {
        sans: ['var(--font-rubik)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}