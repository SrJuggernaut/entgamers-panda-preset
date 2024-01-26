import { definePreset } from '@pandacss/dev'
import globalCss from './globalCss'
import { keyframes } from './keyframes'
import containerPattern from './patterns/containerPattern'
import skeletonPattern from './patterns/skeletonPattern'
import alertRecipe from './recipes/alertRecipe'
import buttonGroupRecipe from './recipes/buttonGroupRecipe'
import buttonRecipe from './recipes/buttonRecipe'
import cardRecipe from './recipes/cardRecipe'
import chipRecipe from './recipes/chipRecipe'
import collapseRecipe from './recipes/collapseRecipe'
import dropZoneRecipe from './recipes/dropZoneRecipe'
import iconButtonRecipe from './recipes/iconButtonRecipe'
import inputRecipe from './recipes/inputRecipe'
import listGroupRecipe from './recipes/listGroupRecipe'
import tooltipRecipe from './recipes/tooltipRecipe'
import typographyRecipe from './recipes/typographyRecipe'
import semanticTokens from './semanticTokens'
import tokens from './tokens'

const entGamersPandaPreset = definePreset({
  globalCss,
  theme: {
    keyframes,
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
      alert: alertRecipe,
      button: buttonRecipe,
      buttonGroup: buttonGroupRecipe,
      card: cardRecipe,
      chip: chipRecipe,
      collapse: collapseRecipe,
      iconButton: iconButtonRecipe,
      input: inputRecipe,
      listGroup: listGroupRecipe,
      tooltip: tooltipRecipe,
      typography: typographyRecipe
    }
  },
  patterns: {
    extend: {
      container: containerPattern,
      skeleton: skeletonPattern
    }
  }
})

export default entGamersPandaPreset
