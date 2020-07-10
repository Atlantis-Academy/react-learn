import { Text } from '../../../ui/text/Text'
import theme from '../../../ui/theme/Theme'
import { FormattedMessage } from 'react-intl'
import Form from '../../Form'
import { HeroForm } from '../../../ui/hero/HeroForm'
import React from 'react'
import { Box } from '../../../ui/layout/Box2'


export const FormBlock = ()=>{
  return(
    <HeroForm>
      <Box height='40px' />
      <Text
        size={'28px'}
        color={theme.colors.white}
        lineHeight={'30px'}
        font={theme.fontFamilyTitle}
      >
        <FormattedMessage id={'hero.form.title'} />
      </Text>
      <Form />
      <Box height='30px' />
    </HeroForm>
  )
}
