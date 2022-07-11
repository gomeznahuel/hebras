import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(CartContext);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - {item.quantity}
            <img src={item.image} alt={item.title} />
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}

        <button onClick={clearCart}>Clear cart</button>
      </ul>
    </div>
  );
};

export default Cart;
