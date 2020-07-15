import { Box } from '../../../ui/layout/Box2'
import { theme } from '../../../ui/theme'
import { Text } from '../../../ui/text/Text'
import { injectIntl } from 'react-intl'
import { Button } from '../../../ui/Button'
import React from 'react'
import messages from './Messages'


const Slider = ({intl, state}: any) => {

  return (
    <Box
      display={'flex'}
      position={'relative'}
      width={'1018px'}
      justify={'start'}
    >
      {state.showSlide ?
        <Box
          width={'495px'}
          height={'370px'}
          bg={theme.colors.dark}
          borderRadius={theme.borderRadius.m}
          margin={0}
        >
        </Box> :
        <Box
          width={'495px'}
          height={'370px'}
          bg={theme.colors.whiteBlue}
          borderRadius={theme.borderRadius.m}
          margin={0}
        >
        </Box>}
      <Box width={'30px'} margin={0} />
      <Box width={'390px'} margin={0}>
        <Box>
          <Text size={theme.fontSize.s}>
            {intl.formatMessage(messages.text)}
          </Text>
        </Box>
        <Box height={'76px'} />
        <Button
        >
          {intl.formatMessage(messages.button)}
        </Button>
      </Box>
      <Box
        width={'285px'}
        height={'118px'}
        bgI={'url(\'site/ui/svg/Wave.svg\')'}
        position={'absolute'}
        left={'-105px'}
        top={'315px'}
      />
    </Box>
  )
}

export default injectIntl(Slider)
