import React from 'react'
import Section from '../../ui/Section'
import { Layout } from '../../ui/layout/Layout'
import TextBlock from './src/TextBlock'
import FormBlock from './src/FormBlock'
import { Box } from '../../ui/layout/Box2'


const HeroSection = () => {
  return (
    <Section>
      <Layout
        alignItems={'center'}
      >
        <TextBlock />
        <Box
          width={'600px'}
          height={'680px'}
          bg={'radial-gradient(50.75% 50.75% at 50% 49.25%, #006D8D 0%, #0A4759 100%)'}
          display={'flex'}
          justify={'center'}
          alignItems={'center'}
        >
          <Box
            width={'600px'}
            height={'680px'}
            display={'flex'}
            justify={'center'}
            alignItems={'center'}
            bgI={`url('site/ui/svg/Wave.svg')`}
            bgS={'285px 276px'}
            bgR={'no-repeat'}
            bgP={'100% 8%'}
          >
            <Box
              width={'600px'}
              height={'680px'}
              display={'flex'}
              justify={'center'}
              alignItems={'center'}
              bgI={`url('site/ui/svg/Wave.svg')`}
              bgS={'285px 197px'}
              bgR={'no-repeat'}
              bgP={'0% 73%'}
            >
              <FormBlock/>
            </Box>
          </Box>
        </Box>
      </Layout>
      <Box height='28px' />
    </Section>
  )
}
export default HeroSection
