import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import Tabs from '../ui/Tabs'
import ProposBlock from './sectionComponent/ProposBlock'
import ProposBlock2 from './sectionComponent/ProposBlock2'


const ProposSection = ()=>{
  return(
    <section>
      <DivMargin height='150px'/>
      <Tabs/>
      <DivMargin height='90px'/>
      <ProposBlock/>
      <DivMargin height='100px'/>
      <ProposBlock2/>
      <DivMargin height='140px'/>
    </section>
  )
}

export default ProposSection
