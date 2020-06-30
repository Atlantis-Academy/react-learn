import styled from '@emotion/styled'
import { TextStyle } from '../text/TextStyle'
import theme from '../theme/Theme'


export const AutoText = styled(TextStyle)(()=>({
  width: '390px',
  fontSize: '18px',
  color: theme.colors.dark,
}))
