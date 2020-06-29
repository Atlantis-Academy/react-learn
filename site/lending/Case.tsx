import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import theme from '../ui/theme/Theme'
import { Box } from '../ui/layout/Box'
import { WavesL } from '../ui/svg/Wave'
import { Title } from '../ui/case/Title'
import textComponent from '../ui/text/TextComponents'
import { Text } from '../ui/case/Text'
import { AdobeSvg, AmoCrmSvg, BitrixSvg, ExcelSvg, OnesSvg, PpSvg, WordSvg } from '../ui/svg/ProgramSvg'


const Case = () => {
  return (
    <Box background={theme.colors.beige}>
      <DivMargin height='120px' />
      <Box width={'1230px'} display={'flex'} margin={'0 auto'} justifyContent={'space-between'}>
        <div>
          <WavesL width={82} height={12} fill={'none'} stroke={theme.colors.dark}/>
          <DivMargin height='30px' />
          <Title>
            {textComponent.compSection.title[0]}
          </Title>
        </div>
        <Box height={'410px'} width={'810px'}  background={theme.colors.white} display={'flex'} justifyContent={'center'} alignItems={'center'}>
          <Box width={'770px'} height={'370px'} background={theme.colors.beige}>
            <DivMargin height='80px'/>
            <Box display={'flex'} justifyContent={'space-around'}>
              <WordSvg/>
              <ExcelSvg/>
              <PpSvg/>
              <AdobeSvg/>
            </Box>
            <DivMargin height='107px'/>
            <Box display={'flex'} justifyContent={'space-around'}>
              <AmoCrmSvg/>
              <BitrixSvg/>
              <OnesSvg/>
            </Box>
          </Box>
        </Box>
      </Box>
      <DivMargin height='50px' />
      <Box display={'flex'}>
        <DivMargin width='525px' />
        <Text>
          {textComponent.compSection.text[0]}
        </Text>
      </Box>
      <DivMargin height='145px' />
    </Box>
  )
}

export default Case
