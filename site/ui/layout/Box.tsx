import styled from '@emotion/styled'
import { PropsType } from '../Types'


export const Box = styled.div`
  display: ${(props: PropsType) => props.display};
  width: ${(props: PropsType) => props.width};
  position: ${(props: PropsType) => props.position};
  background: ${(props: PropsType) => props.background};
  margin: ${(props: PropsType) => props.margin};
  text-align: ${(props: PropsType) => props.textAlign};
  align-items: ${(props: PropsType) => props.alignItems};
  border-radius: ${(props: PropsType) => props.borderRadius};
  justify-content: ${(props: PropsType) => props.justifyContent};
  background: ${(props: PropsType) => props.background};
  z-index: ${(props: PropsType) => props.zIndex};
  left: ${(props: PropsType) => props.left};
  top: ${(props: PropsType) => props.top};
  height: ${(props: PropsType) => props.height};
  border: ${(props: PropsType) => props.border};`


