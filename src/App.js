import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./Router";
import Header from "./common/Header";
import Footer from "./common/Footer";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <AppRouter />
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
