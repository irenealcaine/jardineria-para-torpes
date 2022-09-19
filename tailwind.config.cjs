/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/images/hero2.webp')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        'caveat': ['Caveat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
