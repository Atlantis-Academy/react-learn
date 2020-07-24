import styled from '@emotion/styled'
import { flexbox, layout, position, space } from 'styled-system'

export const Row = styled('div')(
  layout,
  space,
  flexbox,
  position
)

Row.defaultProps = {
  width: '100%',
  maxWidth: '1230px',
  flexDirection: 'row',
  display: 'flex',
}

export const Column = styled.div(layout, space, flexbox, position)

Column.defaultProps = {
  width: '100%',
  flexDirection: 'column',
  display: 'flex',
}
