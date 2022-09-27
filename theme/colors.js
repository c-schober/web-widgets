const palette = {
  gray: '#3b3b3b',
  greige: '#ede9e3',
  yellow: '#ffff5a',

  'ed-pam-cyan-50': '#f4fafa',
  'ed-pam-cyan-300': '#d3eeee',

  'ed-red-50': '#faefed',
  'ed-red-300': '#ecdbd8',

  'ed-green-50': '#f0f8f1',
  'ed-green-300': '#d6ead9',
  'ed-green-500': '#abbbad',

  'ed-purple-50': '#eeeffc',
  'ed-purple-300': '#dddeee',

  'ed-blue-50': '#e8eff8',
  'ed-blue-300': '#d1dcea',

  'ed-brown-50': '#f6f5f1',
  'ed-brown-300': '#e3e1d6',

  'gold-50': '#fffbe6',
  'gold-100': '#fff1b8',
  'gold-200': '#ffe58f',
  'gold-300': '#ffd666',

  'blue-50': '#e6f7ff',
  'blue-100': '#bae7ff',
  'blue-200': '#91d5ff',
  'blue-300': '#69c0ff',
  'blue-400': '#40a9ff',
  'blue-500': '#1890ff',
  'blue-600': '#096dd9',
  'blue-700': '#0050b3',
  'blue-800': '#003a8c',
  'blue-900': '#002766',

  'red-50': '#fff1f0',
  'red-100': '#ffccc7',
  'red-200': '#ffa39e',
  'red-300': '#ff7875',
  'red-400': '#ff4d4f',
  'red-500': '#f5222d',
  'red-600': '#cf1322',
  'red-700': '#a8071a',
  'red-800': '#820014',
  'red-900': '#5c0011',

  'green-50': '#E8FCEA',
  'green-100': '#D9F7BE',
  'green-200': '#B7EB8F',
  'green-300': '#95DE64',
  'green-400': '#73D13D',
  'green-500': '#52C41A',
  'green-600': '#389E0D',
  'green-700': '#237804',
  'green-800': '#135200',
  'green-900': '#092B00',

  white: '#ffffff',
  'gray-50': '#fafafa',
  'gray-100': '#f5f5f5',
  'gray-200': '#f0f0f0',
  'gray-300': '#d9d9d9',
  'gray-400': '#bfbfbf',
  'gray-500': '#8c8c8c',
  'gray-600': '#595959',
  'gray-700': '#434343',
  'gray-800': '#262626',
  'gray-900': '#1f1f1f',
  'gray-950': '#141414',
  black: '#000000',
}

const brands = {
  primary: palette['yellow'],
  secondary: palette['gray-600'],

  'ed-pam-cyan-50': palette['ed-pam-cyan-50'],
  'ed-pam-cyan-300': palette['ed-pam-cyan-300'],
  'ed-red-50': palette['ed-red-50'],
  'ed-red-300': palette['ed-red-300'],
  'ed-green-50': palette['ed-green-50'],
  'ed-green-300': palette['ed-green-300'],
  'ed-green-500': palette['ed-green-500'],
  'ed-purple-50': palette['ed-purple-50'],
  'ed-purple-300': palette['ed-purple-300'],
  'ed-blue-50': palette['ed-blue-50'],
  'ed-blue-300': palette['ed-blue-300'],
  'ed-brown-50': palette['ed-brown-50'],
  'ed-brown-300': palette['ed-brown-300'],
}

const backgrounds = {
  transparent: 'transparent',
  default: palette['white'],
  panel: palette['gray-50'],
  accent: palette['ed-brown-50'],
  divider: palette['gray-200'],
  invert: palette['gray'],
  'invert-panel': palette['gray-600'],
  'accent-panel': palette['gold-100'],
  info: palette['blue-50'],
  input: palette['gray-400'],
  disturber: palette['ed-green-500'],
  success: palette['green-500'],
  error: palette['red-300'],
  callout: palette['green-50'],
  alert: palette['red-300'],
  focus: palette['blue-500'],
}

const text = {
  transparent: 'transparent',
  default: palette['gray'],
  help: palette['gray-500'],
  primary: palette['yellow'],
  secondary: palette['gray-700'],
  invert: palette['white'],
  info: palette['blue-700'],
  disturber: palette['ed-green-500'],
  success: palette['green-600'],
  error: palette['red-500'],
  callout: palette['green-600'],
  alert: palette['red-500'],
  focus: palette['blue-500'],
}

module.exports = {
  text,
  brands,
  backgrounds,
}