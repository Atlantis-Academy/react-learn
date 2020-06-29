import styled from '@emotion/styled'
import { TitleH2 } from '../text/TextStyle'
import theme from '../theme/Theme'


export const Title = styled(TitleH2)(() => ({
  width: '390px',
  color: theme.colors.dark,
}))