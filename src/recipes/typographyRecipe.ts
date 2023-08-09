import { defineRecipe } from '@pandacss/dev'

const typographyRecipe = defineRecipe({
  className: 'typography',
  description: 'Typography styles',
  base: {},
  variants: {
    variant: {
      h1: {
        fontSize: 'h1',
        fontFamily: 'heading',
        fontWeight: 'regular',
        lineHeight: 'heading',
        color: 'primary',
        WebkitTextStrokeColor: 'black',
        WebkitTextStrokeWidth: '1px'
      },
      h2: {
        fontSize: 'h2',
        fontFamily: 'heading',
        fontWeight: 'regular',
        lineHeight: 'heading',
        color: 'primary',
        WebkitTextStrokeColor: 'black',
        WebkitTextStrokeWidth: '1px'
      },
      h3: {
        fontSize: 'h3',
        fontFamily: 'heading',
        fontWeight: 'regular',
        lineHeight: 'heading',
        color: 'primary',
        WebkitTextStrokeColor: 'black',
        WebkitTextStrokeWidth: '1px'

      },
      h4: {
        fontSize: 'h4',
        fontFamily: 'heading',
        fontWeight: 'regular',
        lineHeight: 'heading',
        color: 'primary',
        WebkitTextStrokeColor: 'black',
        WebkitTextStrokeWidth: '1px'
      },
      h5: {
        fontSize: 'h5',
        fontFamily: 'heading',
        fontWeight: 'regular',
        lineHeight: 'heading',
        color: 'primary',
        WebkitTextStrokeColor: 'black',
        WebkitTextStrokeWidth: '1px'
      },
      h6: {
        fontSize: 'h6',
        fontFamily: 'heading',
        fontWeight: 'regular',
        lineHeight: 'heading',
        color: 'primary',
        WebkitTextStrokeColor: 'black',
        WebkitTextStrokeWidth: '1px'
      },
      subtitle1: {
        fontSize: 'h2',
        fontFamily: 'body',
        fontWeight: 'bold',
        lineHeight: 'heading',
        color: 'primary'
      },
      subtitle2: {
        fontSize: 'h3',
        fontFamily: 'body',
        fontWeight: 'bold',
        lineHeight: 'heading',
        color: 'primary'
      },
      body1: {
        fontSize: 'body',
        fontFamily: 'body',
        fontWeight: 'regular',
        lineHeight: 'body'
      },
      body2: {
        fontSize: 'calc(token(fontSizes.body) * 0.9)',
        fontFamily: 'body',
        fontWeight: 'regular',
        lineHeight: 'body',
        color: 'gray.200'

      },
      button: {
        fontSize: 'body',
        fontFamily: 'body',
        fontWeight: 'bold',
        lineHeight: 'body',
        textTransform: 'uppercase'
      },
      caption: {
        fontSize: 'caption',
        fontFamily: 'body',
        fontWeight: 'regular',
        lineHeight: 'body'
      },
      overline: {
        fontSize: 'caption',
        fontFamily: 'body',
        fontWeight: 'bold',
        lineHeight: 'heading',
        textTransform: 'uppercase'
      },
      srOnly: {
        position: 'absolute',
        width: '1px',
        height: '1px',
        padding: '0',
        margin: '-1px',
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        border: '0'
      }
    },
    align: {
      left: {
        textAlign: 'left'
      },
      center: {
        textAlign: 'center'
      },
      right: {
        textAlign: 'right'
      },
      justify: {
        textAlign: 'justify'
      }
    },
    color: {
      primary: {
        color: 'primary'
      },
      success: {
        color: 'success'
      },
      info: {
        color: 'info'
      },
      warning: {
        color: 'warning'
      },
      danger: {
        color: 'danger'
      },
      text: {
        color: 'text'
      },
      surface: {
        color: 'surface'
      },
      border: {
        color: 'border'
      },
      muted: {
        color: 'muted'
      }
    },
    decoration: {
      underline: {
        textDecoration: 'underline'
      },
      lineThrough: {
        textDecoration: 'line-through'
      },
      none: {
        textDecoration: 'none'
      }
    },
    transform: {
      uppercase: {
        textTransform: 'uppercase'
      },
      lowercase: {
        textTransform: 'lowercase'
      },
      capitalize: {
        textTransform: 'capitalize'
      },
      normalCase: {
        textTransform: 'none'
      }
    },
    weight: {
      light: {
        fontWeight: 'light'
      },
      regular: {
        fontWeight: 'regular'
      },
      bold: {
        fontWeight: 'bold'
      }
    }
  },
  defaultVariants: {
    variant: 'body1',
    align: 'left',
    color: 'text',
    decoration: 'none',
    transform: 'normalCase',
    weight: 'regular'
  }
})

export default typographyRecipe
