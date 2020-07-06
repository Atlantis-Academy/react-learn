import styled from '@emotion/styled'
import { switchProp } from 'styled-tools'
import theme from '../theme/Theme'



export const Text = styled.h1<any>(()=>({

}),
  switchProp('TextTheme', {
  h1: {
    color: theme.colors.whiteBlue,
    fontFamily: theme.fontFamilyTitle,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '64px',
    lineHeight: '70px',
    margin: 0,
  }
}))
