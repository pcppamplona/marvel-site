// GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';
import MarvelFont from '../assets/fonts/MarvelRegular-Dj83.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Marvel';
    src: url(${MarvelFont}) format('truetype');
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #000;
    font-family: Arial, sans-serif, 'Marvel'; 
  }
`;


export default GlobalStyle;
