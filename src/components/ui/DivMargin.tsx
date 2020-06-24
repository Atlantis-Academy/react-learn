import styled from '@emotion/styled'
import { PropsType } from './Theme'



const DivMargin = styled.div`
  width: ${(props: PropsType) => props.width};
  height: ${(props: PropsType) => props.height}`

export default DivMargin
