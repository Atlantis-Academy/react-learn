import styled from '@emotion/styled'
import theme from '../theme/Theme'
import Logo from '../svg/Logo'
import { Button } from '../Button'
import React from 'react'
import DivMargin from '../layout/DivMargin'
import { FormattedMessage } from 'react-intl'
import { BoxSection } from '../layout/BoxSection'


const HeaderStyle = styled.header(()=>({
  background: theme.colors.darkBlue
}))


const Header = () => {
  return (
    <HeaderStyle>
      <DivMargin height={'50px'}/>
      <BoxSection justifyContent={'space-between'}>
      <Logo />
      <Button bg={'transparent'} padding={'10px 30px'}>
        <FormattedMessage id={'header.button'}/>
      </Button>
      </BoxSection>
    </HeaderStyle>
  )
}

export default Header