/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: '#ffffff',
      red: '#c56666',
      'red-active': '#9d3a3a',
      'red-light': '#ffcccb',
      blue: '#669dc5',
      'blue-active': '#3b77a3',
      'light-blue': '#d6e6f1',
      'blue-gray': '#eaf1f6',
      gray: colors.gray,
      black: colors.black,
      green: colors.green
    },
    fontFamily: {
      bold: ['Avenir-Black'],
      roman: ['Avenir-Roman'],
      italic: ['Avenir-Italic'],
    },
    extend: {
      screens: {
        'xs': '450px',
      },
    },
  },
  plugins: [],
}
