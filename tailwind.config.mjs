/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FEFCEA',
        paper: '#FBFBFB',
        ink: '#222222',
        body: '#333333',
        main: '#585858',
        hairline: 'rgba(88,88,88,0.48)',
        dark: '#191919',
        blush: '#D0B8AC',
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(25, 25, 25, 0.25)',
        card: '0 10px 40px -12px rgba(25, 25, 25, 0.14)',
      },
    },
  },
  plugins: [],
};
