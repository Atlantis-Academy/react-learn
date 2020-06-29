import { injectGlobal } from 'emotion'


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


const theme = {
  colors: {
    colorDark: '#0F2B3D',
    white: '#FFFFFF',
    darkBlue: '#0A4759',
    whiteBlue: '#3BB3C4',
    dark: '#0F2B3D',
    gray: '#DDDDDD',
    black: '#000000',
    beige: '#F2F2F2',


  },
  width: '1440px',
  fontFamilyText: 'Proxima Nova',
  fontFamilyTitle: 'Blogger Sans',
  fontSize: [16],
  tabsRadius: {
    left: '20px 0px 0px 20px',
    right: '0px 20px 20px 0px'
  }
}

export default theme;
