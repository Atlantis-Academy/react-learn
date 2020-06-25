import DivMargin from '../../ui/DivMargin'
import { ArrowLeft } from '../../ui/ArrowLeft'
import { ArrowRight } from '../../ui/ArrowRight'
import textComponent from '../../TextComponents'
import { SectionTitleBlock } from '../../ui/SectionTitleBlock'
import React from 'react'
import { SectionTitle } from '../../ui/SectionTitle'


const LicensesTitleBlock = ()=>{
  return(
    <SectionTitleBlock>
      <DivMargin width='105px'/>
      <ArrowLeft/>
      <DivMargin width='10px'/>
      <ArrowRight/>
      <DivMargin width='480px' />
      <SectionTitle>
        {textComponent.sectionTitleBlock[1]}
      </SectionTitle>
    </SectionTitleBlock>
  )
}

export default LicensesTitleBlock
