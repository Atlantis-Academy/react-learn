import React from 'react'
import styled from '@emotion/styled'
import DivMargin from '../../ui/DivMargin'
import theme from '../../ui/Theme'
import {
  Industri2,
  IndustriExp,
  IndustriExp1,
  IndustriExp3,
  IndustriExp4,
  IndustriExp5,
  IndustriExp6, IndustriExp7, IndustriExp8
} from '../../ui/svg/IndusriSvg'
import { SvgStyle } from '../../ui/svg/SvgStyle'
import { TextStyle } from '../../ui/TextStyle'
import textComponent from '../../TextComponents'

const BlockStyle = styled.div`
width: 1100px;
height: 600px;
display: flex;
align-items: center;
position: relative;
z-index: 5`

const Indusri = styled.div`
width: 180px;
height: 180px;
border: 5px solid ${theme.colors.white};
border-radius: 5px;
text-align: center;
background-color: ${theme.colors.beige}
`

const Text = styled(TextStyle)`
font-size: 13px;
color: ${theme.colors.dark};
text-transform: uppercase;
line-height: 15px;
`




const IndustriBlock = ()=>{
  return(
    <BlockStyle>
      <Indusri>
        <DivMargin height='30px'/>
        <SvgStyle width='80px' height='80px'>
          {IndustriExp}
        </SvgStyle>
        <DivMargin height='19px'/>
        <Text>
          {textComponent.indusriesSection.text[0]}
        </Text>
      </Indusri>
      <DivMargin width='30px'/>
      <div>
        <Indusri>
          <DivMargin height='30px'/>
          <SvgStyle width='80px' height='80px'>
            {IndustriExp1}
          </SvgStyle>
          <DivMargin height='19px'/>
          <Text>
            {textComponent.indusriesSection.text[1]}
          </Text>
        </Indusri>
        <DivMargin height='30px'/>
        <Indusri>
          <DivMargin height='30px'/>
          <SvgStyle width='80px' height='80px'>
            {Industri2[0]}
          </SvgStyle>
          <DivMargin height='19px'/>
          <Text>
            {textComponent.indusriesSection.text[2]}
          </Text>
        </Indusri>
      </div>
      <DivMargin width='30px'/>
      <div>
        <Indusri>
          <DivMargin height='30px'/>
          <SvgStyle width='80px' height='80px'>
            {IndustriExp3}
          </SvgStyle>
          <DivMargin height='19px'/>
          <Text>
            {textComponent.indusriesSection.text[3]}
          </Text>
        </Indusri>
        <DivMargin height='30px'/>
        <Indusri>
          <DivMargin height='30px'/>
          <SvgStyle width='80px' height='80px'>
            {IndustriExp4}
          </SvgStyle>
          <DivMargin height='19px'/>
          <Text>
            {textComponent.indusriesSection.text[4]}
          </Text>
        </Indusri>
        <DivMargin height='30px'/>
        <Indusri>
          <DivMargin height='30px'/>
          <SvgStyle width='80px' height='80px'>
            {IndustriExp5}
          </SvgStyle>
          <DivMargin height='19px'/>
          <Text>
            {textComponent.indusriesSection.text[5]}
          </Text>
        </Indusri>
      </div>
      <DivMargin width='30px'/>
      <div>
        <Indusri>
          <DivMargin height='30px'/>
          <SvgStyle width='80px' height='80px'>
            {IndustriExp6}
          </SvgStyle>
          <DivMargin height='19px'/>
          <Text>
            {textComponent.indusriesSection.text[6]}
          </Text>
        </Indusri>
        <DivMargin height='30px'/>
        <Indusri>
          <DivMargin height='30px'/>
          <SvgStyle width='80px' height='80px'>
            {IndustriExp7}
          </SvgStyle>
          <DivMargin height='19px'/>
          <Text>
            {textComponent.indusriesSection.text[7]}
          </Text>
        </Indusri>
      </div>
      <DivMargin width='30px'/>
      <Indusri>
        <DivMargin height='30px'/>
        <SvgStyle width='80px' height='80px'>
          {IndustriExp8}
        </SvgStyle>
        <DivMargin height='19px'/>
        <Text>
          {textComponent.indusriesSection.text[8]}
        </Text>
      </Indusri>
    </BlockStyle>
  )
}

export default IndustriBlock
