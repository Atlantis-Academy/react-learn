import styled from '@emotion/styled'
import { theme } from '../theme'


export const HeroForm = styled.div<any>(() => ({
  width: '390px',
  background: theme.colors.dark,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  borderRadius: theme.borderRadius.m
}))
