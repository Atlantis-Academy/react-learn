import DivMargin from '../../ui/layout/DivMargin'
import React from 'react'
import styled from '@emotion/styled'
import textComponent from '../../TextComponents'
import theme from '../../ui/Theme'
import { TextStyle } from '../../ui/TextStyle'


const TextBlock = styled.div`
display: flex;`

const Text = styled(TextStyle)`
width: 495px;
font-size: 18px;
line-height: 25px;
color: ${theme.colors.dark};`

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
