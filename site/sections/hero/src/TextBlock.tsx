import { Text } from '../../../ui/text/Text'
import { WavesL } from '../../../ui/icon/Wave'
import { Box } from '../../../ui/layout/NewBox'
import React from 'react'
import Title from './Title'
import SubTitle from './SubTitle'
import { TitleH1, TitleH2 } from '../../../ui/theme/Titles'
import messages from './Messages'
import { injectIntl } from 'react-intl'
import { theme } from '../../../ui/theme'
import { Column } from '../../../ui/layout/NewLayout'


const TextBlock = ({intl}: any) => {
  return (
    <Column flexBasis={600}>
      <TitleH1>
        <Title />
      </TitleH1>
      <TitleH2>
        <SubTitle />
      </TitleH2>
      <Box height={30} />
      <WavesL
        width={82}
        height={12}
      />
      <Box height={15} />
      <Text
        color={theme.colors.white}
        size={theme.fontSize.m}
        lineHeight={theme.lineHeight.s}
      >
        {intl.formatMessage(messages.hero.text)}
      </Text>
    </Column>
  )
}

export default injectIntl(TextBlock)
