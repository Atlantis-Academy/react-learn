import styled from '@emotion/styled'
import { alignItems, display, justifyContent, maxWidth } from 'styled-system'
import { switchProp } from 'styled-tools'



export const BoxSection = styled.div(
  maxWidth,
  display,
  justifyContent,
  alignItems,
  switchProp('margin', {
    center: 'margin: 0 auto'
}),
)

BoxSection.defaultProps = {
  maxWidth: '1230px',
  margin: 'center',
  display: 'flex'
}
