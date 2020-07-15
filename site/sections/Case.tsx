import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { Box } from '../ui/layout/Box'
import { WavesL } from '../ui/svg/Wave'
import { Text } from '../ui/text/Text'
import { AdobeSvg, AmoCrmSvg, BitrixSvg, ExcelSvg, OnesSvg, PpSvg, WordSvg } from '../ui/svg/ProgramSvg'
import Section from '../ui/Section'
import { BoxSection } from '../ui/layout/BoxSection'
import { FormattedMessage } from 'react-intl'
import { theme } from '../ui/theme'


const Case = () => {
  return (
    <Section
      bg={theme.colors.beige}
      position={'relative'}
    >
      <Box
        width={'285px'}
        height={'186px'}
        backgroundImage={'url(\'site/ui/svg/Wave.svg\')'}
        position={'absolute'}
        left={'980px'}
        top={'-64px'}
      />
      <Box height={'120px'} />
      <BoxSection
        justifyContent={'space-between'}
      >
        <Box width={'390px'}>
          <WavesL
            width={82}
            height={12}
            fill={'none'}
            stroke={theme.colors.dark}
          />
          <DivMargin height='30px' />
          <Text themeText={'sectionTitle'}>
            <FormattedMessage id={'case.title'} />
          </Text>
        </Box>
        <Box
          width={'810px'}
          height={'410px'}
          background={theme.colors.beige}
          border={`20px solid ${theme.colors.white}`}
        >
          <DivMargin height='80px' />
          <Box
            display={'flex'}
            justifyContent={'space-around'}
          >
            <WordSvg />
            <ExcelSvg />
            <PpSvg />
            <AdobeSvg />
          </Box>
          <DivMargin height='107px' />
          <Box
            display={'flex'}
            justifyContent={'space-around'}
          >
            <AmoCrmSvg />
            <BitrixSvg />
            <OnesSvg />
          </Box>
        </Box>
      </BoxSection>
      <DivMargin height='50px' />
      <Box display={'flex'}>
        <DivMargin width='525px' />
        <Text
          size={'18px'}
          lineHeight={'25px'}
          width={'495px'}
        >
          <FormattedMessage id={'case.descr'} />
        </Text>
      </Box>
      <Box
        width={'285px'}
        height={'118px'}
        backgroundImage={'url(\'site/ui/svg/Wave.svg\')'}
        position={'relative'}
        left={'105px'}
        top={'55px'}
      />
    </Section>
  )
}

export default Case
