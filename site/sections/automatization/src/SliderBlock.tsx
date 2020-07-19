import { Box } from '../../../ui/layout/Box2'
import React from 'react'
import { Slider } from './Slider'

const SliderBlock = ({x}: any) => {
  return (
    <Box
      display={'flex'}
      position={'relative'}
      justify={'start'}
      overflow={'hidden'}
    >
      <Box display={'flex'}>
        <Slider x={x} />
      </Box>
    </Box>
  )
}

export default SliderBlock
