import { defineSlotRecipe } from '@pandacss/dev'

const cardRecipe = defineSlotRecipe({
  className: 'card',
  description: 'A card component',
  slots: ['body', 'header', 'content', 'media', 'footer', 'actions'],
  base: {
    body: {
      borderRadius: 'medium',
      overflow: 'hidden'
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'small',
      marginBlock: 'small',
      paddingInline: 'medium'
    },
    header: {
      marginBlock: 'small',
      paddingInline: 'medium'
    },
    media: {
      width: '100%',
      height: 'auto',
      position: 'relative',
      objectFit: 'cover'
    },
    actions: {
      display: 'flex',
      gap: 'medium',
      justifyContent: 'flex-end',
      marginBlock: 'small',
      paddingInline: 'medium'
    },
    footer: {
      paddingBlock: '4px',
      paddingInline: 'medium'
    }
  },
  variants: {
    variant: {
      normal: {
        body: {
          backgroundColor: 'gray.900',
          color: 'text',
          borderColor: 'border',
          borderWidth: '1px'
        },
        footer: {
          color: 'border',
          borderTop: '1px solid',
          borderColor: 'border'
        }
      },
      retro: {
        body: {
          backgroundColor: '#F8F8F8',
          color: 'black',
          borderColor: '#76604E',
          borderWidth: '2px',
          boxShadow: 'retroBoxShadow'
        },
        footer: {
          backgroundColor: '#d6e1f9',
          color: '#76604E',
          borderTop: '1px solid',
          borderColor: '#76604E'
        }
      },
      papyrus: {
        body: {
          backgroundColor: '#f9e8ca',
          color: 'black',
          borderColor: '#706050',
          borderWidth: '2px',
          boxShadow: 'papyrusBoxShadow'
        },
        footer: {
          backgroundColor: '#f1d5a5',
          color: '#706050',
          borderTop: '1px solid',
          borderColor: '#706050'
        }
      },
      glass: {
        body: {
          backdropFilter: 'blur(4px)',
          backgroundColor: 'rgba(239, 250, 240, 0.05)',
          border: '1px solid rgba(239, 250, 240, 0.15)'
        },
        footer: {
          backgroundColor: 'rgba(239, 250, 240, 0.10)',
          color: 'text',
          borderTop: '1px solid rgba(239, 250, 240, 0.15)',
          borderColor: 'border'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'normal'
  }
})

export default cardRecipe
