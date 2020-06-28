import React from 'react'
import DivMargin from './components/ui/layout/DivMargin'
import theme from './components/ui/Theme'
import { PositionBlock } from './components/ui/layout/PositionBlock'
import Logo from './components/ui/svg/Logo'
import Button from './components/ui/Button'
import textComponent from './components/TextComponents'
import { HeaderFormStyle } from './components/ui/header/HeaderForm'
import { TitleForm } from './components/ui/header/TitleForm'
import Form from './Form'
import { WaveBigBlock, WaveBigBlock2 } from './components/ui/WaveBlock'
import { WavesL, WavesXL } from './components/ui/svg/Wave'
import { HeaderFormBlock } from './components/ui/header/HeaderFormBlock'
import { HeaderTitleH1 } from './components/ui/header/HeaderTitle'
import { TextStyle, TitleH2 } from './components/ui/TextStyle'


const HeaderSection = () => {
  return (
    <PositionBlock background={theme.colors.darkBlue}>
      <DivMargin height='50px' />
      <PositionBlock display='flex'>
        <DivMargin width='105px'/>
        <Logo />
        <DivMargin width='860px'/>
        <Button >
          {textComponent.buttonText[1]}
        </Button>
        <DivMargin width='105px'/>
      </PositionBlock>
      <PositionBlock display={'flex'} position={'relative'}>
        <DivMargin width='105px'/>
        <PositionBlock width='600px'>
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
        </PositionBlock>
        <DivMargin width='141px'/>
        <HeaderFormBlock>
          <HeaderFormStyle>
            <TitleForm>
              {textComponent.header.title[2]}
            </TitleForm>
            <Form />
          </HeaderFormStyle>
          <WaveBigBlock>
            <WavesXL width={285} height={276}/>
          </WaveBigBlock>
          <WaveBigBlock2>
            <WavesXL width={285} height={197}/>
          </WaveBigBlock2>
        </HeaderFormBlock>
      </PositionBlock>
    </PositionBlock>
  )
}
export default HeaderSection
