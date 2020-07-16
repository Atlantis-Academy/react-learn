import React from 'react'
import { ArrowStyle } from './ArrowLeft'


const ArrowRight = ({sliderShow, state}: any) => {
  console.log(state)
  return (
    <ArrowStyle disabled={''} data-direction={'next'} onClick={sliderShow}>
      <svg
        width={31}
        height={28}
        viewBox='0 0 31 28'
        fill='none'
      >
        <path
          d='M28.32 14.833a1.303 1.303 0 01-.05.053L17.244 25.911a.833.833 0 101.178 1.178l11.026-11.024a2.905 2.905 0 00.841-1.783.927.927 0 000-.566 2.905 2.905 0 00-.839-1.774L18.44.912a.833.833 0 00-1.18 1.177l11.01 11.03.046.048H1.166c-1.11 0-1.11 1.666 0 1.666H28.32z'
          fill='#3BB3C4'
        />
      </svg>
    </ArrowStyle>
  )
}

export { ArrowRight }
