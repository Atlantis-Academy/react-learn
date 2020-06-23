import React from 'react'
import styled from '@emotion/styled'
import { Svg1, Svg2, Svg3 } from './SvgAdventag'
import Title from './Title'
import Text from './Text'
import textComponent from '../../TextComponents'

const AdventagBlock = styled.div`
display: flex;
width: 1120px;
margin: 0 auto;
justify-content: space-between;`

const DescrBlock = styled.div`
width: 280px`

const Adventages = () => {
  return (
    <AdventagBlock>
      <DescrBlock>
        <Svg1 />
        <Title>
          {textComponent.adventages.title[0]}
        </Title>
        <Text>
          {textComponent.adventages.text[0]}
        </Text>
      </DescrBlock>
      <DescrBlock>
        <Svg2 />
        <Title>
          {textComponent.adventages.title[1]}
        </Title>
        <Text>
          {textComponent.adventages.text[1]}
        </Text>
      </DescrBlock>
      <DescrBlock>
        <Svg3 />
        <Title>
          {textComponent.adventages.title[2]}
        </Title>
        <Text>
          {textComponent.adventages.text[2]}
        </Text>
      </DescrBlock>
    </AdventagBlock>
  )
}

export default Adventages
