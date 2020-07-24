//todo: rename this file

import styled from '@emotion/styled'
import { theme } from '../theme'

export const Button = styled('button')(
  {
      borderRadius: theme.borderRadius.s,
      padding: '15px 110px',
      border: 'none',
      background: theme.colors.whiteBlue,
      ':hover': {background: theme.colors.hoverButton}
  })
