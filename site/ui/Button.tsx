import styled from 'styled-components'
import { prop } from 'styled-tools'
import { theme } from './theme'


export const Button: any = styled.button`
  padding: ${prop('padding', '15px 20px')};
  border: ${prop('border', `${theme.border.s} ${theme.colors.white}`)};
  border-radius: ${theme.borderRadius.s};
  color: ${theme.colors.white};
  background: ${prop('bg', `${theme.colors.whiteBlue}`)};
  font-family: ${theme.fontFamily.text};
  font-size: ${theme.fontSize.xs};
  text-transform: uppercase;
  cursor: pointer;`
