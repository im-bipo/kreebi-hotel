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
      primary:'#2f4664',
      primaryDark:'#1b2e45',
      active: '#c8ff8d',
      stdBgOne : '#ecf0f7',
      stdBgTwo : '#fefeff',
      Active:'#95C561',
      }
    },
  },
  plugins: [],
}

