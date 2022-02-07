import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: "Jost", sans-serif;
}

html {
  scroll-behavior: smooth;
}

//Scroll Bar

::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  background: #aaa;
}
::-webkit-scrollbar-thumb {
  background: #666;
}
::-webkit-scrollbar-thumb:hover {
  background: #444;
}
`;

export default GlobalStyles;
