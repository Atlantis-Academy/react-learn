import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { Box } from '../ui/layout/Box'
import { HeroForm } from '../ui/hero/HeroForm'
import Form from './Form'
import { WavesL } from '../ui/svg/Wave'
import Section from '../ui/Section'
import { BoxSection } from '../ui/layout/BoxSection'
import { HeroFormBlock } from '../ui/hero/HeroFormBlock'
import { WaveFormTop } from '../ui/hero/WaveFormTop'
import { WaveFormBottom } from '../ui/hero/WaveFormBottom'
import { FormattedMessage } from 'react-intl'
import { Text } from '../ui/text/Text'
import theme from '../ui/theme/Theme'


const HeroSection = () => {
  return (
    <Section>
      <BoxSection
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Box maxWidth='510px'>
          <h1>
            <Text themeText='h1'>
              <FormattedMessage id={'hero.title'} />
            </Text>
          </h1>
          <h2>
            <Text
              themeText='h2'
              color={theme.colors.white}
            >
              <FormattedMessage id={'hero.subTitle'} />
            </Text>
          </h2>
          <DivMargin height='30px' />
          <WavesL
            width={82}
            height={12}
          />
          <DivMargin height='30px' />
          <Text
            color={theme.colors.white}
            size={'22px'}
          >
            <FormattedMessage id={'hero.descr'} />
          </Text>
        </Box>
        <HeroFormBlock>
          <WaveFormTop>
            <WaveFormBottom>
              <HeroForm>
                <DivMargin height='40px' />
                <Text
                  size={'28px'}
                  color={theme.colors.white}
                  lineHeight={'30px'}
                  font={theme.fontFamilyTitle}
                >
                  <FormattedMessage id={'hero.form.title'} />
                </Text>
                <Form />
                <DivMargin height='30px' />
              </HeroForm>
            </WaveFormBottom>
          </WaveFormTop>
        </HeroFormBlock>
      </BoxSection>
      <DivMargin height='28px' />
    </Section>
  )
}
export default HeroSection
