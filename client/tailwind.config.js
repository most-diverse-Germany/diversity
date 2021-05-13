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
        imagine: {
          DEFAULT: '#e0296c',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
