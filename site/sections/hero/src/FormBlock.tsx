import { Text } from '../../../ui/text/Text'
import theme from '../../../ui/theme/Theme'
import { injectIntl } from 'react-intl'
import Form from './Form'
import { HeroForm } from '../../../ui/hero/HeroForm'
import React from 'react'
import { Box } from '../../../ui/layout/Box2'
import messages from '../../../ui/text/Messages'

const FormBlock = ({intl}: any) => {
  return (
    <HeroForm>
      <Box height='40px' />
      <Text
        size={'28px'}
        color={theme.colors.white}
        lineHeight={'30px'}
        font={theme.fontFamilyTitle}
      >
        {intl.formatMessage(messages.hero.formTitle)}
      </Text>
      <Form />
      <Box height='30px' />
    </HeroForm>
  )
}

export default injectIntl(FormBlock)