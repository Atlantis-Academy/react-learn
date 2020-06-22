import React from 'react';
import HeaderSection from './Header/Header'
import '../styles/index.css';
import styled from '@emotion/styled'
import SliderSection from './SliderSection/SliderSection'
import {ThemeProvider} from 'emotion-theming'
import theme from './Theme'

const AppSection = styled.div`
width: 1440px;
margin: 0 auto`



class App extends React.PureComponent {
    render() {
        return (
          <ThemeProvider theme={theme}>
          <AppSection>
            <HeaderSection />
            <SliderSection/>
          </AppSection>
          </ThemeProvider>
        );
    }
}

export default App;
