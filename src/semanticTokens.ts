import { defineSemanticTokens } from '@pandacss/dev'
import { type SemanticTokens } from '@pandacss/types'

const semanticTokens: SemanticTokens = defineSemanticTokens({
  colors: {
    primary: { value: '{colors.brand}' },
    primaryContrast: { value: '{colors.gray.900}' },
    success: { value: '{colors.green}' },
    successContrast: { value: '{colors.gray.900}' },
    info: { value: '{colors.blue}' },
    infoContrast: { value: '{colors.gray.900}' },
    warning: { value: '{colors.yellow}' },
    warningContrast: { value: '{colors.gray.900}' },
    danger: { value: '{colors.red}' },
    dangerContrast: { value: '{colors.gray.900}' },
    text: { value: '{colors.gray.100}' },
    background: { value: '{colors.gray.900}' },
    surface: { value: '{colors.gray.800}' },
    border: { value: '{colors.gray.500}' },
    muted: { value: '{colors.gray.300}' }
  }
})

export default semanticTokens
