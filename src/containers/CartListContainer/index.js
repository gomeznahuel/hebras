import { useContext } from "react";
import { CartContext } from '../../context';
import { CartList, EmptyCart} from '../../components';

const CartListContainer = () => {
  const { cart } = useContext(CartContext);
  return <main>{cart.length > 0 ? <CartList /> : <EmptyCart />}</main>;
};

export default CartListContainer;
