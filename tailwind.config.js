/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': "#000000",
        'text': "#EEEEEE",
      },
      fontFamily: {},
      screens: {
        'xs': "550px",
      },
      backgroundImage: {
        'hero-desktop': "url('/bg-earth-moon.svg')",
        'hero-mobile': "url('/bg-earth-moon-mobile.svg')",
        'starry-night': "url('/bg-stars.svg')",
      },
      backgroundSize: {
        '300%': "300%",
        '200%': "200%",
      },
    },
  },
  plugins: [],
}