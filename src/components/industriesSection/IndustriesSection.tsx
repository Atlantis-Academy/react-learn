import React from 'react'
import styled from '@emotion/styled'
import theme from '../ui/Theme'
import DivMargin from '../ui/DivMargin'
import IndusriesTitle from './sectionComponent/IndusriesTitle'
import IndustriBlock from './sectionComponent/IndustriBlock'

const SectionStyle = styled.section`
background-color: ${theme.colors.beige}`

const SectionBlock = styled.div`
width: 1335px;
margin: 0 auto;
display: flex;
align-items: center;`

const IndustriesSection = ()=>{
  return(
    <SectionStyle>
      <DivMargin height='100px'/>
      <SectionBlock>
        <IndusriesTitle/>
        <DivMargin width='50px'/>
        <IndustriBlock/>
      </SectionBlock>
      <DivMargin height='100px'/>
    </SectionStyle>
  )
}

export default IndustriesSection
