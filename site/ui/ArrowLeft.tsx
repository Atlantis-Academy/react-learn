import styled from '@emotion/styled'
import React from 'react'
import { theme } from './theme'

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

const ArrowLeft = ({sliderShow}: any) => {
  return (
    <ArrowStyle data-direction={'prev'} onClick={sliderShow}>
      <svg
        width={31}
        height={28}
        viewBox='0 0 31 28'
        fill='none'
      >
        <path
          d='M2.68 14.833l.05.053 11.026 11.025a.833.833 0 01-1.179 1.178L1.552 16.065a2.905 2.905 0 01-.841-1.783.927.927 0 010-.566 2.905 2.905 0 01.839-1.774L12.56.912a.833.833 0 011.18 1.177L2.73 13.119l-.046.048h27.15c1.11 0 1.11 1.666 0 1.666H2.68z'
          fill='#3BB3C4'
        />
      </svg>
    </ArrowStyle>
  )
}

export { ArrowLeft }
