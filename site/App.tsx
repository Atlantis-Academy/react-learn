import React from 'react';
import HeroSection from './lending/Hero'
import Automatization from './lending/Automatization'
import { ThemeProvider } from 'emotion-theming'
import theme from './ui/theme/Theme'
import { Bullets } from './lending/Bullets'
import Case from './lending/Case'
import Licenses from './lending/Licenses'
import Video from './lending/Vidio'
import Pointers from './lending/Pointers'
import Industry from './lending/Industry'
import { Box } from './ui/layout/Box'


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
