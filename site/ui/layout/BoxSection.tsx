import styled from '@emotion/styled'
import { alignItems, display, justifyContent, margin, maxWidth } from 'styled-system'


export const BoxSection = styled.div(
  maxWidth,
  margin,
  display,
  justifyContent,
  alignItems,
)

BoxSection.defaultProps = {
  maxWidth: '1230px',
  margin: '0 auto',
  display: 'flex'
}
