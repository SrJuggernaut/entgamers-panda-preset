import { defineSlotRecipe } from '@pandacss/dev'

const tableRecipe = defineSlotRecipe({
  className: 'table',
  slots: ['container', 'table', 'thead', 'tbody', 'tfoot', 'tr'],
  base: {
    container: {
      display: 'block',
      overflowX: 'scroll',
      overflowY: 'hidden',
      borderRadius: 'medium'
    },
    table: {
      minWidth: '100%',
      borderCollapse: 'collapse'
    },
    thead: {},
    tbody: {
      '& tr:nth-of-type(even)': {
        backgroundColor: 'gray.600'
      },
      '& tr:nth-of-type(odd)': {
        backgroundColor: 'gray.700'
      },
      '& tr:hover': {
        backgroundColor: 'surface'
      }
    },
    tfoot: {},
    tr: {
      '& > th': {
        padding: 'small'
      },
      '& > td': {
        padding: 'small',
        verticalAlign: 'top'
      }
    }
  },
  variants: {
    color: {
      surface: {
        thead: {
          backgroundColor: 'surface'
        },
        tfoot: {
          backgroundColor: 'surface'
        }
      },
      primary: {
        thead: {
          backgroundColor: 'primary',
          color: 'primary.contrast'
        },
        tfoot: {
          backgroundColor: 'primary',
          color: 'primary.contrast'
        }
      },
      success: {
        thead: {
          backgroundColor: 'success',
          color: 'success.contrast'
        },
        tfoot: {
          backgroundColor: 'success',
          color: 'success.contrast'
        }
      },
      info: {
        thead: {
          backgroundColor: 'info',
          color: 'info.contrast'
        },
        tfoot: {
          backgroundColor: 'info',
          color: 'info.contrast'
        }
      },
      warning: {
        thead: {
          backgroundColor: 'warning',
          color: 'warning.contrast'
        },
        tfoot: {
          backgroundColor: 'warning',
          color: 'warning.contrast'
        }
      },
      danger: {
        thead: {
          backgroundColor: 'danger',
          color: 'danger.contrast'
        },
        tfoot: {
          backgroundColor: 'danger',
          color: 'danger.contrast'
        }
      }
    }
  },
  defaultVariants: {
    color: 'surface'
  }
})

export default tableRecipe
