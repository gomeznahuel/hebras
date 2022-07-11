import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CartContainer } from "./Cart.style";
import Button from "../../common/Button";

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useContext(CartContext);

  return (
    <CartContainer>
      <span>Cart</span> 
      <Button textButton={'Clear Cart'} handleClick={clearCart} />
      {cart.length > 0 ? (
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} />
              {item.title} - {item.quantity}
              <button onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
          <p>TOTAL PRICE: {totalPrice()}</p>
        </ul>
      ) : (
        <>
          <h1>Cart is empty</h1>
          <NavLink to="/products">
            <Button textButton="Continue shopping" />
          </NavLink>
        </>
      )}
    </CartContainer>
  );
};

export default Cart;
