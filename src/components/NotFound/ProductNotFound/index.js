import { NavLink } from "react-router-dom";
import Button from "../../../common/Button";
import { ProductNotFoundContainer } from "./index.style";

export const ProductNotFound = () => {
  return (
    <ProductNotFoundContainer>
      <h1>Product not found!</h1>
      <NavLink to="/products">
        <Button textButton="Back to products" />
      </NavLink>
    </ProductNotFoundContainer>
  );
};
