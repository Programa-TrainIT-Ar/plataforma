/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html","./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors : {
      "bg-kingblue" : "#4169E1",
      "bg-purple": "#800080",
      "bg-yellow" : "#F1C40F",
    }
    
  },
  plugins: [],
}

