import React from 'react'
import Section from '../../ui/Section'
import { Layout } from '../../ui/layout/Layout'
import TextBlock from './src/TextBlock'
import FormBlock from './src/FormBlock'
import { Box } from '../../ui/layout/Box2'
import { BoxForm } from '../../ui/hero/BoxForm'
import { WaveTop } from '../../ui/hero/WaveTop'
import { WaveBottom } from '../../ui/hero/WaveBottom'


const HeroSection = () => {
  return (
    <Section>
      <Layout
        alignItems={'center'}
      >
        <TextBlock />
        <BoxForm>
          <WaveTop>
            <WaveBottom>
              <FormBlock/>
            </WaveBottom>
          </WaveTop>
        </BoxForm>
      </Layout>
      <Box height='28px' />
    </Section>
  )
}
export default HeroSection
