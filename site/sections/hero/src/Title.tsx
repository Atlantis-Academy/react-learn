import { Text } from '../../../ui/text/Text'
import React from 'react'
import messages from '../../../ui/text/Messages'
import { injectIntl } from 'react-intl'


const Title = ({intl}: any) => {
  return (
    <Text themeText='h1'>
      {intl.formatMessage(messages.hero.title)}
    </Text>
  )
}

export default injectIntl(Title)
