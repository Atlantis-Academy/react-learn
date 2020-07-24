import styled from '@emotion/styled'
import { borders, color, space } from 'styled-system'
import { theme } from './theme'

export const Button = styled('button')(
  {
      textTransform: 'uppercase',
      cursor: 'pointer',
      color: theme.colors.white,
      fontSize: theme.fontSize.xs,
      fontFamily: theme.fontFamily.text,
      letterSpacing: '0.05em',
      borderRadius: theme.borderRadius.s,
      ':hover': {background: theme.colors.hoverButton}
  },
  space,
  color,
  borders,
)
