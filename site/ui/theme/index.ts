import fontSize from './FontSize'
import { colors } from './Colors'
import borderRadius from './BorderRadius'
import lineHeight from './LineHeight'
import { injectGlobal } from 'emotion'
import { fontFamily } from './FontFamily'
import border from './Border'


export const theme = {
  fontSize,
  colors,
  fontFamily,
  borderRadius,
  lineHeight,
  border,
}

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
  img {
        object-fit: cover;
        width: 100%;
        height: 100%;
      }`
