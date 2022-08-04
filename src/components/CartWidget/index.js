import { BsCart3 } from "react-icons/bs";
import { Container } from "./style";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cart/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { cart, showTotalProducts } = useContext(CartContext);
  return (
    <Container>
      <NavLink to="/cart">
        <BsCart3 size={30} /> <span>{cart.length > 0 ? showTotalProducts() : null}</span>
      </NavLink>
    </Container>
  );
};

export default CartWidget;
