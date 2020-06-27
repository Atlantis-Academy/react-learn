import React from 'react'
import Tabs from '../ui/Tabs'
import DivMargin from '../ui/layout/DivMargin'
import Adventages from './tabsComponents/Advetages'


const TabsSection = ()=>{
  return(
    <section>
      <Tabs/>
      <DivMargin height='80px'/>
      <Adventages/>
      <DivMargin height='180px'/>
    </section>
  )
}

export {TabsSection}
