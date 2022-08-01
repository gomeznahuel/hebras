import { BsCart3 } from "react-icons/bs";
import { Container } from "./style";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";

const CartWidget = () => {
  const { showTotalProducts } = useContext(CartContext);
  return (
    <Container>
      <NavLink to="/cart">
        <BsCart3 size={30} /> <span>{showTotalProducts()}</span>
      </NavLink>
    </Container>
  );
};

export default CartWidget;
