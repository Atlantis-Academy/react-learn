import React from 'react'
import HeaderTitleSvg from './HeaderTitleSvg'
import styled from '@emotion/styled'
import DivMargin from '../../DivMargin'
import textComponent from '../../TextComponents'

const HeaderTitleBlock = styled.div`
    max-width: 600px;`


const HeaderTitleH1 = styled.h1`
    font-family: 'Patrick Hand SC';
    font-style: normal;
    font-size: 64px;
    line-height: 70px;
    color: #3BB3C4;;
    margin: 0;`

const HeaderTitleH2 = styled.h2`
    font-family: Blogger Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 40px;
    line-height: 45px;
    color: #FFFFFF;
    margin: 0;`

const HeaderTitleP = styled.p`
    font-family: 'Proxima Nova';
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 30px;
    color: #FFFFFF;
    margin: 0;`

const HeaderTitle = () => {
  return (
    <HeaderTitleBlock>
      <DivMargin height='186px' />
      <HeaderTitleH1>
        {textComponent.header.title[0]}
      </HeaderTitleH1>
      <HeaderTitleH2>
        {textComponent.header.title[1]}
      </HeaderTitleH2>
      <HeaderTitleSvg />
      <HeaderTitleP>
        {textComponent.header.text[0]}
      </HeaderTitleP>
    </HeaderTitleBlock>
  )
}

export default HeaderTitle
