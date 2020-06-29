import styled from '@emotion/styled'
import Button from '../Button'
import theme from '../theme/Theme'


export const ButtonAuto = styled(Button)(()=>({
  padding: '15px 20px',
  height: '50px',
  background: theme.colors.whiteBlue,
}))
