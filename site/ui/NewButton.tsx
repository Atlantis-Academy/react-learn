//todo: rename this file

import styled from '@emotion/styled'
import { borders, color, space } from 'styled-system'
import { theme } from './theme'

export const Button = styled('button')(
  {
      borderRadius: theme.borderRadius.s,
      padding: '10px 30px',
      background: theme.colors.whiteBlue,
      ':hover': {background: theme.colors.hoverButton}
  },
  space,
  color,
  borders,
)
