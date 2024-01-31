/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: {
        100: '#2C3878',
        90: '#566093',
        75: '#8088AE',
        50: '#ABAFC9',
        25: '#D5D7E4',
        10: '#EAEBF2',
      },
      black: {
        100: '#000000',
        70: '#141414',
        50: '#333333',
        30: '#3C3C3C',
        10: '#9C9C9C',
      },
      'gray-light': '#D9D9D9',
      white: '#ffffff',
    },
    extend: {
      borderRadius: {
        none: '0',
        50: '50%',
      },
    },
  },
  plugins: [],
};
