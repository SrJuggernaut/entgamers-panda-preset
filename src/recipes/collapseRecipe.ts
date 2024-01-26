import { defineSlotRecipe } from '@pandacss/dev'

const collapseRecipe = defineSlotRecipe({
  className: 'collapse',
  description: 'Collapse style',
  slots: ['root', 'summary', 'content'],
  base: {
    root: {
      border: '1px solid',
      borderColor: 'border',
      borderRadius: 'medium',
      overflow: 'hidden',
      transition: 'all 0.3s token(easings.easeInOut)'
    },
    summary: {
      cursor: 'pointer',
      padding: 'medium'
    },
    content: {
      padding: 'medium'
    }
  },
  variants: {
    color: {
      primary: {
        root: {
          backgroundColor: 'primary',
          color: 'primary.contrast'
        }
      },
      success: {
        root: {
          backgroundColor: 'success',
          color: 'success.contrast'
        }
      },
      info: {
        root: {
          backgroundColor: 'info',
          color: 'info.contrast'
        }
      },
      warning: {
        root: {
          backgroundColor: 'warning',
          color: 'warning.contrast'
        }
      },
      danger: {
        root: {
          backgroundColor: 'danger',
          color: 'danger.contrast'
        }
      },
      surface: {
        root: {
          backgroundColor: 'surface',
          color: 'surface.contrast'
        }
      }
    }
  }
})

export default collapseRecipe
