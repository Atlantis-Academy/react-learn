import styled from '@emotion/styled'
import React from 'react'
import textComponent from '../../TextComponents'
import theme from '../../ui/Theme'
import { TitleH2 } from '../../ui/TextStyle'
import { WaveLittleDark } from '../../ui/svg/Wave'
import DivMargin from '../../ui/DivMargin'

const Title = styled(TitleH2)`
font-weight: 500;
font-size: 45px;
color: ${theme.colors.dark};
width: 390px;`

const TitleBlock = ()=>{
  return(
    <div>
      <WaveLittleDark/>
      <DivMargin height='30px'/>
      <Title>
        {textComponent.compSection.title[0]}
      </Title>
    </div>
  )
}

export default TitleBlock
