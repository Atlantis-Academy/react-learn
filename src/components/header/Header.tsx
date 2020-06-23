import React from 'react'
import '../../styles/index.css'
import HeaderLogo from './headerComponents/HeaderLogo'
import HeaderBlock from './headerComponents/HeaderBlock'
import styled from '@emotion/styled'
import DivMargin from '../DivMargin'

interface CategoryItemProps {
  height: string
}


const Header = styled.header`
    height: 800px;
    background: #0A4759;`


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
