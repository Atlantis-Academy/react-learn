import { WavesL } from '../../../ui/svg/Wave'
import { theme } from '../../../ui/theme'
import { Box } from '../../../ui/layout/Box2'
import React from 'react'


export const WaveTitle = () => {
  return (
    <Box
      display={'flex'}
      justify={'center'}
    >
      <WavesL
        width={82}
        height={12}
        fill={'none'}
        stroke={theme.colors.dark}
      />
    </Box>
  )
}
