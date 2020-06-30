import styled from '@emotion/styled'
import { TitleH2 } from '../text/TextStyle'
import theme from '../theme/Theme'


export const Title = styled(TitleH2)(() => ({
  fontWeight: 500,
  fontSize: '45px',
  color: theme.colors.dark,
  width: '390px',
}))
