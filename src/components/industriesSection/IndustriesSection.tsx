import React from 'react'
import styled from '@emotion/styled'
import theme from '../ui/Theme'
import DivMargin from '../ui/layout/DivMargin'
import IndusriesTitle from './sectionComponent/IndusriesTitle'
import IndustriBlock from './sectionComponent/IndustriBlock'
import { SvgStyle } from '../ui/svg/SvgStyle'
import { WaveBig } from '../ui/svg/Wave'

const SectionStyle = styled.section`
background-color: ${theme.colors.beige}`

const SectionBlock = styled.div`
width: 1335px;
margin: 0 auto;
display: flex;
align-items: center;
position: relative;
z-index: 1;`

const WaveBlock = styled.div`
position: absolute;
top: 160px;
left: 303px;
z-index: 0;`

const IndustriesSection = ()=>{
  return(
    <SectionStyle>
      <DivMargin height='100px'/>
      <SectionBlock>
        <IndusriesTitle/>
        <DivMargin width='50px'/>
        <IndustriBlock/>
        <WaveBlock>
          <SvgStyle width='810px' height='289px' fill='none'>
            {WaveBig}
          </SvgStyle>
        </WaveBlock>
      </SectionBlock>
      <DivMargin height='100px'/>
    </SectionStyle>
  )
}

export default IndustriesSection
