import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { Box } from '../ui/layout/Box'
import textComponent from '../ui/text/TextComponents'
import { HeaderFormStyle } from '../ui/hero/HeaderForm'
import { TextForm } from '../ui/hero/TextForm'
import Form from './Form'
import { WavesL } from '../ui/svg/Wave'
import { HeaderTitleH1 } from '../ui/hero/HeaderTitle'    //TODO: all text in component
import { TextStyle, TitleH2 } from '../ui/text/TextStyle'
import { Section } from '../ui/hero/Section'
import { BoxSection } from '../ui/layout/BoxSection'
import { HeaderFormBlock } from '../ui/hero/HeaderFormBlock'
import { WaveFormTop } from '../ui/hero/WaveFormTop'
import { WaveFormBottom } from '../ui/hero/WaveFormBottom'


const HeroSection = () => {
  return (
    <Section>   //TODO: delete Section after all fixes
      <BoxSection
        alignItems={'center'}
      >
        <Box maxWidth='600px'>
          <HeaderTitleH1>
            {textComponent.header.title[0]}  //TODO: text in massage (react-intl)
          </HeaderTitleH1>
          <TitleH2>
            {textComponent.header.title[1]}
          </TitleH2>
          <DivMargin height='30px' />
          <WavesL
            width={82}
            height={12}
          />
          <DivMargin height='30px' />
          <TextStyle>
            {textComponent.header.text[0]}
          </TextStyle>
        </Box>
        <HeaderFormBlock>
          <WaveFormTop>
            <WaveFormBottom>
              <HeaderFormStyle>
                <TextForm>
                  {textComponent.header.title[2]}
                </TextForm>
                <Form />
              </HeaderFormStyle>
            </WaveFormBottom>
          </WaveFormTop>
        </HeaderFormBlock>
      </BoxSection>
      <DivMargin height='110px' />
    </Section>
  )
}
export default HeroSection
