import styled from 'styled-components'
import { prop } from 'styled-tools'
import theme from './theme/Theme'



export const Button: any = styled.button`
  padding: ${prop('padding', '15px 20px')};
  border: 1px solid ${theme.colors.white};
  border-radius: 5px;
  color: ${theme.colors.white};
  background: ${prop('bg', `${theme.colors.whiteBlue}`)};
  font-family: ${theme.fontFamilyText};
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
`