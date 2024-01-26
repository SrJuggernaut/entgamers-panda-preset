import { defineRecipe } from '@pandacss/dev'

const buttonGroupRecipe = defineRecipe({
  className: 'button-group',
  description: 'Button group styles',
  base: {
    display: 'inline-flex',
    alignItems: 'center'

  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    align: {
      left: {},
      center: {},
      right: {}
    },
    size: {
      small: { '& > .button': { paddingBlock: '6px', paddingInline: '12px' } },
      medium: { '& > .button': { paddingBlock: '10px', paddingInline: '16px' } },
      large: { '& > .button': { paddingBlock: '14px', paddingInline: '20px' } }
    },
    vertical: {
      true: {
        flexDirection: 'column',
        '& > .button': {
          borderRadius: 'none',
          '&:first-child': {
            borderTopLeftRadius: 'small',
            borderTopRightRadius: 'small',
            borderBottomLeftRadius: 'none',
            borderBottomRightRadius: 'none',
            borderBottom: 'none'
          }
        },
        '& > .button:not(:first-child):not(:last-child)': {
          borderRadius: 'none',
          borderTop: 'none',
          borderBottom: 'none',
          borderBlock: '1px solid',
          borderColor: 'border'
        },
        '& > .button:last-child': {
          borderTopLeftRadius: 'none',
          borderTopRightRadius: 'none',
          borderBottomLeftRadius: 'small',
          borderBottomRightRadius: 'small',
          borderTop: 'none'
        }
      },
      false: {
        flexDirection: 'row',
        '& > .button': {
          borderRadius: 'none',
          '&:first-child': {
            borderTopLeftRadius: 'small',
            borderBottomLeftRadius: 'small',
            borderTopRightRadius: 'none',
            borderBottomRightRadius: 'none',
            borderRight: 'none'
          },
          '&:not(:first-child):not(:last-child)': {
            borderRadius: 'none',
            borderInline: '1px solid',
            borderColor: 'border'
          },
          '&:last-child': {
            borderTopLeftRadius: 'none',
            borderBottomLeftRadius: 'none',
            borderTopRightRadius: 'small',
            borderBottomRightRadius: 'small',
            borderLeft: 'none'
          }
        }
      }
    }
  },
  compoundVariants: [
    { vertical: true, align: 'left', css: { alignItems: 'flex-start' } },
    { vertical: true, align: 'center', css: { alignItems: 'center' } },
    { vertical: true, align: 'right', css: { alignItems: 'flex-end' } },
    { vertical: false, align: 'left', css: { justifyContent: 'flex-start' } },
    { vertical: false, align: 'center', css: { justifyContent: 'center' } },
    { vertical: false, align: 'right', css: { justifyContent: 'flex-end' } }
  ],
  defaultVariants: {
    fullWidth: false,
    align: 'center',
    size: 'medium',
    vertical: false
  }
})

export default buttonGroupRecipe
