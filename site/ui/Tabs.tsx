import React from 'react'
import styled from '@emotion/styled'
import { BoxSection } from './layout/BoxSection'
import { FormattedMessage } from 'react-intl'
import { theme } from './theme'


const LeftTab = styled.div(() => ({
  width: '200px',
  height: '40px',
  background: theme.colors.colorDark,
  borderRadius: '20px 0px 0px 20px',
  fontFamily: theme.fontFamily.text,
  fontWeight: 600,
  fontSize: `${theme.fontSize.xs}`,
  lineHeight: '20px',
  textAlign: 'center',
  color: theme.colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
}))

const RightTab = styled(LeftTab)(() => ({
  borderRadius: '0px 20px 20px 0px',
  border: `${theme.border.s} ${theme.colors.gray}`,
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
