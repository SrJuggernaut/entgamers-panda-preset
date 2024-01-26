import { defineRecipe } from '@pandacss/dev'

const dropZoneRecipe = defineRecipe({
  className: 'drop-zone',
  description: 'Drop zone styles',
  base: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '10px',
    borderWidth: '2px',
    borderStyle: 'dashed',
    borderColor: 'border',
    borderRadius: 'medium',
    '&[data-status="success"]': {
      borderColor: 'success'
    },
    '&[data-status="danger"]': {
      borderColor: 'danger'
    },
    '&[data-status="warning"]': {
      borderColor: 'warning'
    },
    '&[data-status="info"]': {
      borderColor: 'info'
    }
  }
})

export default dropZoneRecipe
