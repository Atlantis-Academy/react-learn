import styled from 'styled-components'
import { prop } from 'styled-tools'


export const Layout: any = styled.div`
justify-content: ${prop('justify', 'space-between')};
max-width: ${prop('width', '1230px')};
display: ${prop('display', 'flex')};
margin: ${prop('margin', '0 auto')};
align-items: ${prop('alignItems')};
`
