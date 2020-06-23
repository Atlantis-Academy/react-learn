import DivMargin from '../../DivMargin'
import React from 'react'
import styled from '@emotion/styled'
import textComponent from '../../TextComponents'


const TextBlock = styled.div`
display: flex;`

const Text = styled.p`
width: 495px;
font-family: Proxima Nova;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 25px;
color: #0F2B3D;`

const TextBlockProgram = ()=>{
  return(
    <TextBlock>
      <DivMargin width='525px' />
      <Text>
        {textComponent.compSection.text[0]}
      </Text>
    </TextBlock>
  )
}

export default TextBlockProgram
