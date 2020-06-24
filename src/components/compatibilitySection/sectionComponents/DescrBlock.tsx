import styled from '@emotion/styled'
import React from 'react'
import textComponent from '../../TextComponents'
import theme from '../../ui/Theme'
import { TitleH2 } from '../../ui/TextStyle'
import { WaveLittle } from '../../ui/svg/Wave'
import DivMargin from '../../ui/DivMargin'
import { SvgStyle } from '../../ui/svg/SvgStyle'

const Title = styled(TitleH2)`
font-weight: 500;
font-size: 45px;
color: ${theme.colors.dark};
width: 390px;`

const Waves = WaveLittle.map((item, index) =>
  <svg key={index}>
    {item}
  </svg>
);

const TitleBlock = () => {
  return (
    <div>
      <SvgStyle
        width='82'
        height='12'
        fill='none'
        stroke={theme.colors.dark}
      >
        {Waves}
      </SvgStyle>
      <DivMargin height='30px' />
      <Title>
        {textComponent.compSection.title[0]}
      </Title>
    </div>
  )
}

export default TitleBlock
