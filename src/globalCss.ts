import { defineGlobalStyles } from '@pandacss/dev'

const globalCss = defineGlobalStyles({
  body: {
    fontFamily: 'body',
    fontSize: 'body',
    lineHeight: 'body',
    fontWeight: 'regular',
    color: 'gray.100',
    backgroundColor: 'background'
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: 'heading',
    fontWeight: 'regular',
    lineHeight: 'heading',
    color: 'primary',
    WebkitTextStrokeColor: 'black',
    WebkitTextStrokeWidth: '1px'
  },
  h1: {
    fontSize: 'h1'
  },
  h2: {
    fontSize: 'h2'
  },
  h3: {
    fontSize: 'h3'
  },
  h4: {
    fontSize: 'h4'
  },
  h5: {
    fontSize: 'h5'
  },
  h6: {
    fontSize: 'h6'
  },
  a: {
    color: 'primary',
    textDecoration: 'none'
  },
  p: {
    fontSize: 'body',
    marginBottom: '1rem'
  },
  ul: {
    listStyle: 'initial',
    paddingInlineStart: '1rem'
  },
  ol: {
    listStyle: 'inside decimal'
  },
  li: {
    fontSize: 'body',
    lineHeight: 'body'
  }
})

export default globalCss
