/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
        ptSans: ["PT Sans", "sans-serif"],
      },
      boxShadow: {
        'banner': '180px 30px 140px 0px ;',
        'favChannel': '0px 0px 10px 2px ;',
        'inputField': '0 0 6px rgb(236,109,4)',
        'detail':'inset 0 0 20px rgb(236,109,4)',
      },
      backgroundImage:{
        'yellowGradient1':'linear-gradient(0deg, rgba(237,185,58,1) 0%, rgba(255,255,255,1) 180%);  ',
        'yellowGradient2':'linear-gradient(0deg, rgba(237,185,58,1) 23%, rgba(255,255,255,1) 180%);',
        'grayGradient':'linear-gradient(0deg, #e6e6e6, #f7f7f7 );',
        'categGradient':'radial-gradient(ellipse at left top,rgba(29,79,115,.2) 10%,#0f171e 80%),radial-gradient(ellipse at left bottom,rgba(29,79,115,.1) 20%,#0f171e 80%)',
      }
    },
  },
  plugins: [],
}
