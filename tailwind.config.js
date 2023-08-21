/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'md': '0px 15px 15px -11px rgba(0,0,0,0.75);'
      },
      fontFamily: {
        'Righteous': ['Righteous', 'cursive'],
        'Inter': ['Inter', 'sans']
      },
    },

    container:{
      center:true,
    },
  },
  plugins: [],
}