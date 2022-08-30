const defaultTheme = require('tailwindcss/defaultTheme')

function hexToRgb (hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  const r = parseInt(result[1], 16)
  const g = parseInt(result[2], 16)
  const b = parseInt(result[3], 16)
  return result
      ? `${r}, ${g}, ${b}`
      : null
}

const _colors = {
  white: '#FFFFFF',
  'primary/primary': '#00BFFF',
  'neutral/tint80': '#E6EDF0',
  'neutral/tint90': '#F5F8FA',
  'neutral/surface': '#FDFEFF',
  'navy/dark': '#0D45A1',
  'disabled/bg-lighter': '#1B294B',
  'cotton/pink': '#FD64A3',
  'begonia/red': '#E81526',
  'begonia/light': '#FFCDD7'
}

const _letterSpacing = '-0.01em'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./wc__index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ..._colors,
        button: {
          // Primary
          'primary-hover': `linear-gradient(0deg, rgba(${hexToRgb(_colors.white)}, 0.12), rgba(${hexToRgb(_colors.white)}, 0.12)), ${_colors['primary/primary']}`,
          'primary-focus': `linear-gradient(0deg, rgba(${hexToRgb(_colors.white)}, 0.32), rgba(${hexToRgb(_colors.white)}, 0.32)), ${_colors['primary/primary']}`,
          'primary-active': `linear-gradient(0deg, rgba(${hexToRgb(_colors.white)}, 0.24), rgba(${hexToRgb(_colors.white)}, 0.24)), ${_colors['primary/primary']}`,
          // Dark Primary
          'dark-primary-hover': `linear-gradient(0deg, rgba(${hexToRgb(_colors['disabled/bg-lighter'])}, 0.12), rgba(${hexToRgb(_colors['disabled/bg-lighter'])}, 0.12)), ${_colors['neutral/tint90']}`,
          'dark-primary-focus': `linear-gradient(0deg, rgba(${hexToRgb(_colors['disabled/bg-lighter'])}, 0.32), rgba(${hexToRgb(_colors['disabled/bg-lighter'])}, 0.32)), ${_colors['neutral/tint90']}`,
          'dark-primary-active': `linear-gradient(0deg, rgba(${hexToRgb(_colors['disabled/bg-lighter'])}, 0.24), rgba(${hexToRgb(_colors['disabled/bg-lighter'])}, 0.24)), ${_colors['neutral/tint90']}`,
          'dark-primary-loading-circle': `rgba(${hexToRgb(_colors.white)}, 0.12)`,
          // Danger
          'danger-hover': `linear-gradient(0deg, rgba(${hexToRgb(_colors.white)}, 0.12), rgba(${hexToRgb(_colors.white)}, 0.12)), ${_colors['begonia/red']}`,
          'danger-focus': `linear-gradient(0deg, rgba(${hexToRgb(_colors.white)}, 0.32), rgba(${hexToRgb(_colors.white)}, 0.32)), ${_colors['begonia/red']}`,
          'danger-active': `linear-gradient(0deg, rgba(${hexToRgb(_colors.white)}, 0.24), rgba(${hexToRgb(_colors.white)}, 0.24)), ${_colors['begonia/red']}`,
          // Dark Danger
          'dark-danger-hover': `linear-gradient(0deg, rgba(${hexToRgb(_colors['neutral/surface'])}, 0.16), rgba(${hexToRgb(_colors['neutral/surface'])}, 0.16)), ${_colors['begonia/light']}`,
          'dark-danger-focus': `linear-gradient(0deg, rgba(${hexToRgb(_colors['neutral/surface'])}, 0.48), rgba(${hexToRgb(_colors['neutral/surface'])}, 0.48)), ${_colors['begonia/light']}`,
          'dark-danger-active': `linear-gradient(0deg, rgba(${hexToRgb(_colors['neutral/surface'])}, 0.8), rgba(${hexToRgb(_colors['neutral/surface'])}, 0.8)), ${_colors['begonia/light']}`,
          'dark-danger-loading-circle': `rgba(${hexToRgb(_colors.white)}, 0.12)`
        },
        spinner: {
          bar: _colors['cotton/pink'],
          border: _colors['neutral/tint80']
        }
      },
      fontFamily: {
        primary: ['Source Sans Pro', ...defaultTheme.fontFamily.sans]
      },
      fontSize: {
        'btn-xsm': ['10.75px', {
          letterSpacing: _letterSpacing,
          lineHeight: '11px'
        }],
        'btn-sm': ['12.29px', {
          letterSpacing: _letterSpacing,
          lineHeight: '12px'
        }],
        'btn-md': ['15.36px', {
          letterSpacing: _letterSpacing,
          lineHeight: '16px'
        }],
        'btn-lg': ['18.28px', {
          letterSpacing: _letterSpacing,
          lineHeight: '20px'
        }],
        'btn-xlg': ['21.09px', {
          letterSpacing: _letterSpacing,
          lineHeight: '24px'
        }]
      },
      letterSpacing: {
        primary: _letterSpacing
      },
      borderRadius: {
        'button-primary': '24px'
      },
      stroke: theme => ({
        broder: theme('colors.spinner.border')
      })
    }
  },
  plugins: [],
}
