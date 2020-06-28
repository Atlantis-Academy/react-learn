import React from 'react'
import styled from '@emotion/styled'
import { TextStyle, TitleH2 } from '../../ui/TextStyle'
import theme from '../../ui/Theme'
import textComponent from '../../TextComponents'
import { SvgStyle } from '../../ui/svg/SvgStyle'
import { ProposExport1, ProposExport2, ProposExport3, ProposExport4 } from '../../ui/svg/ProposSvg'
import DivMargin from '../../ui/layout/DivMargin'


export const BlockStyle = styled.div`
width: 1190px;
margin: 0 auto;
display: flex;`

export const Propos = styled.div`
width: 245px;`

export const TitlePropos = styled(TitleH2)`
font-size: 28px;
line-height: 30px;
color: ${theme.colors.dark}`

export const Text = styled(TextStyle)`
font-size: 18px;
line-height: 25px;
color: ${theme.colors.dark}`

const ProposBlock = () => {
  return (
    <BlockStyle>
      <Propos>
        <div>
          <SvgStyle
            width='70px'
            height='70px'
          >
            {ProposExport1}
          </SvgStyle>
          <DivMargin height='34px' />
          <TitlePropos>
            {textComponent.proposSection.title[0]}
          </TitlePropos>
          <DivMargin height='10px' />
          <Text>
            {textComponent.proposSection.text[0]}
          </Text>
        </div>
      </Propos>
      <DivMargin width='70px'/>
      <Propos>
        <div>
          <SvgStyle
            width='53px'
            height='70px'
          >
            {ProposExport2}
          </SvgStyle>
          <DivMargin height='34px' />
          <TitlePropos>
            {textComponent.proposSection.title[1]}
          </TitlePropos>
          <DivMargin height='10px' />
          <Text>
            {textComponent.proposSection.text[1]}
          </Text>
        </div>
      </Propos>
      <DivMargin width='70px'/>
      <Propos>
        <div>
          <SvgStyle
            width='70px'
            height='70px'
          >
            {ProposExport3}
          </SvgStyle>
          <DivMargin height='34px' />
          <TitlePropos>
            {textComponent.proposSection.title[2]}
          </TitlePropos>
          <DivMargin height='10px' />
          <Text>
            {textComponent.proposSection.text[2]}
          </Text>
        </div>
      </Propos>
      <DivMargin width='70px'/>
      <Propos>
        <div>
          <SvgStyle
            width='70px'
            height='70px'
          >
            {ProposExport4}
          </SvgStyle>
          <DivMargin height='34px' />
          <TitlePropos>
            {textComponent.proposSection.title[3]}
          </TitlePropos>
          <DivMargin height='10px' />
          <Text>
            {textComponent.proposSection.text[3]}
          </Text>
        </div>
      </Propos>
    </BlockStyle>
  )
}

export default ProposBlock
