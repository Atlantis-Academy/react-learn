import styled from '@emotion/styled'


export const HeaderTitleH1 = styled.h1<any>(({theme}) => ({
  fontFamily: theme.fontFamilyTitle,
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '64px',
  lineHeight: '70px',
  color: theme.colors.whiteBlue,
  margin: 0,
}))
