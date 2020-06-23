import styled from '@emotion/styled'
import React from 'react'

const Title = styled.h2`
font-family: Blogger Sans;
font-style: normal;
font-weight: 500;
font-size: 45px;
line-height: 45px;
color: #0F2B3D;
width: 390px;`

const TitleBlock = ()=>{
  return(
    <div>
      <Title>
        Совместимость Riverdoc с другими системами
      </Title>
    </div>
  )
}

export default TitleBlock
