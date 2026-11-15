/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FFFFFF',
        soft: '#FAFAF8',
        ink: '#1A1A1A',
        muted: '#666666',
        hairline: '#E7E7E2',
        bronze: '#96784A',
        bronzelight: '#C9A97E',
        bronzedark: '#7A5F38',
      },
      fontFamily: {
        display: ['"EB Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.32em',
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(26, 26, 26, 0.22)',
        card: '0 10px 40px -12px rgba(26, 26, 26, 0.14)',
      },
    },
  },
  plugins: [],
};
