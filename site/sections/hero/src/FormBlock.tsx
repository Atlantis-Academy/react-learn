import { Text } from '../../../ui/text/Text'
import { injectIntl } from 'react-intl'
import Form from './Form'
import { HeroForm } from '../../../ui/hero/HeroForm'
import React from 'react'
import { Box } from '../../../ui/layout/NewBox'
import messages from './Messages'
import { theme } from '../../../ui/theme'

const FormBlock = ({intl}: any) => {
  return (
    <HeroForm>
      <Box height={40} />
      <Text
        size={theme.fontSize.ml}
        color={theme.colors.white}
        font={theme.fontFamily.text}
      >
        {intl.formatMessage(messages.hero.formTitle)}
      </Text>
      <Form />
      <Box height={40} />
    </HeroForm>
  )
}

export default injectIntl(FormBlock)
