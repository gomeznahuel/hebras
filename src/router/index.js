import { Route, Routes } from "react-router-dom";
import ErrorNotFound from "../components/NotFound/ErrorNotFound";
import {ItemListContainer, ItemDetailContainer, FormContainer, CartListContainer } from '../containers'; 

import { HomePage, ContactPage, FaqPage} from '../pages'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/products" element={<ItemListContainer />} />
      <Route path="/faq" element={<FaqPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/category/:categoryId" element={<ItemListContainer />} />
      <Route path="/item/:productId" element={<ItemDetailContainer />} />
      <Route path="/cart" element={<CartListContainer />} />
      <Route path="/checkout" element={<FormContainer />} />
      <Route path="*" element={<ErrorNotFound />} />
    </Routes>
  );
};
