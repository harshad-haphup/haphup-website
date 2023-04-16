/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'primary-color':'#4C6FFF',
        'secondary-color':'#4877fb',
        'accent-color':'#3cedb7',
        'heading-color':'#2D3958',
        // 'text-color':'#7B88A8',
        'text-color':'#637193',
        'white-color':'#ffffff',
        'bg-color':'#fefefe',
        'card-color':'#ffffff',


        'dark-card-color':'#1F1F22',
        'dark-primary-color':'#001053',
        'dark-secondary-color':'#02164f',
        'dark-accent-color':'#064431',
        'dark-heading-color':'#c1c9df',
        'dark-text-color':'#7B88A8',
        'dark-white-color':'#404040',
        'dark-bg-color':'#121212'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation : {
        'marquee-infinite' : 'marquee 20s linear infinite',
      },
    },
  },
  plugins: [],
}
)