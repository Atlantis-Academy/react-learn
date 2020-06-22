import React from 'react'
import HeaderTitle from './HeaderTitle'
import HeaderForm from './HeaderForm'
import styled from '@emotion/styled'

const HeaderBlockSection = styled.div`
    display: flex;
    justify-content: space-between;`

const HeaderBlock = () => {
  return (
    <HeaderBlockSection>
      <HeaderTitle />
      <HeaderForm />
    </HeaderBlockSection>
  )
}

export default HeaderBlock
