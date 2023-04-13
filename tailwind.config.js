/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
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
        'text-color':'#7B88A8',
        'white-color':'#ffffff',
        'bg-color':'#fefefe',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-80%)' },
        }
      },
      animation : {
        'marquee-infinite' : 'marquee 5s linear infinite',
      },
    },
  },
  plugins: [],
}
