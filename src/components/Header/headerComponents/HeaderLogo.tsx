import React from 'react'
import LogoSvg from './LogoSvg'
import styled from '@emotion/styled'
import DivMargin from '../../DivMargin'

const HeaderLogoBlock = styled.div`
display: flex`

const ButtonLogo = styled.button`
    width: 210px;
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
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    cursor: pointer`

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
      <DivMargin width='105px'/>
      <LogoSvg />
      <DivMargin width='860px'/>
      <Button text = 'Задать вопрос'/>
      <DivMargin width='105px'/>
    </HeaderLogoBlock>
  )
}

export default HeaderLogo
