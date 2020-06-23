import React from 'react'
import styled from '@emotion/styled'
import { AdobeSvg, AmoCrmSvg, BitrixSvg, ExcelSvg, OnesSvg, PpSvg, WordSvg } from './ProgramSvg'
import DivMargin from '../../DivMargin'

const OutsideBlock = styled.div`
width: 810px;
height: 410px;
background: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;`

const InsideBlock = styled.div`
width: 770px;
height: 370px;
background: #F2F2F2;
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
