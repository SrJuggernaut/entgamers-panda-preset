import { definePreset } from '@pandacss/dev'
import globalCss from './globalCss'
import { keyframes } from './keyframes'
import containerPattern from './patterns/containerPattern'
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
import skeletonRecipe from './recipes/skeletonRecipe'
import tableRecipe from './recipes/tableRecipe'
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
      dropZone: dropZoneRecipe,
      iconButton: iconButtonRecipe,
      input: inputRecipe,
      listGroup: listGroupRecipe,
      skeleton: skeletonRecipe,
      table: tableRecipe,
      tooltip: tooltipRecipe,
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
