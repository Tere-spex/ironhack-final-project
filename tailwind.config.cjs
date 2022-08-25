/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['Poppins']//cambio la serif para que ahora se aplique como poppins
    }
  },
  plugins: [],
};
