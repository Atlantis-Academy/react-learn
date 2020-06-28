import styled from '@emotion/styled'
import { PropsType } from '../Types'


export const PositionBlock = styled.div`
  display: ${(props: PropsType) => props.display};
  width: ${(props: PropsType) => props.width};
  position: ${(props: PropsType) => props.position};
  background: ${(props: PropsType) => props.background};`


