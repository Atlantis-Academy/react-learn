import styled from '@emotion/styled'
import theme from './theme/Theme'
import fontSize from './theme/FontSize'
import borderRadius from './theme/BorderRadius'


export const FormStyle = styled.form(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '&:focus': {outline: 'none'},
}))


export const InputForm = styled.input(() => ({
  width: '300px',
  height: '50px',
  background: theme.colors.dark,
  border: 'none',
  overflow: 'hidden',
  outline: 'none',
  color: theme.colors.white,
  fontFamily: theme.fontFamilyText,
  fontSize: fontSize.xs,
}))

export const BorderInput = styled.div(() => ({
  border: `${theme.border.s} ${theme.colors.whiteBlue}`,
  borderRadius: borderRadius.s,
  padding: '2px',
  width: '310px',
  height: '58px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))

export const InputText = styled.span(() => ({
  background: theme.colors.dark,
  overflow: 'hidden',
  borderColor: 'inherit',
  color: theme.colors.white,
  fontFamily: theme.fontFamilyText,
  fontSize: fontSize.xs,
  width: 'fit-content'
}))

export const InputTextBox = styled.div(()=>({
  position: 'relative',
  top: '8px',
  left: '8px',
  width: '100%',
  marginLeft: '10px'
}))
