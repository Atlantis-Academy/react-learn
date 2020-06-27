import React from 'react'
import HeaderLogo from './headerComponents/HeaderLogo'
import HeaderBlock from './headerComponents/HeaderBlock'
import styled from '@emotion/styled'
import DivMargin from '../ui/layout/DivMargin'
import theme from '../ui/Theme'

const Header = styled.header`
    height: 800px;
    background: ${theme.colors.darkBlue};`

const HeaderSection = () => {
  return (
    <Header>
      <DivMargin height='50px' />
      <HeaderLogo />
      <HeaderBlock />
    </Header>
  )
}
export default HeaderSection
