import React from 'react';
import HeaderSection from './header/Header'
import styled from '@emotion/styled'
import SliderSection from './sliderSection/SliderSection'
import {ThemeProvider} from 'emotion-theming'
import theme from './ui/Theme'
import { TabsSection } from './tabsSection/TabsSection'
import CompatSection from './compatibilitySection/CompatibilitySection'

const AppSection = styled.div`
width: ${(props: any) => props.theme.width};
margin: 0 auto`

import { injectGlobal } from 'emotion'
import LicensesSection from './licensesSection/LicensesSection'
import VideoSlideSection from './videoSlideSection/VidioSlideSection'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  button, input, textarea {
        outline: none;
}
  body{margin: 0}
  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova'),
      local('ProximaNova-Regular'),
      url('./src/components/ui/fonts/ProximaNova-Regular.woff2')
        format('woff2'); 
  }
  @font-face {
  font-family: 'Blogger Sans';
    src: local('Blogger Sans'),
      local('BloggerSans-Bold'),
      url('./src/components/ui/fonts/BloggerSans-Bold.woff2')
        format('woff2');
  }
 `




class App extends React.Component {
    render() {
        return (
          <ThemeProvider theme={theme}>
          <AppSection>
            <HeaderSection />
            <SliderSection/>
            <TabsSection/>
            <CompatSection/>
            <LicensesSection/>
            <VideoSlideSection/>
          </AppSection>
          </ThemeProvider>
        );
    }
}

export default App;
