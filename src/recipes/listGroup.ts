import { defineSlotRecipe } from '@pandacss/dev'

const listGroupRecipe = defineSlotRecipe({
  className: 'list-group',
  description: 'List group style',
  slots: ['root', 'item'],
  base: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      border: '1px solid token(colors.border)',
      borderRadius: 'medium',
      overflow: 'hidden'
    },
    item: {
      display: 'block',
      padding: 'small',
      borderBottom: '1px solid token(colors.border)',
      '&:last-child': {
        borderBottom: 'none'
      }
    }
  },
  variants: {
    color: {
      surface: {
        root: {
          backgroundColor: 'surface',
          color: 'text'
        },
        item: {
          backgroundColor: 'surface',
          color: 'text'
        }
      },
      primary: {
        root: {
          backgroundColor: 'primary',
          color: 'primary.contrast'
        },
        item: {
          backgroundColor: 'primary',
          color: 'primary.contrast'
        }
      },
      success: {
        root: {
          backgroundColor: 'success',
          color: 'success.contrast'
        },
        item: {
          backgroundColor: 'success',
          color: 'success.contrast'
        }
      },
      info: {
        root: {
          backgroundColor: 'info',
          color: 'info.contrast'
        },
        item: {
          backgroundColor: 'info',
          color: 'info.contrast'
        }
      },
      warning: {
        root: {
          backgroundColor: 'warning',
          color: 'warning.contrast'
        },
        item: {
          backgroundColor: 'warning',
          color: 'warning.contrast'
        }
      },
      danger: {
        root: {
          backgroundColor: 'danger',
          color: 'danger.contrast'
        },
        item: {
          backgroundColor: 'danger',
          color: 'danger.contrast'
        }
      }
    },
    flush: {
      true: {
        root: {
          border: 'none',
          borderRadius: 0
        },
        item: {}
      }
    }
  },
  defaultVariants: {
    flush: false
  }
})

export default listGroupRecipe
