import React from 'react';
import Hero from './Hero'
import Automatization from './Automatization'
import { ThemeProvider } from 'emotion-theming'
import theme from '../ui/theme/Theme'
import { Bullets } from './Bullets'
import Case from './Case'
import Licenses from './Licenses'
import Video from './Video'
import Pointers from './Pointers'
import Industry from './Industry'
import { AppStyle } from '../ui/App'
import Header from '../ui/header/Header'


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
