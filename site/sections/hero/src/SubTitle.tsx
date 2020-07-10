import theme from '../../../ui/theme/Theme'
import { FormattedMessage } from 'react-intl'
import { Text } from '../../../ui/text/Text'
import React from 'react'


export const SubTitle = ()=>{
  return(
    <Text
      themeText='h2'
      color={theme.colors.white}
    >
      <FormattedMessage id={'hero.subTitle'} />
    </Text>
  )
}
