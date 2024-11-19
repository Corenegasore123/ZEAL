/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],  
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        customGray: {
          primary: '#434343', 
          background: '#EDEDED',
        },
        myGreen: "#12B7B6"
      },
    },
  },
  plugins: [],
}

