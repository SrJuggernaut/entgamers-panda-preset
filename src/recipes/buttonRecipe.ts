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
    borderRadius: 'small',
    gap: '10px'
  },
  variants: {
    color: {
      primary: {},
      success: {},
      info: {},
      warning: {},
      danger: {}
    },
    size: {
      small: { paddingBlock: '6px', paddingInline: '12px' },
      medium: { paddingBlock: '10px', paddingInline: '16px' },
      large: { paddingBlock: '14px', paddingInline: '20px' }
    },
    variant: {
      solid: {
        _hover: { boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25)', opacity: '0.95' },
        _active: { boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25) inset', opacity: '0.95' }
      },
      outline: {
        backgroundColor: 'transparent',
        borderWidth: '1px',
        borderStyle: 'solid',
        _hover: { boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.5)', bg: 'rgba(207, 220, 213, 0.05)' },
        _active: { boxShadow: '4px 4px 4px 0px rgba(0, 0, 0, 0.5) inset', bg: 'rgba(207, 220, 213, 0.05)' }
      },
      text: {
        backgroundColor: 'transparent',
        _hover: { bg: 'rgba(207, 220, 213, 0.05)', boxShadow: '2px 2px 2px 0px rgba(0, 0, 0, 0.25)' },
        _active: { bg: 'rgba(207, 220, 213, 0.05)', boxShadow: 'inset 2px 2px 2px 2px rgba(0, 0, 0, 0.25)' }
      }
    }
  },
  compoundVariants: [
    { variant: 'solid', color: 'primary', css: { bg: 'primary', color: 'primaryContrast' } },
    { variant: 'solid', color: 'success', css: { bg: 'success', color: 'successContrast' } },
    { variant: 'solid', color: 'info', css: { bg: 'info', color: 'infoContrast' } },
    { variant: 'solid', color: 'warning', css: { bg: 'warning', color: 'warningContrast' } },
    { variant: 'solid', color: 'danger', css: { bg: 'danger', color: 'dangerContrast' } },
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
    size: 'medium',
    variant: 'solid'
  }
})

export default buttonRecipe
