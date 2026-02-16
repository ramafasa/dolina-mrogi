/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        forest: '#1F3A2E',
        honey: '#C89B3C',
        cream: '#F6F0E3',
        'warm-brown': '#3B2A1A',
      },
      fontFamily: {
        serif: ['Cormorant', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
