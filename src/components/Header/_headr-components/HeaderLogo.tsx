import React from 'react'
import LogoSvg from './LogoSvg'
import styled from '@emotion/styled'


//использовал вместо margin div, придется плодить очень много divов
const HeaderLogoBlock = styled.div`
display: 'flex'`

const headerMargin = {
  width: '105px'
}
const headerMargin2 = {
  width: '860px'
}

const ButtonLogo = styled.button`
    width: 202px;
    height: 40px;
    padding: 10px 28px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    color: #ffffff;
    background: transparent;
    font-family: 'Proxima Nova', serif;
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;`

//не пойму почему webstorm подчеркивает красным. В документации так и написано
const Button = (props)=>{
  return(
    <ButtonLogo>{props.text}
    </ButtonLogo>
  )
}

const HeaderLogo = () => {
  return (
    <HeaderLogoBlock>
      <div style={headerMargin}>
      </div>
      <LogoSvg />
      <div style={headerMargin2}>
      </div>
      <Button text = 'Оставить заявку'/>
      <div style={headerMargin}>
      </div>
    </HeaderLogoBlock>
  )
}

export default HeaderLogo
