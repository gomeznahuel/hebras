import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import ErrorNotFound from "./components/ErrorNotFound";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Cart from "./containers/Cart";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/products" element={<ItemListContainer />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:productId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};
