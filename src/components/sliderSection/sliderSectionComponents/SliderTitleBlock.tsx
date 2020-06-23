import styled from '@emotion/styled'
import DivMargin from '../../DivMargin'
import ArrowLeft from './ArrowLeft'
import ArrowRight from './ArrowRight'
import React from 'react'



const SliderTitleBlock = styled.div`
display: flex;
align-items: center`

const SliderTitle = styled.h2`
font-family: Blogger Sans;
font-style: normal;
font-weight: 500;
font-size: 45px;
line-height: 45px;
color: ${(props: any) => props.theme.colors.colorDark};
width: 390px;
height: 90px;`

const SliderTitleBlockSection = ()=>{
  return(
    <SliderTitleBlock>
      <DivMargin width='105px'/>
      <ArrowLeft>
        <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.68024 14.8334C2.69629 14.8514 2.71294 14.869 2.7302 14.8863L13.7559 25.9108C14.0813 26.2362 14.0814 26.7638 13.7559 27.0893C13.4305 27.4148 12.9029 27.4148 12.5774 27.0894L1.5518 16.0649C1.0534 15.5667 0.772984 14.9329 0.710613 14.2821C0.651808 14.1002 0.652005 13.898 0.711202 13.7162C0.774641 13.0685 1.05416 12.438 1.54981 11.9415L12.5604 0.91135C12.8856 0.585624 13.4132 0.585155 13.7389 0.910302C14.0646 1.23545 14.0651 1.76309 13.74 2.08881L2.72931 13.1191C2.71375 13.1347 2.69868 13.1506 2.6841 13.1667H29.8333C30.9444 13.1667 30.9444 14.8334 29.8333 14.8334H2.68024Z" fill="#3BB3C4"/>
        </svg>
      </ArrowLeft>
      <DivMargin width='10px'/>
      <ArrowRight>
        <svg width="31" height="28" viewBox="0 0 31 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M28.3197 14.8334C28.3037 14.8514 28.287 14.869 28.2698 14.8863L17.2441 25.9108C16.9186 26.2362 16.9186 26.7638 17.244 27.0893C17.5694 27.4148 18.0971 27.4148 18.4225 27.0894L29.4482 16.0649C29.9466 15.5667 30.227 14.9329 30.2894 14.2821C30.3482 14.1002 30.348 13.898 30.2888 13.7162C30.2253 13.0685 29.9458 12.438 29.4502 11.9415L18.4396 0.91135C18.1144 0.585624 17.5868 0.585155 17.261 0.910302C16.9353 1.23545 16.9349 1.76309 17.26 2.08881L28.2707 13.1191C28.2862 13.1347 28.3013 13.1506 28.3159 13.1667H1.16665C0.0555363 13.1667 0.0555363 14.8334 1.16665 14.8334H28.3197Z" fill="#3BB3C4"/>
        </svg>
      </ArrowRight>
      <DivMargin width='480px' />
      <SliderTitle>
        Автоматизация документооборота
      </SliderTitle>
    </SliderTitleBlock>
  )
}

export default SliderTitleBlockSection
