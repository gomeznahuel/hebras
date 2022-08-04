import { AppRouter } from "./router";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./helpers/Providers";
import CartProvider from "./context/cart/CartProvider";
import NavbarProvider from "./context/navbar/NavbarContext";
import Header from "./common/Header";
import Footer from "./common/Footer";

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
