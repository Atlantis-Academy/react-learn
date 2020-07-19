import styled from '@emotion/styled'
import Logo from '../../ui/icon/Logo'
import { Button } from '../../ui/NewButton'
import React from 'react'
import { injectIntl } from 'react-intl'
import messages from '../hero/src/Messages'
import { theme } from '../../ui/theme'
import { Box } from '../../ui/layout/NewBox'
import { Row } from '../../ui/layout/NewLayout'


const HeaderStyle = styled.header(() => ({
  background: theme.colors.darkBlue
}))


const Header = ({intl}: any) => {
  return (
    <HeaderStyle>
      <Box
        height={[50]}
      />
      <Row
        justifyContent={'space-between'}
        m={'auto'}
      >
        <Logo />
        <Button
          bg={'transparent'}
          py={[10]}
          px={[30]}
          border={`${theme.border.s} ${theme.colors.white}`}
          borderRadius={theme.borderRadius.s}
        >
          {intl.formatMessage(messages.headerButton)}
        </Button>
      </Row>
    </HeaderStyle>
  )
}

export default injectIntl(Header)
