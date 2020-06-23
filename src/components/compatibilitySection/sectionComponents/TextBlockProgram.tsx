import DivMargin from '../../DivMargin'
import React from 'react'
import styled from '@emotion/styled'
<<<<<<< HEAD
=======
import textComponent from '../../TextComponents'
>>>>>>> ce86860... feat(components): add all text to one component


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
<<<<<<< HEAD
        Система совместима с офисными пакетами MS Office, Adobe Arcobat, 1С, Битрикс24, AmoCRM (и другими SaaS), а
        также с форматами (Word, Excel, Powerpoint, Acrobat)
=======
        {textComponent.compSection.text[0]}
>>>>>>> ce86860... feat(components): add all text to one component
      </Text>
    </TextBlock>
  )
}

export default TextBlockProgram
