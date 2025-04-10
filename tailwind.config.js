const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          bgPrimary: "var(--color-bg-primary)",
          tBase: "var(--color-text-base)",
          movingText: "var(--color-movingText)",
          secondaryColor: "var(--color-secondaryColor)",
      }
    },
  },
  plugins: [],
};
