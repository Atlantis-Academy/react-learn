import styled from 'styled-components'
import { prop } from 'styled-tools'
//todo: rename Box2

export const Box: any = styled.div`
max-width: ${prop('width')};
min-height: ${prop('height')};
background: ${prop('bg')};
display: ${prop('display')};
justify-content: ${prop('justify')};
align-items: ${prop('alignItems')};
background-image: ${prop('bgI')};
background-size: ${prop('bgS')};
background-repeat: ${prop('bgR')};
background-position: ${prop('bgP')};
border: ${prop('border')};
width: 100%;
flex-wrap: wrap;`
