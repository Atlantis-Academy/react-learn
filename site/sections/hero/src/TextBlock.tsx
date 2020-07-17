import { Text } from '../../../ui/text/Text'
import { WavesL } from '../../../ui/icon/Wave'
import { Box } from '../../../ui/layout/Box2'
import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import { TitleH1, TitleH2 } from '../../../ui/theme/Titles'
import messages from './Messages'
import { injectIntl } from 'react-intl'
import { theme } from '../../../ui/theme'


const TextBlock = ({intl}: any) => {
  return (
    <Box width='600px'>
      <TitleH1>
        <Title />
      </TitleH1>
      <TitleH2>
        <SubTitle />
      </TitleH2>
      <Box height='30px' />
      <WavesL
        width={82}
        height={12}
      />
      <Box height='15px' />
      <Text
        color={theme.colors.white}
        size={theme.fontSize.m}
        lineHeight={theme.lineHeight.s}
      >
        {intl.formatMessage(messages.hero.text)}
      </Text>
    </Box>
  )
}

export default injectIntl(TextBlock)
