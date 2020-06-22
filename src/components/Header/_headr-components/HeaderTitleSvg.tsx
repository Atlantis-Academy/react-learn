import React from 'react'
import styled from '@emotion/styled'


const HeaderTitleSvgBlock = styled.div`
    height: 50px;
    display: flex;
    align-items: center;`

const HeaderTitleSvg = () => {
  return (
    <HeaderTitleSvgBlock>
      <svg
        width='42'
        height='12'
        viewBox='0 0 42 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1C12.3834 1 10.6306 11 20.5669 11C30.5032 11 30.493 1 41 1'
          stroke='#FFFFFF'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
      </svg>
      <svg
        width='42'
        height='12'
        viewBox='0 0 42 12'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M1 1C12.3834 1 10.6306 11 20.5669 11C30.5032 11 30.493 1 41 1'
          stroke='#FFFFFF'
          strokeWidth='2'
          strokeMiterlimit='10'
          strokeLinecap='round'
        />
      </svg>
    </HeaderTitleSvgBlock>
  )
}
export default HeaderTitleSvg
