import styled from '@emotion/styled'
import theme from './theme/Theme'


export const FormStyle = styled.form(() => ({
  '&:focus': {outline: 'none'}
}))


export const InputForm = styled.input(() => ({
  width: '310px',
  height: '30px',
  background: theme.colors.dark,
  border: 'none',
  overflow: 'hidden',
  outline: 'none',
}))

export const FieldSetForm = styled.fieldset(() => ({
  border: `1px solid ${theme.colors.whiteBlue}`,
  borderRadius: '5px',
  padding: '2px',
  width: '310px',
  height: '58px'
}))

export const Legend = styled.legend(() => ({
  overflow: 'hidden',
  borderColor: 'inherit',
  color: theme.colors.white,
  fontFamily: theme.fontFamilyText,
  fontSze: '16px',
  marginLeft: '10px',
}))
