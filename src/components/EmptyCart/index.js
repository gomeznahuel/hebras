import { NavLink } from "react-router-dom";
import { CartEmptyContainer, CartEmpty } from "./EmptyCart.style";
import Button from "../../common/Button";

export const EmptyCart = () => {
  return (
    <CartEmptyContainer>
      <CartEmpty>Cart is empty!</CartEmpty>
      <NavLink to="/products">
        <Button textButton="Continue shopping" margin="0 auto" />
      </NavLink>
    </CartEmptyContainer>
  );
};
