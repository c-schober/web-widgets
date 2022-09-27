const edColors = require('./theme/colors')

const colors = Object.assign({}, edColors.brands, edColors.backgrounds)
const textColor = Object.assign({}, edColors.brands, edColors.text)

module.exports = {
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        lg: '3.5rem',
        xl: '5rem',
        '2xl': '5rem',
      },
      screens: {
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
      },
    },

    minWidth: {
      auto: 'auto',
    },

    fontFamily: {
      display: ['semplicitapro', 'Arial', 'sans-serif'],
      body: ['Open Sans', 'sans-serif'],
    },

    colors,
    textColor,

    extend: {
      padding: {
        full: '100%',
      },
      boxShadow: {
        top: '0px -7px 12px rgba(0, 0, 0, 0.05);',
      },
      screens: {
        xs: '375px',
      },
    },
  },
}
