/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FAF6F0',
        cream: '#F3EDE3',
        sand: '#E8DCC8',
        espresso: '#1C1917',
        cocoa: '#292524',
        smoke: '#57534E',
        gold: '#B08D57',
        goldlight: '#D4BC8E',
        golddark: '#8F6F42',
        sage: '#8A9B7E',
        blush: '#EFE6DC',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(28, 25, 23, 0.25)',
        card: '0 10px 40px -12px rgba(28, 25, 23, 0.18)',
      },
    },
  },
  plugins: [],
};
