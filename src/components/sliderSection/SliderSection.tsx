import React from 'react'
import DivMargin from '../ui/DivMargin'
import SliderTitleBlockSection from './sliderSectionComponents/SliderTitleBlock'
import SliderBlock from './sliderSectionComponents/SliderBlock'
import { WaveLittle } from '../ui/svg/Wave'
import styled from '@emotion/styled'
import theme from '../ui/Theme'
import { SvgStyle } from '../ui/svg/SvgStyle'


const SliderWaveLittleCenter = styled.div`
text-align: center;`

const Waves = WaveLittle.map((item, index) =>
  <svg key={index}>
    {item}
  </svg>
);


const SliderSection = () => {
  return (
    <section>
      <DivMargin height='96px' />
      <SliderWaveLittleCenter>
        <SvgStyle
          width='82'
          height='12'
          fill='none'
          stroke={theme.colors.dark}
        >
          {Waves}
        </SvgStyle>
      </SliderWaveLittleCenter>
      <DivMargin height='30px' />
      <SliderTitleBlockSection />
      <DivMargin height='80px' />
      <SliderBlock />
      <DivMargin height='234px' />
    </section>
  )
}

export default SliderSection
