import styled from '@emotion/styled'


export const HeaderFormStyle = styled.div<any>(({theme}) => ({
  width: '390px',
  height: '500px',
  background: theme.colors.dark,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
}))
