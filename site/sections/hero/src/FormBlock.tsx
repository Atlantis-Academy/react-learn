import { Text } from '../../../ui/text/Text'
import { injectIntl } from 'react-intl'
import Form from './Form'
import { HeroForm } from '../../../ui/hero/HeroForm'
import React from 'react'
import { Box } from '../../../ui/layout/Box2'
import messages from './Messages'
import { theme } from '../../../ui/theme'

const FormBlock = ({intl}: any) => {
  return (
    <HeroForm>
      <Box height='40px' />
      <Text
        size={theme.fontSize.xs}
        color={theme.colors.white}
        font={theme.fontFamily.text}
      >
        {intl.formatMessage(messages.hero.formTitle)}
      </Text>
      <Form />
      <Box height='30px' />
    </HeroForm>
  )
}

export default injectIntl(FormBlock)
