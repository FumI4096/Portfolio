/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gray-1': '#45525a',
        'primary-gray-2': '#2c3a42',
        'secondary-blue-1': '#4492f8',
        'gray-hover-1': '#d7d7d7'
        
      },
      spacing: {
        //padding
        '12rem': '12rem', 
        '10rem': '10rem', 
        //height
        '1000': '1000px', 
        
      }
    },
  },
  plugins: [],
}

