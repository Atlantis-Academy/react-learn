import React from 'react'
import DivMargin from '../DivMargin'
import SliderTitleBlockSection from './sliderSectionComponents/SliderTitleBlock'
import SliderBlock from './sliderSectionComponents/SliderBlock'
import SvgTitle from './sliderSectionComponents/SvgTitleBlock'



const SliderSection = () => {
  return (
    <section>
      <DivMargin  height='96px' />
      <SvgTitle />
      <SliderTitleBlockSection />
      <DivMargin height='80px' />
      <SliderBlock />
      <DivMargin height='234px' />
    </section>
  )
}

export default SliderSection
