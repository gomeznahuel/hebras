import { CartContext } from "../../context/CartContext";
import GeneratedOrder from "../../utils/GenerateOrder";
import SaveOrder from "../../utils/SaveOrder";
import { useContext, useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Form } from "../../components/Form/Form";

export const FormContainer = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const confirmOrder = async () => {
    const order = GeneratedOrder(buyer, cart, totalPrice());
    SaveOrder(cart, order);
    clearCart();
  };

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    confirmOrder();
  };

  return (
    <Layout>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} buyer={buyer} confirmOrder={confirmOrder} />
    </Layout>
  );
};
