import { definePreset } from '@pandacss/dev'
import globalCss from './globalCss'
import containerPattern from './patterns/containerPattern'
import buttonRecipe from './recipes/buttonRecipe'
import iconButtonRecipe from './recipes/iconButtonRecipe'
import inputRecipe from './recipes/inputRecipe'
import typographyRecipe from './recipes/typographyRecipe'
import semanticTokens from './semanticTokens'
import tokens from './tokens'

const entGamersPandaPreset = definePreset({
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
      button: buttonRecipe,
      iconButton: iconButtonRecipe,
      input: inputRecipe,
      typography: typographyRecipe
    }
  },
  patterns: {
    extend: {
      container: containerPattern
    }
  }
})

export default entGamersPandaPreset
