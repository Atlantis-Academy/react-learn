import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { WavesL } from '../ui/svg/Wave'
import { Box } from '../ui/layout/Box'
import { ArrowLeft } from '../ui/ArrowLeft'
import { ArrowRight } from '../ui/ArrowRight'
import Section from '../ui/Section'
import { BoxSection } from '../ui/layout/BoxSection'
import { Text } from '../ui/text/Text'
import { FormattedMessage } from 'react-intl'
import VideoBox from '../ui/video/VideoBox'
import { theme } from '../ui/theme'

const Video = () => {
  return (
    <Section
      bg={theme.colors.beige}
      position={'relative'}
    >
      <Box
        backgroundImage={'url(\'site/ui/svg/Wave.svg\')'}
        position={'absolute'}
        width={'285px'}
        height={'53px'}
        top={'-52px'}
        left={'52%'}
      />
      <Box
        backgroundImage={'url(\'site/ui/svg/Wave.svg\')'}
        backgroundSize={'285px 500px'}
        backgroundRepeat={'no-repeat repeat'}
        backgroundPosition={'65%'}
      >
        <DivMargin height='120px' />
        <BoxSection display={'block'}>
          <Box
            display={'flex'}
            justifyContent={'space-between'}
            width={'100%'}
          >
            <Box width={'390px'}>
              <WavesL
                width={82}
                height={10}
                stroke={theme.colors.dark}
              />
              <DivMargin height='30px' />
              <h2>
                <Text themeText={'sectionTitle'}>
                  <FormattedMessage id={'video.title'} />
                </Text>
              </h2>
            </Box>
            <Box
              display={'flex'}
              alignItems={'flex-end'}
            >
              <ArrowLeft />
              <DivMargin width='10px' />
              <ArrowRight />
            </Box>
          </Box>
          <DivMargin height='60px' />
          <Box
            display={'flex'}
            alignItems={'flex-end'}
          >
            <Box>
              <Box
                width={'810px'}
                height={'25px'}
                background={theme.colors.darkBeige}
                display={'flex'}
                alignItems={'center'}
              >
                <DivMargin width='9px' />
                <VideoBox />
              </Box>
              <Box
                width={'810px'}
                height={'475px'}
                backgroundImage={'url(\'site/ui/img/Rectangle.png\')'}
              />
            </Box>
            <Box
              position={'relative'}
              left={'-300px'}
            >
              <Box
                width={'703px'}
                height={'25px'}
                background={theme.colors.darkBeige}
                display={'flex'}
                alignItems={'center'}
              >
                <DivMargin width='9px' />
                <VideoBox />
              </Box>
              <Box
                width={'703px'}
                height={'412px'}
                backgroundImage={'url(\'site/ui/img/Rectangle.png\')'}
              />
            </Box>
          </Box>
        </BoxSection>
      </Box>
      <Box
        backgroundImage={'url(\'site/ui/svg/Wave.svg\')'}
        position={'absolute'}
        width={'285px'}
        height={'53px'}
        top={'823px'}
        left={'52%'}
      />
    </Section>
  )
}


export default Video
