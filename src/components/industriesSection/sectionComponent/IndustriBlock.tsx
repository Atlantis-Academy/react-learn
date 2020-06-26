import React from 'react'
import styled from '@emotion/styled'
import theme from '../../ui/Theme'
import DivMargin from '../../ui/DivMargin'

const BlockStyle = styled.div`
width: 1100px;
height: 600px;
display: flex;
align-items: center;`

const Indusri = styled.div`
width: 180px;
height: 180px;
border: 5px solid ${theme.colors.white};
border-radius: 5px;`

const IndustriBlock = ()=>{
  return(
    <BlockStyle>
      <Indusri>

      </Indusri>
      <DivMargin width='30px'/>
      <div>
        <Indusri>

        </Indusri>
        <DivMargin height='30px'/>
        <Indusri>

        </Indusri>
      </div>
      <DivMargin width='30px'/>
      <div>
        <Indusri>

        </Indusri>
        <DivMargin height='30px'/>
        <Indusri>

        </Indusri>
        <DivMargin height='30px'/>
        <Indusri>

        </Indusri>
      </div>
      <DivMargin width='30px'/>
      <div>
        <Indusri>

        </Indusri>
        <DivMargin height='30px'/>
        <Indusri>

        </Indusri>
      </div>
      <DivMargin width='30px'/>
      <Indusri>

      </Indusri>

    </BlockStyle>
  )
}

export default IndustriBlock
