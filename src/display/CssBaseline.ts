import { createGlobalStyle } from "styled-components";

export const CssBaseline = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    height: 100vh;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
`;
