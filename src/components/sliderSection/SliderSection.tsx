import React from 'react'
import DivMargin from '../ui/DivMargin'
import SliderTitleBlockSection from './sliderSectionComponents/SliderTitleBlock'
import SliderBlock from './sliderSectionComponents/SliderBlock'
import { WaveLittleDark } from '../ui/svg/Wave'
import styled from '@emotion/styled'


const SliderWaveLittleCenter = styled.div`
text-align: center;`


const SliderSection = () => {
  return (
    <section>
      <DivMargin  height='96px' />
      <SliderWaveLittleCenter>
        <WaveLittleDark />
      </SliderWaveLittleCenter>
      <DivMargin  height='30px' />
      <SliderTitleBlockSection />
      <DivMargin height='80px' />
      <SliderBlock />
      <DivMargin height='234px' />
    </section>
  )
}

export default SliderSection
