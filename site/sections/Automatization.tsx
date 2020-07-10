import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { WavesL } from '../ui/svg/Wave'
import theme from '../ui/theme/Theme'
import { Box } from '../ui/layout/Box'
import { ArrowLeft } from '../ui/ArrowLeft'
import { ArrowRight } from '../ui/ArrowRight'
import { FormattedMessage } from 'react-intl'
import { Text } from '../ui/text/Text'
import { Button } from '../ui/Button'


const Automatization = () => {
  return (
    <section>
      <DivMargin height='96px' />
      <Box textAlign={'center'}>
        <WavesL
          width={82}
          height={12}
          fill={'none'}
          stroke={theme.colors.dark}
        />
      </Box>
      <DivMargin height='30px' />
      <Box
        display={'flex'}
        alignItems={'center'}
      >
        <DivMargin width='105px' />
        <ArrowLeft />
        <DivMargin width='10px' />
        <ArrowRight />
        <DivMargin width='480px' />
        <Box maxWidth={'390px'}>
          <h2>
            <Text themeText={'sectionTitle'}>
              <FormattedMessage id={'auto.title'} />
            </Text>
          </h2>
        </Box>
      </Box>
      <DivMargin height='80px' />
      <Box display={'flex'} position={'relative'}>
        <DivMargin width='210px' />
        <Box
          width={'495px'}
          height={'370px'}
          background={theme.colors.dark}
          borderRadius={'10px'}
        >
        </Box>
        <DivMargin width='30px' />
        <Box>
          <Box maxWidth={'390px'}>
            <Text size={'18px'}>
              <FormattedMessage id={'auto.text'} />
            </Text>
          </Box>
          <DivMargin height='25px' />
          <Button>
            <FormattedMessage id={'auto.button'} />
          </Button>
        </Box>
        <Box
          width={'285px'}
          height={'118px'}
          backgroundImage={'url(\'site/ui/svg/Wave.svg\')'}
          position={'absolute'}
          left={'100px'}
          top={'315px'}
        />
      </Box>
      <DivMargin height='234px' />
    </section>
  )
}

export default Automatization
