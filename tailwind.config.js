/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "ray-dark": "#131313",
      },
      fontFamily:{
        inter :["Inter","sans-serif"]
      }
    },
  },
  plugins: [],
};
