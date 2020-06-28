import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import { WaveLittleCenter } from '../ui/WaveLittleCenterBlock'
import theme from '../ui/Theme'
import { WavesL } from '../ui/svg/Wave'
import { SvgStyle } from '../ui/svg/SvgStyle'
import LicensesTitleBlock from './sectionComponents/LicensesTitleBlock'
import LicensesBlock from './sectionComponents/LicenseBlock'


const LicensesSection = ()=>{
  return(
    <section>
      <DivMargin height='120px'/>
      <WaveLittleCenter>
        <SvgStyle
          width='82'
          height='12'
          fill='none'
          stroke={theme.colors.dark}
        >
          {WavesL}
        </SvgStyle>
        <DivMargin height='30px'/>
      </WaveLittleCenter>
      <LicensesTitleBlock/>
      <DivMargin height='178px'/>
      <LicensesBlock/>
      <DivMargin height='210px'/>

    </section>
  )
}

export default LicensesSection
