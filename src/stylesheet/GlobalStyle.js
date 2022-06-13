import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

@font-face {
  font-family: "Merriweather";
  src: url("/fonts/merriweather/Merriweather-Regular.ttf") format("truetype");
}

@font-face {
  font-family: "Varela Round";
  src: url("/fonts/varelaround/VarelaRound-Regular.ttf") format("truetype");
}

html {
  font-size: 62.5%;
}

body {
  overflow-x: hidden;
}

@media (max-width: 768px) {
  html {
    font-size: 56.25%;
  }
}

:root {
  --font-family-title: "Merriweather";
  --font-family-body: "Varela Round";
  --background-color: #5E693E;
  --base-color: #8c9c5c;
  --text-color: #242222;
  --text-color-hover: #D0E889;
  --text-color-background: #5E693E;
}
`;
