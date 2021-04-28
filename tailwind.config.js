const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: [
    './public/**/*.html',
    './public/**/*.js',
    './src/**/*.vue'
  ],
  prefix: 'tw-',
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        teal: colors.teal,
        primary: '#F97C46',
        secondary: '#2A2F32',
        tertiary: '#FBD214',
      },
      inset: {
        '17': '68px',
        '22': '88px',
        '26': '104px',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['odd', 'even'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
