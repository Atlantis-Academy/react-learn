import styled from '@emotion/styled'
import theme from './theme/Theme'


const Button = styled.button(() => ({
  padding: '10px 30px',
  border: `1px solid ${theme.colors.white}`,
  borderRadius: '5px',
  color: theme.colors.white,
  background: 'transparent',
  fontFamily: theme.fontFamilyText,
  fontWeight: 600,
  fontSize: '16px',
  textTransform: 'uppercase',
  cursor: 'pointer',
}))

export default Button
