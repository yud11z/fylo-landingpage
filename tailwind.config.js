/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    screens: {
      'mobile': {'max': '414px'},
      'desktop': '1024px',
      
    },
    extend: {
      colors: {
        verydarkblue: 'hsl(var(--color-verydarkblue) / <alpha-value>)',
        desaturatedkblue: 'hsl(var(--color-desaturatedblue) / <alpha-value>)',
        brightblue: 'hsl(var(--color-brightblue) / <alpha-value>)',
        moderatecyan: 'hsl(var(--color-moderatecyan) / <alpha-value>)',
        lightgrayishblue: 'hsl(var(--color-lightgrayishblue) / <alpha-value>)',
        lightgray: 'hsl(var(--color-lightgray) / <alpha-value>)',
      },
      fontFamily: {
        raleways: ['Raleway'],
        opensans: ['Open Sans'],
      }
    },
  },
  plugins: [],
}
