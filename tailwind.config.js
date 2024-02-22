/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      12: "12px",
      14: "14px",
      16: "16px",
      18: "18px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      36: "36px",
      48: "48px",
      52: "52px",
      60: "60px",
      72: "72px",
    },
    colors: {
      primary: {
        100: "#2C3878",
        90: "#566093",
        75: "#8088AE",
        50: "#ABAFC9",
        25: "#D5D7E4",
        10: "#EAEBF2",
      },
      black: {
        100: "#000000",
        70: "#141414",
        50: "#333333",
        30: "#3C3C3C",
        10: "#9C9C9C",
      },
      grayLight: "#D9D9D9",
      white: "#ffffff",
    },
    extend: {
      borderRadius: {
        none: "0",
        50: "50%",
      },
    },
  },
  plugins: [],
};
