import { defineRecipe } from '@pandacss/dev'

const iconButtonRecipe = defineRecipe({
  className: 'icon-button',
  description: 'Icon button styles',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '1',
    cursor: 'pointer',
    transitionProperty: 'all',
    transitionDuration: 'fast',
    transitionTimingFunction: 'easeInOut',
    borderRadius: 'round',
    gap: '10px',
    fontSize: 'inherit',
    color: 'inherit',
    _hover: {
      boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'rgba(207, 220, 213, 0.05)'
    },
    _active: {
      boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25) inset',
      transform: 'translate(2px, 2px)'
    },
    _disabled: {
      cursor: 'not-allowed',
      backgroundColor: 'gray.800',
      color: 'gray.700',
      boxShadow: 'none',
      border: 'none',
      _hover: {
        boxShadow: 'none',
        backgroundColor: 'gray.800'
      },
      _active: {
        boxShadow: 'none',
        transform: 'none'
      }
    }
  },
  variants: {
    color: {
      primary: { color: 'primary' },
      success: { color: 'success' },
      info: { color: 'info' },
      warning: { color: 'warning' },
      danger: { color: 'danger' }
    },
    size: {
      small: { fontSize: '16px', padding: 'small' },
      medium: { fontSize: '20px', padding: 'small' },
      large: { fontSize: '24px', padding: 'small' }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

export default iconButtonRecipe
