import { Route, Routes } from "react-router-dom";
import { FormContainer } from "../containers/FormContainer";
import ItemListContainer from "../containers/ItemListContainer";
import ItemDetailContainer from "../containers/ItemDetailContainer";
import ErrorNotFound from "../components/NotFound/ErrorNotFound";
import Cart from "../containers/CartListContainer";
import FaqPage from "../pages/faq";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ItemListContainer />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:productId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<FormContainer />} />
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};
