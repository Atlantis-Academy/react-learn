import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import theme from '../ui/theme/Theme'
import { Box } from '../ui/layout/Box'
import Logo from '../ui/svg/Logo'
import Button from '../ui/Button'
import textComponent from '../ui/text/TextComponents'
import { HeaderFormStyle } from '../ui/header/HeaderForm'
import { TitleForm } from '../ui/header/TitleForm'
import Form from './Form'
import { WavesL, WavesXL } from '../ui/svg/Wave'
import { HeaderFormBlock } from '../ui/header/HeaderFormBlock'
import { HeaderTitleH1 } from '../ui/header/HeaderTitle'
import { TextStyle, TitleH2 } from '../ui/text/TextStyle'


const HeroSection = () => {
  return (
    <Box background={theme.colors.darkBlue}>
      <DivMargin height='50px' />
      <Box display='flex'>
        <DivMargin width='105px'/>
        <Logo />
        <DivMargin width='860px'/>
        <Button >
          {textComponent.buttonText[1]}
        </Button>
        <DivMargin width='105px'/>
      </Box>
      <Box display={'flex'} position={'relative'}>
        <DivMargin width='105px'/>
        <Box width='600px'>
          <DivMargin height='186px' />
          <HeaderTitleH1>
            {textComponent.header.title[0]}
          </HeaderTitleH1>
          <TitleH2>
            {textComponent.header.title[1]}
          </TitleH2>
          <DivMargin height='30px' />
          <WavesL width={82} height={12}/>
          <DivMargin height='30px' />
          <TextStyle>
            {textComponent.header.text[0]}
          </TextStyle>
        </Box>
        <DivMargin width='141px'/>
        <HeaderFormBlock>
          <HeaderFormStyle>
            <TitleForm>
              {textComponent.header.title[2]}
            </TitleForm>
            <Form />
          </HeaderFormStyle>
          <Box position={'absolute'} top={'70px'} left={'240px'} zIndex={-1}>
            <WavesXL width={285} height={276}/>
          </Box>
          <Box position={'absolute'} top={'363px'} left={'-74px'} zIndex={-1}>
            <WavesXL width={285} height={197}/>
          </Box>
        </HeaderFormBlock>
      </Box>
    </Box>
  )
}
export default HeroSection
