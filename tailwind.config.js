/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'sm': '0px 8px 8px -6px rgba(0,0,0,0.7);',
        'md': '0px 16px 16px -12px rgba(0,0,0,0.7);'
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