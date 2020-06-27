import DivMargin from '../../ui/layout/DivMargin'
import { ArrowLeft } from '../../ui/ArrowLeft'
import { ArrowRight } from '../../ui/ArrowRight'
import React from 'react'
import textComponent from '../../TextComponents'
import { SectionTitleBlock } from '../../ui/SectionTitleBlock'
import { SectionTitle } from '../../ui/SectionTitle'


const SliderTitleBlockSection = ()=>{
  return(
    <SectionTitleBlock>
      <DivMargin width='105px'/>
      <ArrowLeft/>
      <DivMargin width='10px'/>
      <ArrowRight/>
      <DivMargin width='480px' />
      <SectionTitle>
        {textComponent.sectionTitleBlock[0]}
      </SectionTitle>
    </SectionTitleBlock>
  )
}

export default SliderTitleBlockSection
