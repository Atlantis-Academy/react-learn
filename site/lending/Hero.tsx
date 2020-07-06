import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { Box } from '../ui/layout/Box'
import { HeaderFormStyle } from '../ui/hero/HeaderForm'
import { TextForm } from '../ui/hero/TextForm'
import Form from './Form'
import { WavesL } from '../ui/svg/Wave'
import { Text } from '../ui/hero/HeaderTitle'
import { TextStyle, TitleH2 } from '../ui/text/TextStyle'
import { Section } from '../ui/hero/Section'
import { BoxSection } from '../ui/layout/BoxSection'
import { HeaderFormBlock } from '../ui/hero/HeaderFormBlock'
import { WaveFormTop } from '../ui/hero/WaveFormTop'
import { WaveFormBottom } from '../ui/hero/WaveFormBottom'
import { FormattedMessage } from 'react-intl'


const HeroSection = () => {
  return (
    <Section>
      <BoxSection
        alignItems={'center'}
      >
        <Box maxWidth='600px'>
          <Text TextTheme='h1'>
            <FormattedMessage id={'hero.title'}/>
          </Text>
          <TitleH2>
            <FormattedMessage id={'hero.subTitle'}/>
          </TitleH2>
          <DivMargin height='30px' />
          <WavesL
            width={82}
            height={12}
          />
          <DivMargin height='30px' />
          <TextStyle>
            <FormattedMessage id={'hero.descr'}/>
          </TextStyle>
        </Box>
        <HeaderFormBlock>
          <WaveFormTop>
            <WaveFormBottom>
              <HeaderFormStyle>
                <TextForm>
                  <FormattedMessage id={'hero.form.title'}/>
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
