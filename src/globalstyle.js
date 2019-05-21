import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Notable');
    font-family: 'Roboto', sans-serif, Arial, Helvetica;
    font-size: 16px;
    font-weight : 400;
    /* LightGray - #555 */
    color : #555; 
    margin:0;
    padding:0;
      }
`

export default GlobalStyle;

