import styled from '@emotion/styled'
import Button from './Button'
import theme from './Theme'


export const FormStyle = styled.form`
&:focus: {outline: none;}`

export const ButtonForm = styled(Button)`
    background: ${theme.colors.whiteBlue};
    border: 1px solid ${theme.colors.whiteBlue};
    width: 310px;
    height: 50px;`

export const InputForm = styled.input`
    width: 250px;
    height: 55px;
    background: ${theme.colors.dark};
    border: none;
    overflow: hidden;
    outline: none;
    `

export const FieldSetForm = styled.fieldset`
border: 1px solid ${theme.colors.whiteBlue};
border-radius: 5px;
padding: 2px;`

export const Legend = styled.legend`
overflow: hidden;
border-color: inherit;
color: ${theme.colors.white};
font-family: ${theme.fontFamilyText};
 font-size: 16px;
 margin-left: 10px;`
