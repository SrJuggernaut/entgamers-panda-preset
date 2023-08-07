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
    transition: 'all 0.2s ease-in-out',
    borderRadius: 'round',
    gap: '10px',
    fontSize: 'inherit',
    _hover: {
      boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25)',
      backgroundColor: 'rgba(207, 220, 213, 0.05)'
    },
    _active: {
      boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25) inset'
    }
  },
  variants: {
    size: {
      small: { fontSize: 'calc(16px * .75)', padding: 'small' },
      medium: { fontSize: 'body', padding: 'small' },
      large: { fontSize: 'calc(16px * 1.25)', padding: 'small' }
    },
    color: {
      primary: { color: 'primary' },
      success: { color: 'success' },
      info: { color: 'info' },
      warning: { color: 'warning' },
      danger: { color: 'danger' }
    }
  },
  defaultVariants: {
    size: 'medium'
  }
})

export default iconButtonRecipe
