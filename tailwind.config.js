/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        orange: '#D17842',
        home: '#0C0F14',
      },
    },
  },
  plugins: [],
};
