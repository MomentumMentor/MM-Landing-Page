/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0D1B3F',
          700: '#162949',
          800: '#0F1E38',
          900: '#0A1429',
        },
        gold: {
          DEFAULT: '#F2B81C',
          600: '#D9A419',
        },
        teal: {
          DEFAULT: '#14B8A6',
        },
      },
    },
  },
  plugins: [],
}
