import { SvgStyle } from '../../ui/svg/SvgStyle'
import { ProposExport5, ProposExport6, ProposExport7, ProposExport8 } from '../../ui/svg/ProposSvg'
import DivMargin from '../../ui/layout/DivMargin'
import textComponent from '../../TextComponents'
import React from 'react'
import { BlockStyle, Propos, Text, TitlePropos } from './ProposBlock'


const ProposBlock2 = () => {
  return (
    <BlockStyle>
      <Propos>
        <div>
          <SvgStyle
            width='70px'
            height='70px'
          >
            {ProposExport5}
          </SvgStyle>
          <DivMargin height='34px' />
          <TitlePropos>
            {textComponent.proposSection.title[4]}
          </TitlePropos>
          <DivMargin height='10px' />
          <Text>
            {textComponent.proposSection.text[4]}
          </Text>
        </div>
      </Propos>
      <DivMargin width='70px' />
      <Propos>
        <div>
          <SvgStyle
            width='63px'
            height='70px'
          >
            {ProposExport6}
          </SvgStyle>
          <DivMargin height='34px' />
          <TitlePropos>
            {textComponent.proposSection.title[5]}
          </TitlePropos>
          <DivMargin height='10px' />
          <Text>
            {textComponent.proposSection.text[5]}
          </Text>
        </div>
      </Propos>
      <DivMargin width='70px' />
      <Propos>
        <div>
          <SvgStyle
            width='70px'
            height='70px'
          >
            {ProposExport7}
          </SvgStyle>
          <DivMargin height='34px' />
          <TitlePropos>
            {textComponent.proposSection.title[6]}
          </TitlePropos>
          <DivMargin height='10px' />
          <Text>
            {textComponent.proposSection.text[6]}
          </Text>
        </div>
      </Propos>
      <DivMargin width='70px' />
      <Propos>
        <div>
          <SvgStyle
            width='70px'
            height='70px'
          >
            {ProposExport8}
          </SvgStyle>
          <DivMargin height='34px' />
          <TitlePropos>
            {textComponent.proposSection.title[7]}
          </TitlePropos>
          <DivMargin height='10px' />
          <Text>
            {textComponent.proposSection.text[7]}
          </Text>
        </div>
      </Propos>
    </BlockStyle>
  )
}

export default ProposBlock2
