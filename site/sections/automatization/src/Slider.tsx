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
      <Box
        width={'495px'}
        height={'370px'}
        bg={theme.colors.dark}
        borderRadius={theme.borderRadius.m}
        margin={0}
        display={'flex'}
        justify={'center'}
        alignItems={'center'}
      >
        <img
          src={state.img[state.imgIndex]}
          alt=''
        />
      </Box>
      <Box
        width={'30px'}
        margin={0}
      />
      <Box
        width={'390px'}
        margin={0}
      >
        <Box>
          <Text size={theme.fontSize.s} lineHeight={theme.lineHeight.xs}>
            {intl.formatMessage(messages.text)}
          </Text>
        </Box>
        <Box height={'76px'} />
        <Button
        >
          {intl.formatMessage(messages.button)}
        </Button>
      </Box>

    </Box>
  )
}

export default injectIntl(Slider)
