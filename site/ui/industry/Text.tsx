import styled from '@emotion/styled'
import { TextStyle } from '../text/TextStyle'
import { theme } from '../theme'


export const Text = styled(TextStyle)(() => ({
  fontSize: '13px',
  color: theme.colors.dark,
  textTransform: 'uppercase',
  lineHeight: '15px'
}))
