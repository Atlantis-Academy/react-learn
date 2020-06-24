import styled from '@emotion/styled'
import DivMargin from '../../ui/DivMargin'
import { ArrowLeft } from './ArrowLeft'
import { ArrowRight } from './ArrowRight'
import React from 'react'
import textComponent from '../../TextComponents'
import { TitleH2 } from '../../ui/TextStyle'

const SliderTitleBlock = styled.div`
display: flex;
align-items: center`

const SliderTitle = styled(TitleH2)`
font-size: 45px;
color: ${(props: any) => props.theme.colors.colorDark};
width: 390px;
height: 90px;`

const SliderTitleBlockSection = ()=>{
  return(
    <SliderTitleBlock>
      <DivMargin width='105px'/>
      <ArrowLeft/>
      <DivMargin width='10px'/>
      <ArrowRight/>
      <DivMargin width='480px' />
      <SliderTitle>
        {textComponent.sliderTitleBlock[0]}
      </SliderTitle>
    </SliderTitleBlock>
  )
}

export default SliderTitleBlockSection
