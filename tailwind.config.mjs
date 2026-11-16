/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        soft: '#FAFAF8',
        blush: '#FDF2F4',
        blushpill: '#FCF4F6',
        ink: '#1A1A1A',
        body: '#555555',
        hairline: '#E8E8E8',
        line: '#DADADA',
        dark: '#191919',
        rose: '#A93A5B',
        rosedark: '#93324E',
        roselight: '#D96A8A',
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
        pill: '0 18px 50px -18px rgba(25, 25, 25, 0.28)',
      },
    },
  },
  plugins: [],
};
