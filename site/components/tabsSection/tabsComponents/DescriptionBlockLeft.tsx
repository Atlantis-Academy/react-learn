import { Svg1 } from '../../ui/svg/SvgAdventag'
import DivMargin from '../../ui/layout/DivMargin'
import textComponent from '../../TextComponents'
import React from 'react'
import styled from '@emotion/styled'
import { TextStyle, TitleH2 } from '../../ui/TextStyle'
import theme from '../../ui/Theme'


export const Title = styled(TitleH2)`
font-weight: 500;
color: ${theme.colors.black}`

export const DescrBlock = styled.div`
width: 280px`

export const TextStyleTabs = styled(TextStyle)`
font-size: 18px;
line-height: 25px;
color: ${theme.colors.dark}`

const DescrBlockLeft = ()=>{
  return(
    <DescrBlock>
      <Svg1 />
      <DivMargin height='30px'/>
      <Title>
        {textComponent.adventages.title[0]}
      </Title>
      <DivMargin height='20px'/>
      <TextStyleTabs>
        {textComponent.adventages.text[0]}
      </TextStyleTabs>
    </DescrBlock>
  )
}

export default DescrBlockLeft


