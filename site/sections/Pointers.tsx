import React from 'react'
import DivMargin from '../ui/layout/DivMargin'
import Tabs from '../ui/Tabs'
import { Box } from '../ui/layout/Box'
import { SvgStyle } from '../ui/svg/SvgStyle'
import {
  ProposExport1,
  ProposExport2,
  ProposExport3,
  ProposExport4,
  ProposExport5,
  ProposExport6, ProposExport7, ProposExport8
} from '../ui/svg/ProposSvg'
import { Title } from '../ui/pointers/Title'
import textComponent from '../ui/text/TextComponents'
import { Text } from '../ui/pointers/Text'


const Pointers = ()=>{
  return(
    <section>
      <DivMargin height='150px'/>
      <Tabs/>
      <DivMargin height='90px'/>
      <Box width={'1190px'} margin={'0 auto'} display={'flex'}>
        <Box width={'245px'}>
          <div>
            <SvgStyle
              width='70px'
              height='70px'
            >
              {ProposExport1}
            </SvgStyle>
            <DivMargin height='34px' />
            <Title>
              {textComponent.proposSection.title[0]}
            </Title>
            <DivMargin height='10px' />
            <Text>
              {textComponent.proposSection.text[0]}
            </Text>
          </div>
        </Box>
        <DivMargin width='70px'/>
        <Box width={'245px'}>
          <div>
            <SvgStyle
              width='53px'
              height='70px'
            >
              {ProposExport2}
            </SvgStyle>
            <DivMargin height='34px' />
            <Title>
              {textComponent.proposSection.title[1]}
            </Title>
            <DivMargin height='10px' />
            <Text>
              {textComponent.proposSection.text[1]}
            </Text>
          </div>
        </Box>
        <DivMargin width='70px'/>
        <Box width={'245px'}>
          <div>
            <SvgStyle
              width='70px'
              height='70px'
            >
              {ProposExport3}
            </SvgStyle>
            <DivMargin height='34px' />
            <Title>
              {textComponent.proposSection.title[2]}
            </Title>
            <DivMargin height='10px' />
            <Text>
              {textComponent.proposSection.text[2]}
            </Text>
          </div>
        </Box>
        <DivMargin width='70px'/>
        <Box width={'245px'}>
          <div>
            <SvgStyle
              width='70px'
              height='70px'
            >
              {ProposExport4}
            </SvgStyle>
            <DivMargin height='34px' />
            <Title>
              {textComponent.proposSection.title[3]}
            </Title>
            <DivMargin height='10px' />
            <Text>
              {textComponent.proposSection.text[3]}
            </Text>
          </div>
        </Box>
      </Box>
      <DivMargin height='100px'/>
      <Box width={'1190px'} margin={'0 auto'} display={'flex'}>
        <Box width={'245px'}>
          <div>
            <SvgStyle
              width='70px'
              height='70px'
            >
              {ProposExport5}
            </SvgStyle>
            <DivMargin height='34px' />
            <Title>
              {textComponent.proposSection.title[4]}
            </Title>
            <DivMargin height='10px' />
            <Text>
              {textComponent.proposSection.text[4]}
            </Text>
          </div>
        </Box>
        <DivMargin width='70px'/>
        <Box width={'245px'}>
          <div>
            <SvgStyle
              width='53px'
              height='70px'
            >
              {ProposExport6}
            </SvgStyle>
            <DivMargin height='34px' />
            <Title>
              {textComponent.proposSection.title[5]}
            </Title>
            <DivMargin height='10px' />
            <Text>
              {textComponent.proposSection.text[5]}
            </Text>
          </div>
        </Box>
        <DivMargin width='70px'/>
        <Box width={'245px'}>
          <div>
            <SvgStyle
              width='70px'
              height='70px'
            >
              {ProposExport7}
            </SvgStyle>
            <DivMargin height='34px' />
            <Title>
              {textComponent.proposSection.title[6]}
            </Title>
            <DivMargin height='10px' />
            <Text>
              {textComponent.proposSection.text[6]}
            </Text>
          </div>
        </Box>
        <DivMargin width='70px'/>
        <Box width={'245px'}>
          <div>
            <SvgStyle
              width='70px'
              height='70px'
            >
              {ProposExport8}
            </SvgStyle>
            <DivMargin height='34px' />
            <Title>
              {textComponent.proposSection.title[7]}
            </Title>
            <DivMargin height='10px' />
            <Text>
              {textComponent.proposSection.text[7]}
            </Text>
          </div>
        </Box>
      </Box>
      <DivMargin height='140px'/>
    </section>
  )
}

export default Pointers
