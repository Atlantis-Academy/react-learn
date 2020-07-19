import React, { useState } from 'react'
import { Box } from '../../ui/layout/Box2'
import { theme } from '../../ui/theme'
import Section from '../../ui/Section'
import { Layout } from '../../ui/layout/Layout'
import { WaveTitle } from './src/WaveTitle'
import { ArrowBlock } from './src/ArrowBlock'
import Title from './src/Title'
import SliderBlock from './src/SliderBlock'

const Automatization = () => {

  const [x, setX] = useState(0)

  return (
    <Section bg={theme.colors.white}>
      <Box height='85px' />
      <WaveTitle />
      <Box height='30px' />
      <Layout
        justify={'start'}
      >
        <ArrowBlock
          x={x}
          setX={setX}
        />
        <Title />
      </Layout>
      <Box height={'80px'} />
      <Box display={'flex'}>
        <Box
          width={'209px'}
          width100={'100%'}
        />
        <SliderBlock x={x} />
      </Box>
      <Box
        width={'285px'}
        height={'118px'}
        bgI={`url('site/ui/icon/Wave.svg')`}
        position={'absolute'}
        left={'135px'}
        top={'1408px'}
        zIndex={2}
        width100={'100%'}
      />
      <Box height='234px' />
    </Section>
  )
}

export default Automatization
