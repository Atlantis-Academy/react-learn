import { Text } from '../../../ui/text/Text'
import React from 'react'
import messages from './Messages'
import { injectIntl } from 'react-intl'
import { theme } from '../../../ui/theme'

const SubTitle = ({intl}: any) => {
  return (
    <Text
      themeText='h2'
      color={theme.colors.white}
    >
      {intl.formatMessage(messages.hero.subTitle)}
    </Text>
  )
}

export default injectIntl(SubTitle)
