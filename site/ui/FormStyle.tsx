import styled from '@emotion/styled'
import theme from './theme/Theme'


export const FormStyle = styled.form(() => ({
  '&:focus': {outline: 'none'},
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
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
  fontSize: '16px',
}))

export const BorderInput = styled.div(() => ({
  border: `1px solid ${theme.colors.whiteBlue}`,
  borderRadius: '5px',
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
  fontSize: '16px',
  width: 'fit-content'
}))

export const InputTextBox = styled.div(()=>({
  position: 'relative',
  top: '8px',
  left: '8px',
  width: '100%',
  marginLeft: '10px'
}))
