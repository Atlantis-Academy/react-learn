import React from 'react'
import { Box } from '../../../ui/layout/Box2'
import { theme } from '../../../ui/theme'
import SlideText from './SlideText'
import { slides } from './Slides'

export const Slider = ({x}: any) => {
  return (
    <>
      {
        slides.map((item: any, index: number) => {
          return (
            <Box
              display={'flex'}
              width100={'1050px'}
              key={index}
              style={{transform: `translateX(${x}%)`, transition: '0.5s'}}
            >
              <Box
                width={'495px'}
                height100={'370px'}
                bg={theme.colors.dark}
                borderRadius={theme.borderRadius.m}
                overflow={'hidden'}
              >
                {item}
              </Box>
              <Box
                width={'30px'}
                width100={'100%'}
              />
              <SlideText />
            </Box>
          )
        })
      }
    </>
  )
}
