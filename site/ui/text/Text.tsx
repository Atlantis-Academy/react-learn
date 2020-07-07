import styled from 'styled-components'
import { prop, switchProp } from 'styled-tools'
import theme from '../theme/Theme'


export const Text: any = styled.span`
color: ${prop('color', `${theme.colors.dark}`)};
font-size: ${prop('size', '20px')};
line-height: ${prop('lineHeight', '30px')};
font-family: ${prop('font', `${theme.fontFamilyText}`)};
${switchProp('themeText', {
  h1: {
    color: theme.colors.whiteBlue,
    fontFamily: theme.fontFamilyTitle,
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '70px',
  },
  h2: {
    fontFamily: theme.fontFamilyTitle,
    fontSize: '40px',
    lineHeight: '45px',
  },
  sectionTitle:{
    fontFamily: theme.fontFamilyTitle,
    fontSize: '45px',
    lineHeight: '45px',
    color: theme.colors.dark
  }
})}
`