/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'black-1': '#1E213A',
        'black-2': '#100E1D',
        'gray-1': '#6E707A',
        'blue-1': '#3C47E9'
      },
      backgroundImage: {
        'cloud-four': "url('/assets/Cloud-background.png')"
      }, 
      fontFamily: {
        'Raleway': ['Raleway', 'sans-serif']
      }
    },
  },
  plugins: [],
}
