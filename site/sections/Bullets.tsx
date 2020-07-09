import React from 'react'
import Tabs from '../ui/Tabs'
import DivMargin from '../ui/layout/DivMargin'
import { Box } from '../ui/layout/Box'
import { Speed } from '../ui/bullets/Speed'
import { Text } from '../ui/text/Text'
import { FormattedMessage } from 'react-intl'
import { Pluses } from '../ui/bullets/Pluses'
import { Cost } from '../ui/bullets/Cost'


const Bullets = ()=>{
  return(
    <section>
      <Tabs/>
      <DivMargin height='80px'/>
      <Box width={'1120px'} display={'flex'} margin={'0 auto'} justifyContent={'space-between'}>
        <Box width={'280px'}>
          <Speed />
          <DivMargin height='30px'/>
          <Text themeText={'sectionTitle'}>
            <FormattedMessage id={'bullets.speed.title'}/>
          </Text>
          <DivMargin height='20px'/>
          <Text size={'18px'} lineHeight={'25px'}>
            <FormattedMessage id={'bullets.speed.descr'}/>
          </Text>
        </Box>
        <Box width={'280px'}>
          <Pluses />
          <DivMargin height='30px'/>
          <Text themeText={'sectionTitle'}>
            <FormattedMessage id={'bullets.pluses.title'}/>
          </Text>
          <DivMargin height='20px'/>
          <Text size={'18px'} lineHeight={'25px'}>
            <FormattedMessage id={'bullets.pluses.descr'}/>
          </Text>
        </Box>
        <Box width={'280px'}>
          <Cost />
          <DivMargin height='30px'/>
          <Text themeText={'sectionTitle'}>
            <FormattedMessage id={'bullets.cost.title'}/>
          </Text>
          <DivMargin height='20px'/>
          <Text size={'18px'} lineHeight={'25px'}>
            <FormattedMessage id={'bullets.cost.descr'}/>
          </Text>
        </Box>
      </Box>
      <DivMargin height='180px'/>
    </section>
  )
}

export {Bullets}
