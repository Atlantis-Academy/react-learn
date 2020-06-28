import styled from '@emotion/styled'
import React from 'react'
import theme from './Theme'


export const ArrowLeftStyle = styled.div`
border: 1px solid ${theme.colors.whiteBlue};
width: 70px;
height: 70px;
border-radius: 36px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
opacity: 0.5;
`

const ArrowLeft = ()=>{
  return(
    <ArrowLeftStyle>
      <svg width="31" height="28" viewBox="0 0 31 28" fill="none">
        <path d="M2.68024 14.8334C2.69629 14.8514 2.71294 14.869 2.7302 14.8863L13.7559 25.9108C14.0813 26.2362 14.0814 26.7638 13.7559 27.0893C13.4305 27.4148 12.9029 27.4148 12.5774 27.0894L1.5518 16.0649C1.0534 15.5667 0.772984 14.9329 0.710613 14.2821C0.651808 14.1002 0.652005 13.898 0.711202 13.7162C0.774641 13.0685 1.05416 12.438 1.54981 11.9415L12.5604 0.91135C12.8856 0.585624 13.4132 0.585155 13.7389 0.910302C14.0646 1.23545 14.0651 1.76309 13.74 2.08881L2.72931 13.1191C2.71375 13.1347 2.69868 13.1506 2.6841 13.1667H29.8333C30.9444 13.1667 30.9444 14.8334 29.8333 14.8334H2.68024Z" fill="#3BB3C4"/>
      </svg>
    </ArrowLeftStyle>
  )
}

export { ArrowLeft }
