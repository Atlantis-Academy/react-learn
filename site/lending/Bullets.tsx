import React from 'react'
import Tabs from '../ui/Tabs'
import DivMargin from '../ui/layout/DivMargin'
import { Box } from '../ui/layout/Box'
import { Svg1, Svg2, Svg3 } from '../ui/svg/SvgAdventag'
import { Title } from '../ui/bullets/Title'
import textComponent from '../ui/text/TextComponents'
import { TextStyleTabs } from '../ui/bullets/Text'


const Bullets = ()=>{
  return(
    <section>
      <Tabs/>
      <DivMargin height='80px'/>
      <Box width={'1120px'} display={'flex'} margin={'0 auto'} justifyContent={'space-between'}>
        <Box width={'280px'}>
          <Svg1 />
          <DivMargin height='30px'/>
          <Title>
            {textComponent.adventages.title[0]}
          </Title>
          <DivMargin height='20px'/>
          <TextStyleTabs>
            {textComponent.adventages.text[0]}
          </TextStyleTabs>
        </Box>
        <Box width={'280px'}>
          <Svg2 />
          <DivMargin height='30px'/>
          <Title>
            {textComponent.adventages.title[1]}
          </Title>
          <DivMargin height='20px'/>
          <TextStyleTabs>
            {textComponent.adventages.text[1]}
          </TextStyleTabs>
        </Box>
        <Box width={'280px'}>
          <Svg3 />
          <DivMargin height='30px'/>
          <Title>
            {textComponent.adventages.title[2]}
          </Title>
          <DivMargin height='20px'/>
          <TextStyleTabs>
            {textComponent.adventages.text[2]}
          </TextStyleTabs>
        </Box>
      </Box>
      <DivMargin height='180px'/>
    </section>
  )
}

export {Bullets}
