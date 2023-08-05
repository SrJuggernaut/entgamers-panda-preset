import { definePreset } from '@pandacss/dev'
import globalCss from './globalCss'
import buttonRecipe from './recipes/buttonRecipe'
import semanticTokens from './semanticTokens'
import tokens from './tokens'

const entGamersPandaPreset = definePreset({
  presets: ['@pandacss/dev/presets'],
  globalCss,
  theme: {
    breakpoints: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1400px'
    },
    tokens,
    semanticTokens,
    recipes: {
      button: buttonRecipe
    }
  }
})

export default entGamersPandaPreset
