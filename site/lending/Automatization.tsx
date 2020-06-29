import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { WavesL, WavesXL } from '../ui/svg/Wave'
import theme from '../ui/theme/Theme'
import { Box } from '../ui/layout/Box'
import { ArrowLeft } from '../ui/ArrowLeft'
import { ArrowRight } from '../ui/ArrowRight'
import { SectionTitle } from '../ui/SectionTitle'
import textComponent from '../ui/text/TextComponents'
import { ButtonAuto } from '../ui/automatization/ButtonAuto'
import { AutoText } from '../ui/automatization/AutoText'


const Automatization = () => {
  return (
    <section>
      <DivMargin height='96px' />
      <Box textAlign={'center'}>
        <WavesL width={82} height={12} fill={'none'} stroke={theme.colors.dark}/>
      </Box>
      <DivMargin height='30px' />
      <Box display={'flex'} alignItems={'center'}>
        <DivMargin width='105px'/>
        <ArrowLeft/>
        <DivMargin width='10px'/>
        <ArrowRight/>
        <DivMargin width='480px' />
        <SectionTitle>
          {textComponent.sectionTitleBlock[0]}
        </SectionTitle>
      </Box>
      <DivMargin height='80px' />
      <Box display={'flex'}>
        <DivMargin width='210px' />
        <Box
          width={'495px'}
          height={'370px'}
          borderRadius={'10px'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          background={theme.colors.dark}
        >
          <Box
            position={'absolute'}
            left={'297px'}
            top={'1458px'}
            zIndex={0}
          >

            <WavesXL width={'285px'} height={'118px'} fill={'none'}/>

          </Box>
        </Box>
        <DivMargin width='30px' />
        <div>
          <AutoText>
            {textComponent.sliderBlock[0]}
          </AutoText>
          <DivMargin height='25px' />
          <ButtonAuto>
            {textComponent.buttonText[0]}
          </ButtonAuto>
        </div>
      </Box>
      <DivMargin height='234px' />
    </section>
  )
}

export default Automatization
