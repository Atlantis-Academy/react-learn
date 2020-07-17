import { ArrowLeft } from '../../../ui/ArrowLeft'
import DivMargin from '../../../ui/layout/DivMargin'
import { ArrowRight } from '../../../ui/ArrowRight'
import { Box } from '../../../ui/layout/Box2'
import React from 'react'


export const ArrowBlock = ({sliderShow}: any) => {
  return (
    <Box
      display={'flex'}
      width={'426px'}
      margin={0}
      alignItems={'center'}
    >
      <ArrowLeft sliderShow={sliderShow}/>
      <DivMargin width='10px' />
      <ArrowRight sliderShow={sliderShow}/>
    </Box>
  )
}
