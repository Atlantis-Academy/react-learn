import styled from '@emotion/styled'
import borderRadius from '../theme/BorderRadius'


export const HeroForm = styled.div<any>(({theme}) => ({
  width: '390px',
  background: theme.colors.dark,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: borderRadius.m
}))
