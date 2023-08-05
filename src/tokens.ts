import { defineTokens } from '@pandacss/dev'
import { type Tokens } from '@pandacss/types'

const tokens: Tokens = defineTokens({
  colors: {
    brand: { value: '#39B94A' },
    gray: {
      100: { value: '#EFFAF0' },
      200: { value: '#CFDCD5' },
      300: { value: '#B0BEBA' },
      400: { value: '#94A09F' },
      500: { value: '#798485' },
      600: { value: '#60686B' },
      700: { value: '#484E51' },
      800: { value: '#313538' },
      900: { value: '#1C1E21' }
    },
    white: { value: '#FFFFFF' },
    black: { value: '#010206' },
    red: { value: '#FF7851' },
    yellow: { value: '#FFCE67' },
    green: { value: '#56CC9D' },
    blue: { value: '#6CC3D5' }
  },
  durations: {
    fast: { value: '200ms' },
    normal: { value: '300ms' },
    slow: { value: '400ms' }
  },
  easings: {
    linear: { value: 'cubic-bezier(0.0, 0.0, 1.0, 1.0)' },
    easeIn: { value: 'cubic-bezier(0.32, 0, 0.67, 0)' },
    easeOut: { value: 'cubic-bezier(0.33, 1, 0.68, 1)' },
    easeInOut: { value: 'cubic-bezier(0.65, 0, 0.35, 1)' }
  },
  fontSizes: {
    body: { value: '16px' },
    h1: { value: '40px' },
    h2: { value: '32px' },
    h3: { value: '28px' },
    h4: { value: '24px' },
    h5: { value: '20px' },
    h6: { value: '18px' },
    caption: { value: '14px' }
  },
  fonts: {
    body: { value: ['Open Sans', 'sans-serif'] },
    heading: { value: ['Permanent Marker', 'sans'] }
  },
  fontWeights: {
    light: { value: '300' },
    regular: { value: '400' },
    bold: { value: '700' }
  },
  lineHeights: {
    normal: { value: 'normal' },
    body: { value: '1.2' },
    heading: { value: '1.5' }
  },
  opacity: {
    0: { value: 0 },
    25: { value: 0.25 },
    50: { value: 0.5 },
    75: { value: 0.75 },
    100: { value: 1 }
  },
  radii: {
    none: { value: '0' },
    sm: { value: '4px' },
    md: { value: '8px' },
    lg: { value: '16px' },
    round: { value: '50%' }
  },
  spacing: {
    sm: { value: '8px' },
    md: { value: '16px' },
    lg: { value: '24px' }
  }
}
)

export default tokens
