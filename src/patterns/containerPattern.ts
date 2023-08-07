import { definePattern } from '@pandacss/dev'

const containerPattern = definePattern({
  description: 'A container with MaxWidth & centered content',
  properties: {},
  transform: () => {
    return {
      width: '100%',
      maxWidth: { sm: 'breakpoint-sm', md: 'breakpoint-md', lg: 'breakpoint-lg', xl: 'breakpoint-xl', xxl: 'breakpoint-xxl' },
      paddingInline: 'medium',
      margin: '0 auto'
    }
  }
})

export default containerPattern
