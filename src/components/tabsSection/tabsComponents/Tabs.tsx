import React from 'react'
import styled from '@emotion/styled'
import textComponent from '../../TextComponents'
import theme from '../../ui/Theme'


const LeftTab = styled.div`
width: 200px;
height: 40px;
background: ${theme.colors.colorDark};
border-radius: 20px 0px 0px 20px;
font-family: ${theme.fontFamilyText};
font-weight: 600;
font-size: 16px;
line-height: 20px;
text-align: center;
color: ${theme.colors.white};
display: flex;
align-items: center;
justify-content: center;`

const RightTab = styled(LeftTab)`
border-radius: 0px 20px 20px 0px;
border: 1px solid ${theme.colors.gray};
background: ${theme.colors.white};
color: ${theme.colors.colorDark};`

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
        {textComponent.tabsText[0]}
      </LeftTab>
      <CenterTab>
        {textComponent.tabsText[1]}
      </CenterTab>
      <RightTab>
        {textComponent.tabsText[2]}
      </RightTab>
    </TabsBlock>
  )
}

export default Tabs
