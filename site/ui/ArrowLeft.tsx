import styled from '@emotion/styled'
import React from 'react'
import { theme } from './theme'
import ArrowLeftIcon from './icon/ArrowLeftIcon'

export const ArrowStyle: any = styled.div(() => ({
  border: `${theme.border.s} ${theme.colors.whiteBlue}`,
  width: '70px',
  height: '70px',
  borderRadius: '36px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  opacity: 0.5,
  ':hover': {opacity: 1}
}))

const ArrowLeft = () => {
  return (
    <ArrowStyle>
      <ArrowLeftIcon/>
    </ArrowStyle>
  )
}

export { ArrowLeft }
