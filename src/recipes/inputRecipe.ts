import { defineRecipe } from '@pandacss/dev'

const inputRecipe = defineRecipe({
  className: 'input',
  description: 'Input styles',
  base: {
    boxSizing: 'border-box',
    padding: '10px 16px',
    margin: 'small',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: 'border',
    borderRadius: 'small',
    bg: 'gray.100',
    color: 'gray.900',
    transition: 'all 0.2s ease-in-out',
    _focus: {
      borderColor: 'primary !important',
      outlineColor: 'primary',
      outlineStyle: 'solid',
      outlineWidth: '1px'
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed'
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
      warning: { borderColor: 'warning' },
      danger: { borderColor: 'danger' }
    }
  }
})

export default inputRecipe
