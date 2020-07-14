import theme from '../../../ui/theme/Theme'
import { Text } from '../../../ui/text/Text'
import React from 'react'
import messages from '../../../ui/text/Messages'
import { injectIntl } from 'react-intl'

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
