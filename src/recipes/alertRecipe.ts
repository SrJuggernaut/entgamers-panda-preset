import { defineSlotRecipe } from '@pandacss/dev'

const alertRecipe = defineSlotRecipe({
  className: 'alert',
  slots: ['body', 'closeButton'],
  base: {
    body: {
      padding: 'medium',
      borderRadius: 'medium',
      position: 'relative'
    },
    closeButton: {
      position: 'absolute',
      top: '4px',
      right: '4px',
      cursor: 'pointer'
    }
  },
  variants: {
    severity: {
      success: {
        body: {
          backgroundColor: 'success',
          color: 'success.contrast',
          ' a': {
            color: 'success.contrast',
            fontWeight: 'bold'
          }
        }
      },
      warning: {
        body: {
          backgroundColor: 'warning',
          color: 'warning.contrast',
          ' a': {
            color: 'warning.contrast',
            fontWeight: 'bold'
          }
        }
      },
      error: {
        body: {
          backgroundColor: 'danger',
          color: 'danger.contrast',
          ' a': {
            color: 'danger.contrast',
            fontWeight: 'bold'
          }
        }
      },
      info: {
        body: {
          backgroundColor: 'info',
          color: 'info.contrast',
          ' a': {
            color: 'info.contrast',
            fontWeight: 'bold'
          }
        }
      }
    }
  },
  defaultVariants: {
    severity: 'info'
  }
})

export default alertRecipe
