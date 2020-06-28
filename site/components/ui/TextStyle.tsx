import styled from '@emotion/styled'
import theme from './Theme'


const TitleH2 = styled.h2`
    font-family: ${theme.fontFamilyTitle};
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 45px;
    color: ${theme.colors.white};
    margin: 0;`

const TextStyle = styled.p`
    font-family: ${theme.fontFamilyText};
    font-size: 22px;
    line-height: 30px;
    color: ${theme.colors.white};
    margin: 0;`

export {TitleH2, TextStyle}
