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

  const [show, setShow] = useState({
    img: [
      'site/ui/img/slide/React-img.png',
      'site/ui/img/slide/React-img1.png',
      'site/ui/img/slide/React-img2.png',
      'site/ui/img/slide/React-img3.png'
    ],
    imgIndex: 0,
  })

  const [disabledLeft, setDisabledLeft] = useState(true)
  const [disabledRight, setDisabledRight] = useState(false)

  const sliderShow = (event: any) => {

    if (event.currentTarget.dataset.direction === 'next') {
      if (show.imgIndex < show.img.length - 1) {
        setShow({
          img: show.img,
          imgIndex: show.imgIndex + 1,
        })

      }
    }

    if (event.currentTarget.dataset.direction === 'prev') {
      if (show.imgIndex > 0) {
        setShow({
          img: show.img,
          imgIndex: show.imgIndex - 1,
        })
      }
    }

    // if (show.imgIndex >= show.img.length - 1) {
    //   setShow({
    //     img: show.img,
    //     imgIndex: 0,
    //   })
    // }

    if (show.imgIndex > 0) {
      setDisabledLeft(false)
    }

    if (show.imgIndex === show.img.length - 1) {
      setDisabledRight(true)
    }

    if (show.imgIndex < show.img.length - 1) {
      setDisabledRight(false)
    }

    if (show.imgIndex === 0) {
      setDisabledLeft(true)
    }
  }

  return (
    <Section bg={theme.colors.white}>
      <Box height='85px' />
      <WaveTitle />
      <Box height='30px' />
      <Layout
        justify={'start'}
      >
        <ArrowBlock
          sliderShow={sliderShow}
          disabledLeft={disabledLeft}
          disabledRight={disabledRight}
        />
        <Title />
        <Box height='80px' />
        <Slider state={show} />
      </Layout>
      <Box
        width={'285px'}
        height={'118px'}
        bgI={'url(\'site/ui/svg/Wave.svg\')'}
        position={'absolute'}
        left={'110px'}
        top={'1400px'}
        zIndex={2}
      />
      <Box height='234px' />
    </Section>
  )
}

export default Automatization
