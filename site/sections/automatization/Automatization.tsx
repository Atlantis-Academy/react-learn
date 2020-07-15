import React, { useState } from 'react'
import { Box } from '../../ui/layout/Box2'
import { theme } from '../../ui/theme'
import Section from '../../ui/Section'
import { Layout } from '../../ui/layout/Layout'
import { WaveTitle } from './src/WaveTitle'
import { ArrowBlock } from './src/ArrowBlock'
import Title from './src/Title'
import Slider from './src/Slider'


const Automatization = () => {

  const [show, setShow]= useState({
    showSlide: true
  })

  const sliderShow = ()=>{
    setShow(()=>{
      return{
        showSlide: !show.showSlide
      }
    })
  }
  return (
    <Section bg={theme.colors.white}>
      <Box height='85px' />
      <WaveTitle />
      <Box height='30px' />
      <Layout
        justify={'start'}
      >
        <ArrowBlock slide={sliderShow}/>
        <Title />
        <Box height='80px' />
        <Slider state={show}/>
      </Layout>
      <Box height='234px' />
    </Section>
  )
}

export default Automatization
