import styled from '@emotion/styled'
import React from 'react'
import { ArrowLeftStyle } from './ArrowLeft'


const ArrowRightStyle = styled(ArrowLeftStyle)(() => ({
  opacity: 1,
}))

const ArrowRight = () => {
  return (
    <ArrowRightStyle>
      <svg
        width='31'
        height='28'
        viewBox='0 0 31 28'
        fill='none'
      >
        <path
          d='M28.3197 14.8334C28.3037 14.8514 28.287 14.869 28.2698 14.8863L17.2441 25.9108C16.9186 26.2362 16.9186 26.7638 17.244 27.0893C17.5694 27.4148 18.0971 27.4148 18.4225 27.0894L29.4482 16.0649C29.9466 15.5667 30.227 14.9329 30.2894 14.2821C30.3482 14.1002 30.348 13.898 30.2888 13.7162C30.2253 13.0685 29.9458 12.438 29.4502 11.9415L18.4396 0.91135C18.1144 0.585624 17.5868 0.585155 17.261 0.910302C16.9353 1.23545 16.9349 1.76309 17.26 2.08881L28.2707 13.1191C28.2862 13.1347 28.3013 13.1506 28.3159 13.1667H1.16665C0.0555363 13.1667 0.0555363 14.8334 1.16665 14.8334H28.3197Z'
          fill='#3BB3C4'
        />
      </svg>
    </ArrowRightStyle>
  )
}

export { ArrowRight }