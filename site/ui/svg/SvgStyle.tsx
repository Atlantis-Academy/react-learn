import styled from '@emotion/styled'
import { PropsType } from '../theme/Theme'


export const SvgStyle = styled.svg`
width: ${(props: PropsType) => props.width};
height: ${(props: PropsType) => props.height};
fill: ${(props: PropsType) => props.fill};
stroke: ${(props: PropsType) => props.stroke}`
