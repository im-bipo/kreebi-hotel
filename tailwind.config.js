/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    screens: {
      ssm: '380px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors :{
      primary:'#2d4765ff',
      primaryDark:'#1b2e45',
      active: '#c8ff8d'
      }
    },
  },
  plugins: [],
}

