import { Text } from '../../../ui/text/Text'
import theme from '../../../ui/theme/Theme'
import { injectIntl } from 'react-intl'
import Form from './Form'
import { HeroForm } from '../../../ui/hero/HeroForm'
import React from 'react'
import { Box } from '../../../ui/layout/Box2'
import messages from './Messages'
import fontSize from '../../../ui/theme/FontSize'

const FormBlock = ({intl}: any) => {
  return (
    <HeroForm>
      <Box height='40px' />
      <Text
        size={fontSize.ml}
        color={theme.colors.white}
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
