/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        posts: '256px 1fr', // Define your custom grid here
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        base: '1rem', // 16px
      },
      fontWeight: {
        normal: 400,
      },
    },
  },
  plugins: [],
}
