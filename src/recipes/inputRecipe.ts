import { defineRecipe } from '@pandacss/dev'

const inputRecipe = defineRecipe({
  className: 'input',
  description: 'Input styles',
  base: {
    boxSizing: 'border-box',
    padding: '10px 16px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'border',
    borderRadius: 'small',
    bg: 'gray.100',
    color: 'gray.900',
    transition: 'all 0.2s ease-in-out',
    _focus: {
      borderColor: 'primary',
      outlineColor: 'primary',
      outlineStyle: 'solid',
      outlineWidth: '1px'
    },
    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'gray.800',
      color: 'gray.700',
      borderColor: 'border'
    },
    '&::placeholder': {
      color: 'gray.500'
    }
  },
  variants: {
    fullWidth: {
      true: { width: 'calc(100% - (token(spacing.small) * 2))' }
    },
    status: {
      success: { borderColor: 'success' },
      info: { borderColor: 'info' },
      warning: { borderColor: 'warning' },
      danger: { borderColor: 'danger' }
    },
    margin: {
      none: { marginBlock: 'none' },
      small: { marginBlock: 'small' },
      medium: { marginBlock: 'medium' },
      large: { marginBlock: 'large' }
    }
  }
})

export default inputRecipe
