import React from 'react'
import styled from '@emotion/styled'
import DescrBlockLeft from './DescriptionBlockLeft'
import DescrBlockRight from './DescriptionBlockRight'
import DecrBlockCenter from './DescriptionBlockCenter'

const AdventagBlock = styled.div`
display: flex;
width: 1120px;
margin: 0 auto;
justify-content: space-between;`

const Adventages = () => {
  return (
    <AdventagBlock>
      <DescrBlockLeft/>
      <DecrBlockCenter/>
      <DescrBlockRight/>
    </AdventagBlock>
  )
}

export default Adventages
