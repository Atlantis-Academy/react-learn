import React from 'react'
import DivMargin from '../ui/DivMargin'
import styled from '@emotion/styled'
import TitleBlock from './sectionComponents/DescrBlock'
import ProgramBlock from './sectionComponents/ProgramBlock'
import TextBlockProgram from './sectionComponents/TextBlockProgram'
import theme from '../ui/Theme'


export const StyleSection = styled.section`
background: ${theme.colors.beige};`

const DescrBlock = styled.div`
width: 1230px;
display: flex;
margin: 0 auto;
justify-content: space-between;`

const CompatSection = () => {
  return (
    <StyleSection>
      <DivMargin height='120px' />
      <DescrBlock>
        <TitleBlock />
        <ProgramBlock />
      </DescrBlock>
      <DivMargin height='50px' />
      <TextBlockProgram/>
      <DivMargin height='145px' />
    </StyleSection>
  )
}

export default CompatSection
