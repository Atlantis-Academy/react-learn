import styled from '@emotion/styled'
import { TitleH2 } from '../text/TextStyle'
import theme from '../theme/Theme'


export const Title = styled(TitleH2)(() => ({
  fontWeight: 500,
  color: theme.colors.black,
}))
