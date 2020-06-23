import React from 'react'
import styled from '@emotion/styled'


const LeftTab = styled.div`
width: 200px;
height: 40px;
background: ${(props: any) => props.theme.colors.colorDark};
border-radius: 20px 0px 0px 20px;
font-family: Proxima Nova;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: ${(props: any) => props.theme.colors.white};
display: flex;
align-items: center;
justify-content: center;`

const RightTab = styled(LeftTab)`
border-radius: 0px 20px 20px 0px;
border: 1px solid #DDDDDD;
background: ${(props: any) => props.theme.colors.white};
color: ${(props: any) => props.theme.colors.colorDark};`

const CenterTab = styled(RightTab)`
border-radius: 0;
`

const TabsBlock = styled.div`
display: flex;
justify-content: center;`

const Tabs = () => {
  return (
    <TabsBlock>
      <LeftTab>
        Начинающим
      </LeftTab>
      <CenterTab>
        Малому бизнесу
      </CenterTab>
      <RightTab>
        Предприятиям
      </RightTab>
    </TabsBlock>
  )
}

export default Tabs
