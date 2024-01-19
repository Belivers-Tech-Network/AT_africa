import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
--primary-color:#32302f
}

*,*::before,*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
  font-size: 62.5%;
  text-size-adjust: 100%;
  text-wrap: pretty;
}

body{
  font-family: 'Poppins', sans-serif;
  background-color: #fcfcfc;
  color: var(--primary-color);
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.4;
}

ul{
  list-style: none;
}

li{
  list-style: none;
}

a{
  color: inherit;
  text-decoration: none;
}
`;

export default GlobalStyles;
