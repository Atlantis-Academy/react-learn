import styled from '@emotion/styled'

export interface PropsType {
  width?: string
  height?: string
  colors?: any
  text?: string
}

const DivMargin = styled.div`
  width: ${(props: PropsType) => props.width};
  height: ${(props: PropsType) => props.height}`

export default DivMargin
