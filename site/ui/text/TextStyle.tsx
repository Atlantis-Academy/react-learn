import styled from '@emotion/styled'
import theme from '../theme/Theme'


const TitleH2 = styled.h2(() => ({
  fontFamily: theme.fontFamilyTitle,
  fontStyle: 'normal',
  fontWeight: 'normal',
  fontSize: '40px',
  lineHeight: '45px',
  color: theme.colors.white,
  margin: 0,
}))

const TextStyle = styled.p(() => ({
  fontFamily: theme.fontFamilyText,
  fontSize: '22px',
  lineHeight: '30px',
  color: theme.colors.white,
  margin: 0,
}))

export { TitleH2, TextStyle }
