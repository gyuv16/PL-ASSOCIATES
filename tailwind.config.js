/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003366',
          dark: '#002244',
          light: '#004080',
        },
        accent: {
          DEFAULT: '#C8962E',
          dark: '#B8841E',
          light: '#D4A84B',
        },
        brand: {
          bg: '#FAF8F3',
          'bg-secondary': '#F0EDE6',
          dark: '#1A1A2E',
          muted: '#6B6B7B',
          border: '#E2DDD6',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'arch': '12rem 12rem 0.75rem 0.75rem',
      },
    },
  },
  plugins: [],
};
