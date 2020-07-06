import React from 'react';
import ReactDOM from 'react-dom';
import App from './lending/App';
import { IntlProvider } from 'react-intl'
import Ru from './ui/text/ru.json'
import En from './ui/text/en.json'

const local = navigator.language

let lang
if(local === 'en'){
  lang = En
} else {
  lang = Ru
}


ReactDOM.render(
  <IntlProvider
    locale={local}
    messages={lang}
    defaultLocale={local}
  >
    <App />
  </IntlProvider>,
  document.getElementById('root'))
