import styled from '@emotion/styled'
import theme from './Theme'


const Button = styled.button`
    padding: 10px 30px;
    border: 1px solid ${theme.colors.white};
    box-sizing: border-box;
    border-radius: 5px;
    color: ${theme.colors.white};
    background: transparent;
    font-family: ${theme.fontFamilyText};
    font-weight: 600;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer`

export default Button
