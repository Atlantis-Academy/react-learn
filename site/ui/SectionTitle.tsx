import styled from '@emotion/styled'
import { TitleH2 } from './text/TextStyle'
import theme from './theme/Theme'


export const SectionTitle = styled(TitleH2)(() => ({
  fontSize: '45px',
  color: theme.colors.colorDark,
  width: '390px',
  height: '90px',
}))
