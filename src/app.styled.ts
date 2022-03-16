import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: inherit;
}
html {
  font-size: 16px;
}
body {
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  background: url(/assets/bg.svg) center 120% / auto no-repeat, linear-gradient(rgb(249, 255, 255) 0%, rgb(56, 200, 230) 100%);
  background-size: auto;
}
#root {
  max-width: 960px;
  width: 100%;
  padding: 0 1rem;
}
`;
