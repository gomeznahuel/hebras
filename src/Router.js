import { Route, Routes } from "react-router-dom";
import { Main } from "./stylesheet/App.styles";
import { Form } from "./components/Form";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import ErrorNotFound from "./components/NotFound/ErrorNotFound";
import Cart from "./containers/CartList";
import FaqPage from "./pages/faq";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";

export const AppRouter = () => {
  return (
    <Main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ItemListContainer />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:productId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Form />} />
        <Route path="*" element={<ErrorNotFound />} />
      </Routes>
    </Main>
  );
};
