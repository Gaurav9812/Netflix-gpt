/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      animation:{
          gradient: 'gradient 1s ease-in-out infinite'
      },
      keyframes:{
        gradient:{
          '0%, 100%': { opacity: 1 },
          '50%': { opacity:0.5 },
        }
      }
    },
  },
  plugins: [],
}

