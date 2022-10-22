/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#94D237',
        secondary: '#005261',
        tertiary: '#44808A',
        background: '#FDFCFC',
      },
    },
  },
  plugins: [],
};
