import React from 'react'
import Section from '../../ui/Section'
import { Layout } from '../../ui/layout/Layout'
import TextBlock from './src/TextBlock'
import FormBlock from './src/FormBlock'
import { Box } from '../../ui/layout/NewBox'
import { BoxForm } from '../../ui/hero/BoxForm'
import { WaveTop } from '../../ui/hero/WaveTop'
import { WaveBottom } from '../../ui/hero/WaveBottom'
import { Column } from '../../ui/layout/NewLayout'


const HeroSection = () => {
  return (
    <Section>
      <Layout
        alignItems={'center'}
      >
        <TextBlock />
        <Column
          flexBasis={600}
          height={672}
        >
          <BoxForm>
            <WaveTop>
              <WaveBottom>
                <Column
                  width={[1]}
                  alignItems={'center'}
                  height={'100%'}
                  justifyContent={'center'}
                >
                  <Box height={30} />
                  <FormBlock />
                </Column>
              </WaveBottom>
            </WaveTop>
          </BoxForm>
        </Column>
      </Layout>
      <Box height={36} />
    </Section>
  )
}
export default HeroSection
