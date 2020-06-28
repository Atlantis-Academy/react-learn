import React from 'react'
import theme from '../../ui/Theme'
import { WavesL } from '../../ui/svg/Wave'
import { SvgStyle } from '../../ui/svg/SvgStyle'
import styled from '@emotion/styled'
import DivMargin from '../../ui/layout/DivMargin'
import { TitleH2 } from '../../ui/TextStyle'
import textComponent from '../../TextComponents'
import { ArrowLeft } from '../../ui/ArrowLeft'
import { ArrowRight } from '../../ui/ArrowRight'
import VideoBlock from './VideoBlock'


const BlockStyle = styled.div`
width: 1230px;
margin: 0 auto;`

const Title = styled(TitleH2)`
width: 390px;
color: ${theme.colors.dark}`

const TitleBlockStyle = styled.div`
display: flex;`

const TitleBlock = ()=>{
  return(
    <BlockStyle>
      <SvgStyle
        width='82'
        height='12'
        fill='none'
        stroke={theme.colors.dark}
      >
        {WavesL}
      </SvgStyle>
      <DivMargin height='30px'/>
      <TitleBlockStyle>
        <Title>
          {textComponent.videoSection.title[0]}
        </Title>
        <DivMargin width='690px'/>
        <ArrowLeft/>
        <DivMargin width='10px'/>
        <ArrowRight/>
      </TitleBlockStyle>
      <DivMargin height='50px'/>
      <VideoBlock/>
    </BlockStyle>
  )
}

export default TitleBlock
