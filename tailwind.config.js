/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dots' : "url('/public/dotsbg.png')",
      },
      colors :{
        "dark-blue" : "#181D3D",
        "yellow" : "#FDBF45",
        "white" : "#FFFFFF",
        "graywhite" : "#D9D9D9",
        "black"  : "#000000",
        "root" : "#f6f1f0",
        "deepred" : "#b20000",
        "deepblue" : "#46739e",
        "deepgreen" : "#4d7a56",
        "redonebg" : "#dd2628",
        "redtwobg" : "#a75c50",
        "redthreebg" : "#e51d23",
        "blueonebg" : "#0f083b",
        "bluetwobg" : "#37678e",
        "blueshadow" : "#dedede",
      },
    },
  },
  plugins: [],
}