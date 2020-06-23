import React from 'react'
import styled from '@emotion/styled'

const OutsideBlock = styled.div`
width: 810px;
height: 410px;
background: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;`

const InsideBlock = styled.div`
width: 770px;
height: 370px;
background: #F2F2F2;`


const ProgrammBlock = ()=>{
  return(
    <OutsideBlock>
      <InsideBlock>
      </InsideBlock>
    </OutsideBlock>
  )
}

export default ProgrammBlock
