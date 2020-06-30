import React from 'react';
import HeroSection from './Hero'
import Automatization from './Automatization'
import { ThemeProvider } from 'emotion-theming'
import theme from '../ui/theme/Theme'
import { Bullets } from './Bullets'
import Case from './Case'
import Licenses from './Licenses'
import Video from './Video'
import Pointers from './Pointers'
import Industry from './Industry'
import { Box } from '../ui/layout/Box'


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box
          width={'1440px'}
          margin={'0 auto'}
        >
          <HeroSection />
          <Automatization />
          <Bullets />
          <Case />
          <Licenses />
          <Video />
          <Pointers />
          <Industry />
        </Box>
      </ThemeProvider>
    );
  }
}

export default App;
