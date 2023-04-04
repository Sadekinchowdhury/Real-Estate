/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'nunito': ['nunito', 'sans-serif'],
      'MyFont': ['"My Font"', 'serif'],
      'Solway': ['"Solway', "serif"]

      // Ensure fonts with spaces have " " surrounding it.
    },

    extend: {
      colors:
      {
        pinkSoft: '#EDC7B7',
        wheat: '#EEE2DC',
        gray: '#BAB2B5',
        blue: '#BADFE7',
        blue2: '#697184',
        pink: '#D8CFD0',
        bg: '#B1A6A4',
        bgDark: '#413F3D',
        rgba: '#002550',

      },
    },
  },
  plugins: [require("daisyui")],
}

