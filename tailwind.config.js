/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': "#171738",
        'background': '#141155',
        'text': "#EBEBEB",
        'primary': '#35d646',
        'secondary': '#2364A9',
      },
      fontFamily: {
        'sans': "Quicksand",
      },
      screens: {
        'xs': "550px",
        '2xs': "440px",
        'xl': "1360px",
        '2xl': "1770px",
      },
      backgroundImage: {
        'starry-night': "url('/starry-night.svg')",
        'moon-background': "url('/moon-background.jpg')",
      },
    },
  },
  plugins: [],
}