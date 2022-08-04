import { useContext } from "react";
import { CartContext } from "../../context/cart/CartContext";
import { EmptyCart } from "../../components/EmptyCart";
import { CartList } from "../../components/CartList";

const CartListContainer = () => {
  const { cart } = useContext(CartContext);

  return <main>{cart.length > 0 ? <CartList /> : <EmptyCart />}</main>;
};

export default CartListContainer;
