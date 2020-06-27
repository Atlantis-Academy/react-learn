import React from 'react'
import Logo from '../../ui/svg/Logo'
import styled from '@emotion/styled'
import DivMargin from '../../ui/layout/DivMargin'
import textComponent from '../../TextComponents'
import Button from '../../ui/Button'

const HeaderLogoBlock = styled.div`
display: flex`

const HeaderLogo = () => {
  return (
    <HeaderLogoBlock>
      <DivMargin width='105px'/>
      <Logo />
      <DivMargin width='860px'/>
      <Button >
        {textComponent.buttonText[1]}
      </Button>
      <DivMargin width='105px'/>
    </HeaderLogoBlock>
  )
}

export default HeaderLogo
