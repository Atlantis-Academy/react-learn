import React from 'react'
import styled from '@emotion/styled'
import DivMargin from '../../ui/DivMargin'
import textComponent from '../../TextComponents'
import theme from '../../ui/Theme'
import { TextStyle, TitleH2 } from '../../ui/TextStyle'
import { WaveLittle } from '../../ui/svg/Wave'
import { SvgStyle } from '../../ui/svg/SvgStyle'

const HeaderTitleBlock = styled.div`
    max-width: 600px;`

const HeaderTitleH1 = styled.h1`
    font-family: ${theme.fontFamilyTitle};
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 70px;
    color: ${theme.colors.whiteBlue};
    margin: 0;`

const Waves = WaveLittle.map((item, index) =>
  <svg key={index}> //but I don't understand why to use key. In the documentation says that this is very important -
                    that`s all.
    {item}
  </svg>
);

const HeaderTitle = () => {
  return (
    <HeaderTitleBlock>
      <DivMargin height='186px' />
      <HeaderTitleH1>
        {textComponent.header.title[0]}
      </HeaderTitleH1>
      <TitleH2>
        {textComponent.header.title[1]}
      </TitleH2>
      <DivMargin height='30px' />
      <SvgStyle
        width='82'
        height='12'
        fill='none'
        stroke={theme.colors.white}
      >
        {Waves}
      </SvgStyle>
      <DivMargin height='30px' />
      <TextStyle>
        {textComponent.header.text[0]}
      </TextStyle>
    </HeaderTitleBlock>
  )
}

export default HeaderTitle
