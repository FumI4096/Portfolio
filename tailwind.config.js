/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-semibold': ["Poppins-SemiBold", 'sans-serif'],
        'poppins-medium': ["Poppins-Medium", 'sans-serif'],
        'poppins-light': ["Poppins-Light", 'sans-serif'],
        'anton-regular': ["Anton-Regular", 'sans-serif']
      },
      colors: {
        'primary-gray-1': '#45525a',
        'primary-gray-2': '#2c3a42',
        'primary-gray-3': '#aaaaaa',
        'secondary-blue-1': '#4492f8',
        'secondary-blue-2': '#80cff6',
        'gray-hover-1': '#d7d7d7'
        
      },
      spacing: {
        //padding
        '14rem': '14rem', 
        '10rem': '10rem', 
        //height
        '1000': '1000px', 
        
      },
      animation: {
        floatOne: 'float 1.5s ease-in-out alternate infinite',
        floatTwo: 'float 2s ease-in-out alternate infinite'
      },
      keyframes:{
        float:{
          '0%': {
            transform: 'translateY(-7%)',

          },
          '100%': {
            transform: 'translateY(0%)',
          }
        }
      },
      boxShadow: {
        'inset-custom-1': '5px 5px 20px 10px rgba(0, 0, 0, 0.15) inset, -5px -5px 20px 10px rgba(0, 0, 0, 0.15) inset, 20px 20px 0px 0px #2c3a42'
      }
    },
  },
  plugins: [],
}

