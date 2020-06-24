import { DescrBlock, TextStyleTabs, Title } from './DescriptionBlockLeft'
import React from 'react'
import { Svg2 } from '../../ui/svg/SvgAdventag'
import DivMargin from '../../ui/DivMargin'
import textComponent from '../../TextComponents'


const DecrBlockCenter = ()=>{
  return(
    <DescrBlock>
      <Svg2 />
      <DivMargin height='30px'/>
      <Title>
        {textComponent.adventages.title[1]}
      </Title>
      <DivMargin height='20px'/>
      <TextStyleTabs>
        {textComponent.adventages.text[1]}
      </TextStyleTabs>
    </DescrBlock>
  )
}

export default DecrBlockCenter
