import React from 'react'
import { ArrowStyle } from './ArrowLeft'
import ArrowRightIcon from './icon/ArrowRightIcon'


const ArrowRight = ({sliderShow}: any) => {
  return (
    <ArrowStyle data-direction={'next'} onClick={sliderShow}>
      <ArrowRightIcon/>
    </ArrowStyle>
  )
}

export { ArrowRight }
