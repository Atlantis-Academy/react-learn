import { DescrBlock, TextStyleTabs, Title } from './DescriptionBlockLeft'
import React from 'react'
import { Svg3 } from '../../ui/svg/SvgAdventag'
import DivMargin from '../../ui/layout/DivMargin'
import textComponent from '../../TextComponents'


const DescrBlockRight = ()=>{
  return(
    <DescrBlock>
      <Svg3 />
      <DivMargin height='30px'/>
      <Title>
        {textComponent.adventages.title[2]}
      </Title>
      <DivMargin height='20px'/>
      <TextStyleTabs>
        {textComponent.adventages.text[2]}
      </TextStyleTabs>
    </DescrBlock>
  )
}

export default DescrBlockRight
