import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import SliderTitleBlockSection from './sliderSectionComponents/SliderTitleBlock'
import SliderBlock from './sliderSectionComponents/SliderBlock'
import { Waves } from '../ui/svg/Wave'
import theme from '../ui/Theme'
import { SvgStyle } from '../ui/svg/SvgStyle'
import { WaveLittleCenter } from '../ui/WaveLittleCenterBlock'





const SliderSection = () => {
  return (
    <section>
      <DivMargin height='96px' />
      <WaveLittleCenter>
        <SvgStyle
          width='82'
          height='12'
          fill='none'
          stroke={theme.colors.dark}
        >
          {Waves}
        </SvgStyle>
      </WaveLittleCenter>
      <DivMargin height='30px' />
      <SliderTitleBlockSection />
      <DivMargin height='80px' />
      <SliderBlock />
      <DivMargin height='234px' />
    </section>
  )
}

export default SliderSection
