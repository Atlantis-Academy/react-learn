import { FormattedMessage } from 'react-intl'
import { Text } from '../../../ui/text/Text'
import React from 'react'


export const Title = ()=>{
  return(
    <Text themeText='h1'>
      <FormattedMessage id={'hero.title'} />
    </Text>
  )
}
