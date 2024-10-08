import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['Cormorant Garamond', ...defaultTheme.fontFamily.sans],
        inter:['Inter',...defaultTheme.fontFamily.sans],
        body:["Manrope",...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}