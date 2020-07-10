import styled from '@emotion/styled'
import theme from '../../ui/theme/Theme'
import Logo from '../../ui/svg/Logo'
import { Button } from '../../ui/Button'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Box } from '../../ui/layout/Box2'
import { Layout } from '../../ui/layout/Layout'


const HeaderStyle = styled.header(()=>({
  background: theme.colors.darkBlue
}))


const Header = ()=>{
    return (
      <HeaderStyle>
        <Box height={'50px'} />
        <Layout>
          <Logo />
          <Button
            bg={'transparent'}
            padding={'10px 30px'}
          >
            <FormattedMessage id={'header.button'} />
          </Button>
        </Layout>
      </HeaderStyle>
    )
}

export default Header
