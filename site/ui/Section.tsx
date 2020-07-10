import styled from 'styled-components'
import { prop } from 'styled-tools'
import theme from './theme/Theme'


const Section: any = styled.section`
background: ${prop('bg', `${theme.colors.darkBlue}`)};
position: ${prop('position')};
`

export default Section
