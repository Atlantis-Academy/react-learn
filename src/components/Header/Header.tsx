import React from 'react'
import '../../styles/index.css'
import HeaderLogo from './_headr-components/HeaderLogo'
import HeaderBlock from './_headr-components/HeaderBlock'

const headerMargin = {
  height: '50px'
}

const Header = () => {
  return (
    <header className={'header'}>
      <div style={headerMargin}>
      </div>
      <HeaderLogo />
      <HeaderBlock />
    </header>
  )
}
export default Header
