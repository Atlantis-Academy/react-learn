import { Text } from '../../../ui/text/Text'
import { FormattedMessage } from 'react-intl'
import theme from '../../../ui/theme/Theme'
import DivMargin from '../../../ui/layout/DivMargin'
import { WavesL } from '../../../ui/svg/Wave'
import { Box } from '../../../ui/layout/Box2'
import React from 'react'
import { Title } from './Title'
import { SubTitle } from './SubTitle'


const TextBlock = ()=>{
  return(
    <Box width='510px'>
      <h1>
        <Title/>
      </h1>
      <h2>
        <SubTitle/>
      </h2>
      <Box height='30px' />
      <WavesL
        width={82}
        height={12}
      />
      <DivMargin height='30px' />
      <Text
        color={theme.colors.white}
        size={'22px'}
      >
        <FormattedMessage id={'hero.descr'} />
      </Text>
    </Box>
  )
}

export default TextBlock
