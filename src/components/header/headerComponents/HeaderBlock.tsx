import React from 'react'
import HeaderTitle from './HeaderTitle'
import HeaderForm from './HeaderForm'
import styled from '@emotion/styled'
import DivMargin from '../../ui/layout/DivMargin'

const HeaderBlockSection = styled.div`
    display: flex;
    position: relative`

const HeaderBlock = () => {
  return (
    <HeaderBlockSection>
      <DivMargin width='105px'/>
      <HeaderTitle />
      <DivMargin width='141px'/>
      <HeaderForm />
    </HeaderBlockSection>
  )
}

export default HeaderBlock
