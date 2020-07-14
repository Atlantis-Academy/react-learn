import styled from 'styled-components'
import { prop } from 'styled-tools'
import theme from './theme/Theme'
import borderRadius from './theme/BorderRadius'
import fontSize from './theme/FontSize'



export const Button: any = styled.button`
  padding: ${prop('padding', '15px 20px')};
  border: ${prop('border', `${theme.border.s} ${theme.colors.white}`)};
  border-radius: ${borderRadius.s};
  color: ${theme.colors.white};
  background: ${prop('bg', `${theme.colors.whiteBlue}`)};
  font-family: ${theme.fontFamilyText};
  font-size: ${fontSize.xs};
  text-transform: uppercase;
  cursor: pointer;
`