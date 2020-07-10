import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import theme from '../ui/theme/Theme'
import { WavesL } from '../ui/svg/Wave'
import { Box } from '../ui/layout/Box'
import { ArrowLeft } from '../ui/ArrowLeft'
import { ArrowRight } from '../ui/ArrowRight'
import { Text } from '../ui/text/Text'
import Section from '../ui/Section'
import { FormattedMessage } from 'react-intl'
import License1 from '../ui/licenses/License1'
import License2 from '../ui/licenses/License2'
import License3 from '../ui/licenses/License3'
import License4 from '../ui/licenses/License4'


const Licenses = () => {
  return (
    <Section bg={theme.colors.white}>
      <DivMargin height='120px' />
      <Box textAlign={'center'}>
        <WavesL
          width={80}
          height={10}
          stroke={theme.colors.dark}
        />
        <DivMargin height='30px' />
      </Box>
      <Box display={'flex'}>
        <DivMargin width='105px' />
        <ArrowLeft />
        <DivMargin width='10px' />
        <ArrowRight />
        <DivMargin width='480px' />
        <Text
          themeText={'sectionTitle'}
          width={'300px'}
        >
          <FormattedMessage id={'licenses.title'} />
        </Text>
      </Box>
      <DivMargin height='178px' />
      <Box display={'flex'}>
        <Box width={'250px'}>
          <License1 />
          <DivMargin height='30px' />
          <Text
            size={'18px'}
            lineHeight={'25px'}
          >
            <FormattedMessage id={'licenses.descr1'} />
          </Text>
        </Box>
        <DivMargin width='65px' />
        <Box width={'250px'}>
          <License2 />
          <DivMargin height='30px' />
          <Text
            size={'18px'}
            lineHeight={'25px'}
          >
            <FormattedMessage id={'licenses.descr2'} />
          </Text>
        </Box>
        <DivMargin width='65px' />
        <Box width={'250px'}>
          <License3 />
          <DivMargin height='30px' />
          <Text
            size={'18px'}
            lineHeight={'25px'}
          >
            <FormattedMessage id={'licenses.descr3'} />
          </Text>
        </Box>
        <DivMargin width='65px' />
        <Box width={'250px'}>
          <License4 />
          <DivMargin height='30px' />
          <Text
            size={'18px'}
            lineHeight={'25px'}
          >
            <FormattedMessage id={'licenses.descr4'} />
          </Text>
        </Box>
        <DivMargin width='65px' />
        <Box width={'250px'}>
          <License3 />
          <DivMargin height='30px' />
          <Text
            size={'18px'}
            lineHeight={'25px'}
          >
            <FormattedMessage id={'licenses.descr5'} />
          </Text>
        </Box>
      </Box>
      <DivMargin height='210px' />

    </Section>
  )
}

export default Licenses
