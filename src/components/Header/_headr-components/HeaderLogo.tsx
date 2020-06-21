import React from 'react'
import LogoSvg from './LogoSvg'


//использовал вместо margin div, придется плодить очень много divов
const headerLogo = {
  display: 'flex',
}

const headerMargin = {
  width: '105px'
}
const headerMargin2 = {
  width: '860px'
}


const HeaderLogo = () => {
  return (
    <div style={headerLogo}>
      <div style={headerMargin}>
      </div>
      <LogoSvg />
      <div style={headerMargin2}>
      </div>
      <button className={'header-btn'}>Оставить заявку
      </button>
      <div style={headerMargin}>
      </div>
    </div>
  )
}

export default HeaderLogo
