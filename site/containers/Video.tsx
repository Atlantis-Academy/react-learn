import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { WavesL, WavesXL } from '../ui/svg/Wave'
import { Box } from '../ui/layout/Box'
import theme from '../ui/theme/Theme'
import { Title } from '../ui/video/Title'
import textComponent from '../ui/text/TextComponents'
import { ArrowLeft } from '../ui/ArrowLeft'
import { ArrowRight } from '../ui/ArrowRight'

const Video = () => {
  return (
    <Box background={theme.colors.beige}>
      <DivMargin height='120px' />
      <Box width={'1230px'} margin={'0 auto'}>
        <WavesL width={82} height={10} fill={'none'}/>
        <DivMargin height='30px'/>
        <Box display={'flex'}>
          <Title>
            {textComponent.videoSection.title[0]}
          </Title>
          <DivMargin width='690px'/>
          <ArrowLeft/>
          <DivMargin width='10px'/>
          <ArrowRight/>
        </Box>
        <DivMargin height='50px'/>
        <Box position={'relative'} zIndex={2} width={'810px'} height={'475px'} background={theme.colors.dark}/>
      </Box>
      <Box position={'absolute'} top={'4000px'} left={'954px'} zIndex={1}>
        <WavesXL width={'285px'} height={'486px'} fill={'none'}/>
      </Box>
    </Box>
  )
}


export default Video
