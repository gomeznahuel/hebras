import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./router";
import { Providers } from "./helpers/Providers";
import { NavbarProvider, CartProvider } from "./context";
import { Header, Footer } from "./common";

function App() {
  return (
    <Providers providers={[<CartProvider />, <NavbarProvider />]}>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </Providers>
  );
}

export default App;
