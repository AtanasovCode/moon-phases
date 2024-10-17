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
      fontFamily: {},
      screens: {
        'xs': "550px",
        'xl': "1600px",
      },
      backgroundImage: {
        'hero-desktop-xl': "url('/bg-earth-moon-xl.svg')",
        'hero-desktop': "url('/bg-earth-moon.svg')",
        'hero-mobile': "url('/bg-earth-moon-mobile.svg')",
        'starry-night': "url('/starry-night.svg')",
      },
      backgroundSize: {
        '1000%': "1000%",
        '500%': "500%",
        '300%': "300%",
        '200%': "200%",
        '100%': "100%",
      },
      keyframes: {
        'pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'pan-bg': 'pan linear 35s infinite reverse',
      },
    },
  },
  plugins: [],
}