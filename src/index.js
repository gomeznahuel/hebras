import ReactDOM from "react-dom/client";
import { GlobalStyle, theme } from "./stylesheet";
import { StrictMode } from "react";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <GlobalStyle />
      <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
      <App />
    </StrictMode>
  </ThemeProvider>
);
