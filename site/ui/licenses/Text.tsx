import styled from '@emotion/styled'
import { TextStyle } from '../text/TextStyle'
import theme from '../theme/Theme'


export const Text = styled(TextStyle)(() => ({
  fontSize: '18px',
  lineHeight: '25px',
  color: theme.colors.dark,
}))
