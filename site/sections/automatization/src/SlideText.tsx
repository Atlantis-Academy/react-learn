import { Box } from '../../../ui/layout/Box2'
import { Text } from '../../../ui/text/Text'
import { theme } from '../../../ui/theme'
import messages from './Messages'
import { Button } from '../../../ui/Button'
import React from 'react'
import { injectIntl } from 'react-intl'

const SlideText = ({intl}: any) => {
  return (
    <Box
      width={'390px'}
      margin={0}
    >
      <Box>
        <Text
          size={theme.fontSize.s}
          lineHeight={theme.lineHeight.xs}
        >
          {intl.formatMessage(messages.text)}
        </Text>
      </Box>
      <Box height={'76px'} />
      <Button
      >
        {intl.formatMessage(messages.button)}
      </Button>
    </Box>
  )
}

export default injectIntl(SlideText)
