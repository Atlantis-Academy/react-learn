import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import theme from '../ui/theme/Theme'
import { WavesL } from '../ui/svg/Wave'
import { Box } from '../ui/layout/Box'
import { ArrowLeft } from '../ui/ArrowLeft'
import { ArrowRight } from '../ui/ArrowRight'
import { SectionTitle } from '../ui/SectionTitle'
import textComponent from '../ui/text/TextComponents'
import { SvgStyle } from '../ui/svg/SvgStyle'
import { LicenseSvg, LicenseSvg2, LicenseSvg3 } from '../ui/svg/License'
import { Text } from '../ui/licenses/Text'


const Licenses = ()=>{
  return(
    <section>
      <DivMargin height='120px'/>
      <Box textAlign={'center'}>
        <WavesL width={80} height={10} stroke={theme.colors.dark}/>
        <DivMargin height='30px'/>
      </Box>
      <Box display={'flex'}>
        <DivMargin width='105px'/>
        <ArrowLeft/>
        <DivMargin width='10px'/>
        <ArrowRight/>
        <DivMargin width='480px' />
        <SectionTitle>
          {textComponent.sectionTitleBlock[1]}
        </SectionTitle>
      </Box>
      <DivMargin height='178px'/>
      <Box display={'flex'}>
        <Box width={'250px'}>
          <SvgStyle height='80px' width='50px'>
            {LicenseSvg[0]}
          </SvgStyle>
          <DivMargin height='30px'/>
          <Text>
            {textComponent.licensesText[0]}
          </Text>
        </Box>
        <DivMargin width='65px'/>
        <Box width={'250px'}>
          <SvgStyle height='80px' width='50px'>
            {LicenseSvg2}
          </SvgStyle>
          <DivMargin height='30px'/>
          <Text>
            {textComponent.licensesText[1]}
          </Text>
        </Box>
        <DivMargin width='65px'/>
        <Box width={'250px'}>
          <SvgStyle height='80px' width='50px'>
            {LicenseSvg3}
          </SvgStyle>
          <DivMargin height='30px'/>
          <Text>
            {textComponent.licensesText[2]}
          </Text>
        </Box>
        <DivMargin width='65px'/>
        <Box width={'250px'}>
          <SvgStyle height='80px' width='50px'>
            {LicenseSvg[0]}
          </SvgStyle>
          <DivMargin height='30px'/>
          <Text>
            {textComponent.licensesText[3]}
          </Text>
        </Box>
        <DivMargin width='65px'/>
        <Box width={'250px'}>
          <SvgStyle height='80px' width='50px'>
            {LicenseSvg[0]}
          </SvgStyle>
          <DivMargin height='30px'/>
          <Text>
            {textComponent.licensesText[3]}
          </Text>
        </Box>
      </Box>
      <DivMargin height='210px'/>

    </section>
  )
}

export default Licenses
