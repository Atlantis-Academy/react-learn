import styled from '@emotion/styled'
import Logo from '../../ui/icon/Logo'
import { Button } from '../../ui/NewButton'
import React from 'react'
import { injectIntl } from 'react-intl'
import messages from '../hero/src/Messages'
import { theme } from '../../ui/theme'
import { Box } from '../../ui/layout/NewBox'
import { Row } from '../../ui/layout/NewLayout'
import { Text } from '../../ui/text/Text'


const HeaderStyle = styled.header(() => ({
  background: theme.colors.darkBlue
}))


const Header = ({intl}: any) => {
  return (
    <HeaderStyle>
      <Box
        height={40}
      />
      <Row
        justifyContent={'space-between'}
        m={'auto'}
      >
        <Logo />
        <Button
          bg={'transparent'}
          border={`${theme.border.s} ${theme.colors.white}`}
        >
          <Text themeText={'buttonText'}>
            {intl.formatMessage(messages.headerButton)}
          </Text>
        </Button>
      </Row>
    </HeaderStyle>
  )
}

export default injectIntl(Header)
