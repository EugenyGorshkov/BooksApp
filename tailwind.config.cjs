/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('./src/img/bg-main.jpg')",
      },
    },
  },
  plugins: [],
  
}
