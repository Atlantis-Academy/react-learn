import React from 'react'
import styled from '@emotion/styled'
import { BoxSection } from './layout/BoxSection'
import { FormattedMessage } from 'react-intl'


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


const Tabs = () => {
  return (
    <BoxSection justifyContent={'center'}>
      <LeftTab>
        <FormattedMessage id={'left.tab'}/>
      </LeftTab>
      <CenterTab>
        <FormattedMessage id={'center.tab'}/>
      </CenterTab>
      <RightTab>
        <FormattedMessage id={'right.tab'}/>
      </RightTab>
    </BoxSection>
  )
}

export default Tabs
