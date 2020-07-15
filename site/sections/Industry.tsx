import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { WavesL, WavesXL } from '../ui/svg/Wave'
import { Box } from '../ui/layout/Box'
import { Title } from '../ui/industry/Title'
import textComponent from '../ui/text/TextComponents'
import { SvgStyle } from '../ui/svg/SvgStyle'
import {
  Industri2,
  IndustriExp,
  IndustriExp1,
  IndustriExp3,
  IndustriExp4,
  IndustriExp5,
  IndustriExp6,
  IndustriExp7,
  IndustriExp8
} from '../ui/svg/IndusriSvg'
import { Text } from '../ui/industry/Text'
import { theme } from '../ui/theme'


const Industry = () => {
  return (
    <Box background={theme.colors.beige}>
      <DivMargin height='100px' />
      <Box
        width={'1335px'}
        margin={'0 auto'}
        display={'flex'}
        alignItems={'center'}
        position={'relative'}
        zIndex={1}
      >
        <div>
          <WavesL
            height={10}
            width={80}
            stroke={theme.colors.dark}
          />
          <DivMargin height='30px' />
          <Title>
            {textComponent.indusriesSection.title[0]}
          </Title>
        </div>
        <DivMargin width='50px' />
        <Box
          width={'1100px'}
          height={'600px'}
          display={'flex'}
          alignItems={'center'}
          position={'relative'}
          zIndex={5}
        >
          <Box
            border={`5px solid ${theme.colors.white}`}
            width={'180px'}
            height={'180px'}
            borderRadius={'5px'}
            textAlign={'center'}
            background={theme.colors.beige}
          >
            <DivMargin height='30px' />
            <SvgStyle
              width='80px'
              height='80px'
            >
              {IndustriExp}
            </SvgStyle>
            <DivMargin height='19px' />
            <Text>
              {textComponent.indusriesSection.text[0]}
            </Text>
          </Box>
          <DivMargin width='30px' />
          <div>
            <Box
              border={`5px solid ${theme.colors.white}`}
              width={'180px'}
              height={'180px'}
              borderRadius={'5px'}
              textAlign={'center'}
              background={theme.colors.beige}
            >
              <DivMargin height='30px' />
              <SvgStyle
                width='80px'
                height='80px'
              >
                {IndustriExp1}
              </SvgStyle>
              <DivMargin height='19px' />
              <Text>
                {textComponent.indusriesSection.text[1]}
              </Text>
            </Box>
            <DivMargin height='30px' />
            <Box
              border={`5px solid ${theme.colors.white}`}
              width={'180px'}
              height={'180px'}
              borderRadius={'5px'}
              textAlign={'center'}
              background={theme.colors.beige}
            >
              <DivMargin height='30px' />
              <SvgStyle
                width='80px'
                height='80px'
              >
                {Industri2[0]}
              </SvgStyle>
              <DivMargin height='19px' />
              <Text>
                {textComponent.indusriesSection.text[2]}
              </Text>
            </Box>
          </div>
          <DivMargin width='30px' />
          <div>
            <Box
              border={`5px solid ${theme.colors.white}`}
              width={'180px'}
              height={'180px'}
              borderRadius={'5px'}
              textAlign={'center'}
              background={theme.colors.beige}
            >
              <DivMargin height='30px' />
              <SvgStyle
                width='80px'
                height='80px'
              >
                {IndustriExp3}
              </SvgStyle>
              <DivMargin height='19px' />
              <Text>
                {textComponent.indusriesSection.text[3]}
              </Text>
            </Box>
            <DivMargin height='30px' />
            <Box
              border={`5px solid ${theme.colors.white}`}
              width={'180px'}
              height={'180px'}
              borderRadius={'5px'}
              textAlign={'center'}
              background={theme.colors.beige}
            >
              <DivMargin height='30px' />
              <SvgStyle
                width='80px'
                height='80px'
              >
                {IndustriExp4}
              </SvgStyle>
              <DivMargin height='19px' />
              <Text>
                {textComponent.indusriesSection.text[4]}
              </Text>
            </Box>
            <DivMargin height='30px' />
            <Box
              border={`5px solid ${theme.colors.white}`}
              width={'180px'}
              height={'180px'}
              borderRadius={'5px'}
              textAlign={'center'}
              background={theme.colors.beige}
            >
              <DivMargin height='30px' />
              <SvgStyle
                width='80px'
                height='80px'
              >
                {IndustriExp5}
              </SvgStyle>
              <DivMargin height='19px' />
              <Text>
                {textComponent.indusriesSection.text[5]}
              </Text>
            </Box>
          </div>
          <DivMargin width='30px' />
          <div>
            <Box
              border={`5px solid ${theme.colors.white}`}
              width={'180px'}
              height={'180px'}
              borderRadius={'5px'}
              textAlign={'center'}
              background={theme.colors.beige}
            >
              <DivMargin height='30px' />
              <SvgStyle
                width='80px'
                height='80px'
              >
                {IndustriExp6}
              </SvgStyle>
              <DivMargin height='19px' />
              <Text>
                {textComponent.indusriesSection.text[6]}
              </Text>
            </Box>
            <DivMargin height='30px' />
            <Box
              border={`5px solid ${theme.colors.white}`}
              width={'180px'}
              height={'180px'}
              borderRadius={'5px'}
              textAlign={'center'}
              background={theme.colors.beige}
            >
              <DivMargin height='30px' />
              <SvgStyle
                width='80px'
                height='80px'
              >
                {IndustriExp7}
              </SvgStyle>
              <DivMargin height='19px' />
              <Text>
                {textComponent.indusriesSection.text[7]}
              </Text>
            </Box>
          </div>
          <DivMargin width='30px' />
          <Box
            border={`5px solid ${theme.colors.white}`}
            width={'180px'}
            height={'180px'}
            borderRadius={'5px'}
            textAlign={'center'}
            background={theme.colors.beige}
          >
            <DivMargin height='30px' />
            <SvgStyle
              width='80px'
              height='80px'
            >
              {IndustriExp8}
            </SvgStyle>
            <DivMargin height='19px' />
            <Text>
              {textComponent.indusriesSection.text[8]}
            </Text>
          </Box>
        </Box>
        <Box
          position={'absolute'}
          top={'160px'}
          left={'303px'}
          zIndex={0}
        >
          <WavesXL
            width={'810px'}
            height={'289px'}
            fill={'none'}
          />
        </Box>
      </Box>
      <DivMargin height='100px' />
    </Box>
  )
}

export default Industry
