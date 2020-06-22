import React from 'react'
import '../../styles/index.css'
import HeaderLogo from './_headr-components/HeaderLogo'
import HeaderBlock from './_headr-components/HeaderBlock'
import styled from '@emotion/styled'

const headerMargin = {
  height: '50px'
}

const Header = styled.header`
    width: 1440px;
    height: 800px;
    background: #0A4759;
    margin: 0 auto;`


const HeaderSection = () => {
  return (
    <Header>
      <div style={headerMargin}>
      </div>
      <HeaderLogo />
      <HeaderBlock />
    </Header>
  )
}
export default HeaderSection
