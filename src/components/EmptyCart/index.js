import { NavLink } from "react-router-dom";
import Button from "../../common/Button";
import { CartEmptyContainer, CartEmpty } from "./EmptyCart.style";

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
