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
        'starry-night': "url('/starry-night.svg')",
      },
      backgroundSize: {
        '1000%': "1000%",
        '500%': "500%",
        '300%': "300%",
      },
      keyframes: {
        'pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'pan-bg': 'pan linear 25s infinite reverse',
      },
    },
  },
  plugins: [],
}