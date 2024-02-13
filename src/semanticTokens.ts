import { defineSemanticTokens } from '@pandacss/dev'
import { type SemanticTokens } from '@pandacss/types'

const semanticTokens: SemanticTokens = defineSemanticTokens({
  colors: {
    primary: {
      DEFAULT: { value: '{colors.brand}' },
      contrast: { value: '{colors.gray.900}' }
    },
    success: {
      DEFAULT: { value: '{colors.green}' },
      contrast: { value: '{colors.gray.900}' }
    },
    info: {
      DEFAULT: { value: '{colors.blue}' },
      contrast: { value: '{colors.gray.900}' }
    },
    warning: {
      DEFAULT: { value: '{colors.yellow}' },
      contrast: { value: '{colors.gray.900}' }
    },
    danger: {
      DEFAULT: { value: '{colors.red}' },
      contrast: { value: '{colors.gray.900}' }
    },
    text: { value: '{colors.gray.100}' },
    background: { value: '{colors.gray.900}' },
    surface: { value: '{colors.gray.800}' },
    border: { value: '{colors.gray.500}' },
    muted: { value: '{colors.gray.300}' }
  }
})

export default semanticTokens
