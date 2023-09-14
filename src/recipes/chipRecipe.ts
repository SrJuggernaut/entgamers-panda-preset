import { defineRecipe } from '@pandacss/dev'

const chipRecipe = defineRecipe({
  className: 'chip',
  description: 'A chip is a small block of essential information that triggers an action or that links to a larger block of information.',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'caption'
  },
  variants: {
    color: {
      none: {},
      primary: {},
      success: {},
      info: {},
      warning: {},
      danger: {}
    },
    variant: {
      solid: {},
      outline: {}
    },
    size: {
      small: { paddingBlock: '2px', paddingInline: '4px', fontSize: '12px' },
      medium: { paddingBlock: '2px', paddingInline: '8px', fontSize: 'body' },
      large: { paddingBlock: '4px', paddingInline: '12px', fontSize: '20px' }
    },
    shape: {
      square: { borderRadius: 'none' },
      rounded: { borderRadius: 'small' },
      oval: { borderRadius: 'medium' },
      pill: { borderRadius: 'large' },
      round: { borderRadius: 'round' }
    }
  },
  compoundVariants: [
    { variant: 'solid', color: 'none', css: { backgroundColor: 'gray.200', color: 'gray.900' } },
    { variant: 'solid', color: 'primary', css: { backgroundColor: 'primary', color: 'primary.contrast' } },
    { variant: 'solid', color: 'success', css: { backgroundColor: 'success', color: 'success.contrast' } },
    { variant: 'solid', color: 'info', css: { backgroundColor: 'info', color: 'info.contrast' } },
    { variant: 'solid', color: 'warning', css: { backgroundColor: 'warning', color: 'warning.contrast' } },
    { variant: 'solid', color: 'danger', css: { backgroundColor: 'danger', color: 'danger.contrast' } },
    { variant: 'outline', color: 'none', css: { backgroundColor: 'transparent', color: 'text', border: '1px solid token(colors.border)' } },
    { variant: 'outline', color: 'primary', css: { backgroundColor: 'transparent', color: 'primary', border: '1px solid token(colors.primary)' } },
    { variant: 'outline', color: 'success', css: { backgroundColor: 'transparent', color: 'success', border: '1px solid token(colors.success)' } },
    { variant: 'outline', color: 'info', css: { backgroundColor: 'transparent', color: 'info', border: '1px solid token(colors.info)' } },
    { variant: 'outline', color: 'warning', css: { backgroundColor: 'transparent', color: 'warning', border: '1px solid token(colors.warning)' } },
    { variant: 'outline', color: 'danger', css: { backgroundColor: 'transparent', color: 'danger', border: '1px solid token(colors.danger)' } }
  ],
  defaultVariants: {
    color: 'none',
    variant: 'solid',
    size: 'medium',
    shape: 'pill'
  }
})

export default chipRecipe
