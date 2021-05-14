module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  prefix: 'tw-',
  theme: {
    fontFamily: {
      // sans: ['Arial'],
      tagline: ['Arial'],
    },
    extend: {
      colors: {
        imagineText: {
          DEFAULT: '#525252',
        },
        imagineRed: {
          DEFAULT: '#e0296c',
        },
        imaginePink: {
          DEFAULT: '#ec6a8e',
        },
        imagineGreen: {
          DEFAULT: '#56b39e',
        },
        imagineBlue: {
          DEFAULT: '#3c7695',
        },
        imaginePurple: {
          DEFAULT: '#954e8b',
        },
        imagineYellow: {
          DEFAULT: '#f7a559',
        },
        imagineLight: {
          DEFAULT: '#fce7cc',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}



// {
// imagineText: #525252 
// imagineRed: #e0296c
// imaginePink: #ec6a8e
// imagineGreen: #56b39e
// imagineBlue: #3c7695
// imaginePurple: #954e8b
// imagineYellow: #f7a559
// imagineLight: #fce7cc
// }