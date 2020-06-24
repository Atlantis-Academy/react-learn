import React from 'react'
import styled from '@emotion/styled'
import { AdobeSvg, AmoCrmSvg, BitrixSvg, ExcelSvg, OnesSvg, PpSvg, WordSvg } from '../../ui/svg/ProgramSvg'
import DivMargin from '../../ui/DivMargin'
import theme from '../../ui/Theme'

const OutsideBlock = styled.div`
width: 810px;
height: 410px;
background: ${theme.colors.white};
display: flex;
justify-content: center;
align-items: center;`

const InsideBlock = styled.div`
width: 770px;
height: 370px;
background: ${theme.colors.beige};
`

const SvgBlock = styled.div`
display: flex;
justify-content: space-around;`


const ProgramBlock = ()=>{
  return(
    <OutsideBlock>
      <InsideBlock>
        <DivMargin height='80px'/>
        <SvgBlock>
          <WordSvg/>
          <ExcelSvg/>
          <PpSvg/>
          <AdobeSvg/>
        </SvgBlock>
        <DivMargin height='107px'/>
        <SvgBlock>
          <AmoCrmSvg/>
          <BitrixSvg/>
          <OnesSvg/>
        </SvgBlock>
      </InsideBlock>
    </OutsideBlock>
  )
}

export default ProgramBlock
