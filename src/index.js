import { GlobalStyle } from "./stylesheet/GlobalStyle";
import { StrictMode } from "react";
import App from "./App";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
);
