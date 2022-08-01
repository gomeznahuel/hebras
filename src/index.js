import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./stylesheet/GlobalStyle";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./stylesheet/theme";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <GlobalStyle />
      <App />
    </StrictMode>
  </ThemeProvider>
);
