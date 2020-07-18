import styled from '@emotion/styled'
import { theme } from '../theme'



const TitleH2 = styled.h2(() => ({
  fontFamily: theme.fontFamily.title,
  fontSize: '40px',
  lineHeight: '45px',
  color: theme.colors.white,
}))

const TextStyle = styled.p(() => ({
  fontFamily: theme.fontFamily.text,
  fontSize: '22px',
  lineHeight: '30px',
  color: theme.colors.white,
  margin: 0,
}))

export { TitleH2, TextStyle }
