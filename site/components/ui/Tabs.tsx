import React from 'react'
import styled from '@emotion/styled'
import textComponent from '../TextComponents'


const LeftTab = styled.div<any>(({theme}) => ({
  width: '200px',
  height: '40px',
  background: theme.colors.colorDark,
  borderRadius: theme.tabsRadius.left,
  fontFamily: theme.fontFamilyText,
  fontWeight: 600,
  fontSize: `${theme.fontSize[0]}px`,
  lineHeight: '20px',
  textAlign: 'center',
  color: theme.colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}))

const RightTab = styled(LeftTab)<any>(({theme}) => ({
  borderRadius: theme.tabsRadius.right,
  border: `1px solid ${theme.colors.gray}`,
  background: theme.colors.white,
  color: theme.colors.colorDark
}))

const CenterTab = styled(RightTab)(() => ({
  borderRadius: 0
}))

const TabsBlock = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center',
}))

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
