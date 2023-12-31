import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;  
  box-sizing: border-box;
}

:focus {
  outline: 0;
}

body {
  background: ${(props) => props.theme['base-background']};
  margin: 0 auto;
 -webkit-font-smoothing: antialiased;
 font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 130%;
  color: ${(props) => props.theme['base-text']};
}


input, button {
  border-radius: 6px;

}

`;
