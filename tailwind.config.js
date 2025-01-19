/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        'purpul':"#8e87cd",
        'blue':"#136df5",
        'lightBlue':"#f1f5f9",
      }
    },
  },
  plugins: [],
}

