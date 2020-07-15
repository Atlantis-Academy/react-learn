import { injectGlobal } from 'emotion'
import { Border, TabsRadius } from './Types'


injectGlobal`
  * {
    box-sizing: border-box;
  }
  button, input, textarea {
        outline: none;
}
  body, h1, h2, p{margin: 0}

  
  @font-face {
    font-family: 'Proxima Nova';
    src: local('Proxima Nova'),
      local('ProximaNova-Regular'),
      url('./site/ui/theme/fonts/ProximaNova-Regular.woff2')
        format('woff2'); 
  }
  @font-face {
  font-family: 'Blogger Sans';
    src: local('Blogger Sans'),
      local('BloggerSans-Bold'),
      url('./site/ui/theme/fonts/BloggerSans-Bold.woff2')
        format('woff2');
  }
 `

export const colors: any = {
    colorDark: '#0F2B3D',
    white: '#FFFFFF',
    darkBlue: '#0A4759',
    whiteBlue: '#3BB3C4',
    dark: '#0F2B3D',
    gray: '#DDDDDD',
    black: '#000000',
    beige: '#F2F2F2',
    darkBeige: '#e6e6e6',
  width: '1440px',

}

export const fontFamily = {
  text: 'Proxima Nova',
  title: 'Blogger Sans',
}

export const tabsRadius: TabsRadius = {
  left: '20px 0px 0px 20px',
  right: '0px 20px 20px 0px'
}

export const border: Border = {
  s: '1px solid'
}





