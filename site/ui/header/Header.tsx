import styled from '@emotion/styled'
import theme from '../theme/Theme'
import Logo from '../svg/Logo'
import Button from '../Button'
import React from 'react'
import DivMargin from '../layout/DivMargin'
import { FormattedMessage } from 'react-intl'


const HeaderStyle = styled.header(()=>({
  background: theme.colors.darkBlue
}))



const Block = styled.div(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '1230px',
  margin: '0 auto',
}))

const Header = () => {
  return (
    <HeaderStyle>
      <DivMargin height={'50px'}/>
      <Block>
      <Logo />
      <Button>
        <FormattedMessage id={'header.button'}/>
      </Button>
      </Block>
    </HeaderStyle>
  )
}

export default Header