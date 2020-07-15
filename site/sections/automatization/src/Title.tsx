import { TitleH2 } from '../../../ui/theme/Titles'
import { Text } from '../../../ui/text/Text'
import { Box } from '../../../ui/layout/Box2'
import React from 'react'
import messages from './Messages'
import { injectIntl } from 'react-intl'


const Title = ({intl}: any) => {
  return (
    <Box width={'390px'}>
      <TitleH2>
        <Text themeText={'sectionTitle'}>
          {intl.formatMessage(messages.title)}
        </Text>
      </TitleH2>
    </Box>
  )
}

export default injectIntl(Title)
