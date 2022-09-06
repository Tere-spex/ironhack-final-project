/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['Poppins']//cambio la serif para que ahora se aplique como poppins
    }
  },
  plugins: [],
};
