import styled from 'styled-components'
import { prop, switchProp } from 'styled-tools'
import theme from '../theme/Theme'
import fontSize from '../theme/FontSize'
import lineHeight from '../theme/LineHeight'


export const Text: any = styled.span`
color: ${prop('color', `${theme.colors.dark}`)};
font-size: ${prop('size', `${fontSize.m}`)};
line-height: ${prop('lineHeight', `${lineHeight.xs}`)};
font-family: ${prop('font', `${theme.fontFamilyText}`)};
width: ${prop('width')};
${switchProp('themeText', {
  h1: {
    color: theme.colors.whiteBlue,
    fontFamily: theme.fontFamilyTitle,
    fontWeight: 'bold',
    fontSize: fontSize.xxl,
  },
  h2: {
    fontFamily: theme.fontFamilyTitle,
    fontSize: fontSize.l,
    lineHeight: lineHeight.l,
  },
  sectionTitle: {
    fontFamily: theme.fontFamilyTitle,
    fontSize: fontSize.l,
    lineHeight: lineHeight.l,
    color: theme.colors.dark
  }
})}
`
