import { SvgStyle } from '../../ui/svg/SvgStyle'
import theme from '../../ui/Theme'
import { WavesL } from '../../ui/svg/Wave'
import DivMargin from '../../ui/layout/DivMargin'
import textComponent from '../../TextComponents'
import React from 'react'
import styled from '@emotion/styled'
import { TitleH2 } from '../../ui/TextStyle'


const Title = styled(TitleH2)`
width: 160px;
color: ${theme.colors.dark}`

const IndusriesTitle = ()=>{
  return(
    <div>
      <SvgStyle
        width='82'
        height='12'
        fill='none'
        stroke={theme.colors.dark}
      >
        {WavesL}
      </SvgStyle>
      <DivMargin height='30px'/>
      <Title>
        {textComponent.indusriesSection.title[0]}
      </Title>
    </div>
  )
}

export default IndusriesTitle
