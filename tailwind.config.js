/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arima: ['Arima', 'cursive'],
      },
    },
  },
  plugins: [],
};
