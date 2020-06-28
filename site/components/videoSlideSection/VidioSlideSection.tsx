import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import styled from '@emotion/styled'
import { StyleSection } from '../compatibilitySection/CompatibilitySection'
import TitleBlock from './sectionComponents/TitleBlock'
import { SvgStyle } from '../ui/svg/SvgStyle'
import { WaveBig } from '../ui/svg/Wave'


const SectionStyle = styled(StyleSection)``

const WaveBlock = styled.div`
position: absolute;
top: 4000px;
left: 954px;
z-index: 1;`

const VideoSlideSection = () => {
  return (
    <SectionStyle>
      <DivMargin height='120px' />
      <TitleBlock/>
      <WaveBlock>
        <SvgStyle width='285px' height='486px' fill='none'>
          {WaveBig[0]}
        </SvgStyle>
      </WaveBlock>
    </SectionStyle>
  )
}


export default VideoSlideSection
