import React from 'react';
import Hero from './sections/hero/Hero'
import Automatization from './sections/automatization/Automatization'
import { ThemeProvider } from 'emotion-theming'
import { Bullets } from './sections/Bullets'
import Case from './sections/Case'
import Licenses from './sections/Licenses'
import Video from './sections/Video'
import Pointers from './sections/Pointers'
import Industry from './sections/Industry'
import { AppStyle } from './ui/App'
import Header from './sections/header/Header'
import { theme } from './ui/theme'


class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppStyle>
          <Header />
          <Hero />
          <Automatization />
          <Bullets />
          <Case />
          <Licenses />
          <Video />
          <Pointers />
          <Industry />
        </AppStyle>
      </ThemeProvider>
    );
  }
}

export default App;
