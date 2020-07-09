import styled from '@emotion/styled'


export const HeroForm = styled.div<any>(({theme}) => ({
  width: '390px',
  background: theme.colors.dark,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}))
