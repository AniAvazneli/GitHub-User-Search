import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    /* background-color: ${({isWhite}) => isWhite ? "#f6f8ff" : "#141D2F"}; */
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
`;
 
export default GlobalStyle;