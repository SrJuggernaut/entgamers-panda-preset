import { defineKeyframes } from '@pandacss/dev'

export const keyframes = defineKeyframes({
  spin: {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  },
  bounce: {
    '0%, 20%, 53%, 100%': {
      transform: 'translate3d(0, 0, 0)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    },
    '40%, 43%': {
      transform: 'translate3d(0, -30px, 0) scaleY(1.1)',
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)'
    },
    '70%': {
      transform: 'translate3d(0, -15px, 0) scaleY(1.05)',
      animationTimingFunction: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)'
    },
    '80%': {
      transform: 'translate3d(0, 0, 0) scaleY(0.95)',
      animationTimingFunction: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
    },
    '90%': {
      transform: 'translate3d(0, -4px, 0) scaleY(1.02)'
    }
  },
  pulse: {
    '0%': { transform: 'scale3d(1, 1, 1)' },
    '50%': { transform: 'scale3d(1.05, 1.05, 1.05)' },
    '100%': { transform: 'scale3d(1, 1, 1)' }
  },
  shakeX: {
    '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
    '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(-10px, 0, 0)' },
    '20%, 40%, 60%, 80%': { transform: 'translate3d(10px, 0, 0)' }
  },
  shakeY: {
    '0%, 100%': { transform: 'translate3d(0, 0, 0)' },
    '10%, 30%, 50%, 70%, 90%': { transform: 'translate3d(0, -10px, 0)' },
    '20%, 40%, 60%, 80%': { transform: 'translate3d(0, 10px, 0)' }
  },
  bgMotion: {
    from: { backgroundPositionX: '0px' },
    to: { backgroundPositionX: '2048px' }
  },
  skeletonWave: {
    to: { backgroundPositionX: '-200%' }
  },
  skeletonPulse: {
    '0%, 100%': { opacity: 1 },
    '50%': { opacity: 0.4 }
  }
})
