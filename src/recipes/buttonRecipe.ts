import { defineRecipe } from '@pandacss/dev'

const buttonRecipe = defineRecipe({
  className: 'button',
  description: 'Button styles',
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    borderRadius: 'sm',
    gap: '10px',
    _hover: {
      boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25)'
    },
    _active: {
      boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25) inset'
    }
  },
  variants: {
    color: {
      primary: { bg: 'primary', color: 'primaryContrast' },
      success: { bg: 'success', color: 'successContrast' },
      info: { bg: 'info', color: 'infoContrast' },
      warning: { bg: 'warning', color: 'warningContrast' },
      danger: { bg: 'danger', color: 'dangerContrast' }
    },
    size: {
      sm: { paddingBlock: '6px', paddingInline: '12px' },
      md: { paddingBlock: '10px', paddingInline: '16px' },
      lg: { paddingBlock: '14px', paddingInline: '20px' }
    },
    variant: {
      solid: {},
      outline: { bg: 'transparent !important', borderWidth: '1px', borderStyle: 'solid' },
      text: { bg: 'transparent' }
    }
  },
  compoundVariants: [
    { variant: 'outline', color: 'primary', css: { color: 'primary', borderStyle: 'solid', borderColor: 'primary' } },
    { variant: 'outline', color: 'success', css: { color: 'success', borderStyle: 'solid', borderColor: 'success' } },
    { variant: 'outline', color: 'info', css: { color: 'info', borderStyle: 'solid', borderColor: 'info' } },
    { variant: 'outline', color: 'warning', css: { color: 'warning', borderStyle: 'solid', borderColor: 'warning' } },
    { variant: 'outline', color: 'danger', css: { color: 'danger', borderStyle: 'solid', borderColor: 'danger' } },
    { variant: 'text', color: 'primary', css: { color: 'primary' } },
    { variant: 'text', color: 'success', css: { color: 'success' } },
    { variant: 'text', color: 'danger', css: { color: 'danger' } },
    { variant: 'text', color: 'warning', css: { color: 'warning' } },
    { variant: 'text', color: 'info', css: { color: 'info' } }
  ],
  defaultVariants: {
    color: 'primary',
    size: 'md',
    variant: 'solid'
  }
})

export default buttonRecipe
