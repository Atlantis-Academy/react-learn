import styled from '@emotion/styled'
import theme from '../../ui/theme/Theme'
import Logo from '../../ui/svg/Logo'
import { Button } from '../../ui/Button'
import React from 'react'
import { Box } from '../../ui/layout/Box2'
import { Layout } from '../../ui/layout/Layout'
import { injectIntl } from 'react-intl'
import messages from '../../ui/text/Messages'


const HeaderStyle = styled.header(()=>({
  background: theme.colors.darkBlue
}))


const Header = ({intl}: any)=>{
    return (
      <HeaderStyle>
        <Box height={'50px'} />
        <Layout>
          <Logo />
          <Button
            bg={'transparent'}
            padding={'10px 30px'}
          >
            {intl.formatMessage(messages.headerButton)}
          </Button>
        </Layout>
      </HeaderStyle>
    )
}

export default injectIntl(Header)
