module.exports = {
  purge: [],
  prefix: 'tw-',
  darkMode: false, // or 'media' or 'class'
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
        primary: '#F97C46',
        secondary: '#2A2F32',
        tertiary: '#FBD214'
      },
      inset: {
        '17': '68px',
        '22': '88px',
        '26': '104px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
