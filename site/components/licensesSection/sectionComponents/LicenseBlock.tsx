import React from 'react'
import styled from '@emotion/styled'
import { SvgStyle } from '../../ui/svg/SvgStyle'
import { LicenseSvg, LicenseSvg2, LicenseSvg3 } from '../../ui/svg/License'
import { TextStyle } from '../../ui/TextStyle'
import theme from '../../ui/Theme'
import textComponent from '../../TextComponents'
import DivMargin from '../../ui/layout/DivMargin'

const BlockStyle = styled.div`
display: flex;`

const License = styled.div`
width: 250px;`

const Text = styled(TextStyle)`
font-size: 18px;
line-height: 25px;
color: ${theme.colors.dark}`


const LicensesBlock = ()=>{
  return(
    <BlockStyle>
      <License>
        <SvgStyle height='80px' width='50px'>
          {LicenseSvg[0]}
        </SvgStyle>
        <DivMargin height='30px'/>
        <Text>
          {textComponent.licensesText[0]}
        </Text>
      </License>
      <DivMargin width='65px'/>
      <License>
        <SvgStyle height='80px' width='50px'>
          {LicenseSvg2}
        </SvgStyle>
        <DivMargin height='30px'/>
        <Text>
          {textComponent.licensesText[1]}
        </Text>
      </License>
      <DivMargin width='65px'/>
      <License>
        <SvgStyle height='80px' width='50px'>
          {LicenseSvg3}
        </SvgStyle>
        <DivMargin height='30px'/>
        <Text>
          {textComponent.licensesText[2]}
        </Text>
      </License>
      <DivMargin width='65px'/>
      <License>
        <SvgStyle height='80px' width='50px'>
          {LicenseSvg[0]}
        </SvgStyle>
        <DivMargin height='30px'/>
        <Text>
          {textComponent.licensesText[3]}
        </Text>
      </License>
      <DivMargin width='65px'/>
      <License>
        <SvgStyle height='80px' width='50px'>
          {LicenseSvg[0]}
        </SvgStyle>
        <DivMargin height='30px'/>
        <Text>
          {textComponent.licensesText[3]}
        </Text>
      </License>
    </BlockStyle>
  )
}

export default LicensesBlock
