import { defineRecipe } from '@pandacss/dev'

const tooltipRecipe = defineRecipe({
  className: 'tooltip',
  description: 'Tooltip style',
  base: {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
    overflow: 'visible',
    '& .tooltip__content': {
      visibility: 'hidden',
      opacity: 0,
      transition: 'all 0.3s ease',
      position: 'absolute',
      zIndex: 'tooltip',
      borderColor: 'border',
      borderWidth: '1px',
      borderStyle: 'solid',
      borderRadius: 'small',
      padding: 'small',
      fontSize: 'caption',
      lineHeight: 'body',
      width: 'max-content'
    },
    '&:hover .tooltip__content': {
      visibility: 'visible',
      opacity: 1,
      transform: 'translateY(0)'
    }
  },
  variants: {
    position: {
      top: {
        '& .tooltip__content': {
          bottom: 'calc(100% + 0.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          marginTop: 'small'
        }
      },
      right: {
        '& .tooltip__content': {
          top: '50%',
          left: 'calc(100% + 0.5rem)',
          transform: 'translateY(-50%)',
          marginLeft: 'small'
        }
      },
      bottom: {
        '& .tooltip__content': {
          top: 'calc(100% + 0.5rem)',
          left: '50%',
          transform: 'translateX(-50%)',
          marginBottom: 'small'
        }
      },
      left: {
        '& .tooltip__content': {
          top: '50%',
          right: 'calc(100% + 0.5rem)',
          transform: 'translateY(-50%)',
          marginRight: 'small'
        }
      }
    },
    arrow: {
      true: {
        '& .tooltip__content': {
          '&::before': {
            content: '""',
            position: 'absolute',
            opacity: 0,
            display: 'none',
            zIndex: 'tooltip',
            transition: 'all 0.3s ease'
          }
        },
        '&:hover .tooltip__content': {
          '&::before': {
            display: 'block',
            opacity: 1
          }
        }
      },
      false: {}
    },
    color: {
      primary: {
        '& .tooltip__content': {
          backgroundColor: 'primary',
          color: 'primary.contrast'
        }
      },
      success: {
        '& .tooltip__content': {
          backgroundColor: 'success',
          color: 'success.contrast'
        }
      },
      info: {
        '& .tooltip__content': {
          backgroundColor: 'info',
          color: 'info.contrast'
        }
      },
      warning: {
        '& .tooltip__content': {
          backgroundColor: 'warning',
          color: 'warning.contrast'
        }
      },
      danger: {
        '& .tooltip__content': {
          backgroundColor: 'danger',
          color: 'danger.contrast'
        }
      },
      surface: {
        '& .tooltip__content': {
          backgroundColor: 'surface',
          color: 'text'
        }
      }
    }
  },
  compoundVariants: [
    {
      position: 'right',
      arrow: true,
      css: {
        '& .tooltip__content': {
          '&::before': {
            right: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            borderRight: 'token(spacing.small) solid token(colors.border)',
            borderLeft: 'token(spacing.small) solid transparent',
            borderTop: 'token(spacing.small) solid transparent',
            borderBottom: 'token(spacing.small) solid transparent'
          }
        }
      }
    },
    {
      position: 'left',
      arrow: true,
      css: {
        '& .tooltip__content': {
          '&::before': {
            left: '100%',
            top: '50%',
            transform: 'translateY(-50%)',
            borderLeft: 'token(spacing.small) solid token(colors.border)',
            borderRight: 'token(spacing.small) solid transparent',
            borderTop: 'token(spacing.small) solid transparent',
            borderBottom: 'token(spacing.small) solid transparent'
          }
        }
      }
    },
    {
      position: 'top',
      arrow: true,
      css: {
        '& .tooltip__content': {
          '&::before': {
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderTop: 'token(spacing.small) solid token(colors.border)',
            borderLeft: 'token(spacing.small) solid transparent',
            borderRight: 'token(spacing.small) solid transparent',
            borderBottom: 'token(spacing.small) solid transparent'
          }
        }
      }
    },
    {
      position: 'bottom',
      arrow: true,
      css: {
        '& .tooltip__content': {
          '&::before': {
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%)',
            borderBottom: 'token(spacing.small) solid token(colors.border)',
            borderLeft: 'token(spacing.small) solid transparent',
            borderRight: 'token(spacing.small) solid transparent',
            borderTop: 'token(spacing.small) solid transparent'
          }
        }
      }
    }
  ],
  defaultVariants: {
    position: 'top',
    arrow: false,
    color: 'surface'
  }
})

export default tooltipRecipe
