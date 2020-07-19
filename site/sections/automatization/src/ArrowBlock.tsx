import { ArrowLeft } from '../../../ui/ArrowLeft'
import { ArrowRight } from '../../../ui/ArrowRight'
import { Box } from '../../../ui/layout/Box2'
import React from 'react'
import { slides } from './Slides'

export const ArrowBlock = ({x, setX}: any) => {

  const sliderShowLeft = () => {
    x === 0 ? setX(-100 * (slides.length - 1)) : setX(x + 100)
  }

  const sliderShowRight = () => {
    x === -100 * (slides.length - 1) ? setX(0) : setX(x - 100)
  }

  return (
    <Box
      display={'flex'}
      width={'632px'}
      alignItems={'center'}
      width100={'100%'}
    >
      <Box onClick={sliderShowLeft}>
        <ArrowLeft />
      </Box>
      <Box
        width='10px'
        width100={'100%'}
      />
      <Box onClick={sliderShowRight}>
        <ArrowRight />
      </Box>

    </Box>
  )
}
