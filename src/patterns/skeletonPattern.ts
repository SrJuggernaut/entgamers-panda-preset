import { definePattern } from '@pandacss/dev'

const skeletonPattern = definePattern({
  description: 'Skeleton for loading state',
  properties: {
    animation: { type: 'enum', value: ['pulse', 'wave'] },
    color: { type: 'property', value: 'backgroundColor' },
    radius: { type: 'enum', value: ['none', 'small', 'medium', 'large'] },
    shape: { type: 'enum', value: ['text', 'circle', 'rectangle'] }
  },
  transform: (props) => {
    const { animation, color, radius, shape, height, width, ...rest } = props
    const animationName = animation === undefined ? 'skeletonPulse' : animation === 'wave' ? 'skeletonWave' : 'skeletonPulse'
    return {
      display: 'inline-block',
      borderRadius: shape === 'circle' ? '50%' : radius,
      backgroundColor: animation === 'wave' ? undefined : color !== undefined ? color : 'gray.800',
      background: animation === 'wave' ? 'token(gradients.skeletonGradient)' : undefined,
      backgroundRepeat: animation === 'wave' ? 'repeat-x' : undefined,
      backgroundSize: animation === 'wave' ? '200% 100%' : undefined,
      backgroundPositionX: animation === 'wave' ? '0' : undefined,
      height: height !== undefined ? height : 'auto',
      minHeight: height !== undefined ? height : '1em',
      width: width !== undefined ? width : shape === 'circle' ? '50px' : '100%',
      aspectRatio: shape === 'circle' ? '1 / 1' : undefined,
      animationName,
      animationDuration: '3s',
      animationIterationCount: 'infinite',
      animationTimingFunction: 'linear',
      ...rest
    }
  }
})

export default skeletonPattern
