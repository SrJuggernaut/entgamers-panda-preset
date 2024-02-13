import { defineRecipe } from '@pandacss/dev'

const skeletonRecipe = defineRecipe({
  className: 'skeleton',
  description: 'Skeleton for loading state',
  base: {
    display: 'inline-block',
    animationDuration: '1.5s',
    animationIterationCount: 'infinite',
    animationTimingFunction: 'linear',
    width: '100%',
    minHeight: '1em'
  },
  variants: {
    color: {
      primary: {
        backgroundColor: 'primary'
      },
      success: {
        backgroundColor: 'success'
      },
      info: {
        backgroundColor: 'info'
      },
      warning: {
        backgroundColor: 'warning'
      },
      danger: {
        backgroundColor: 'danger'
      },
      surface: {
        backgroundColor: 'surface'
      },
      default: {
        backgroundColor: 'gray.800'
      }
    },
    radius: {
      none: {
        borderRadius: 'none'
      },
      small: {
        borderRadius: 'small'
      },
      medium: {
        borderRadius: 'medium'
      },
      large: {
        borderRadius: 'large'
      }
    },
    animation: {
      pulse: {
        animationName: 'skeletonPulse'
      },
      wave: {
        animationName: 'skeletonWave',
        background: 'token(gradients.skeletonGradient)',
        backgroundRepeat: 'repeat-x',
        backgroundSize: '200% 100%',
        backgroundPositionX: '0'
      }
    },
    shape: {
      circle: {
        borderRadius: '50%'
      },
      rectangle: {
        borderRadius: 'none'
      }
    }
  },
  defaultVariants: {
    color: 'default',
    animation: 'pulse',
    shape: 'rectangle',
    radius: 'none'
  }
})

export default skeletonRecipe
