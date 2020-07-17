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
position: ${prop('position')};
left: ${prop('left')};
top: ${prop('top')};
border-radius: ${prop('borderRadius')};
margin: ${prop('margin')};
z-index: ${prop('zIndex')};
width: ${prop('width100')};
height: ${prop('height100')};
flex-wrap: ${prop('wrap')};
overflow: ${prop('overflow')}`
