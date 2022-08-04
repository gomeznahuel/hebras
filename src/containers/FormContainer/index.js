import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Form } from "../../components/Form/Form";
import GeneratedOrder from "../../utils/GenerateOrder";
import Loader from "../../helpers/Loader";
import SaveOrder from "../../utils/SaveOrder";

export const FormContainer = () => {

  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [idGenerated, setIdGenerated] = useState(null);
  const [buyer, setBuyer] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const confirmOrder = async () => { // ex confirmOrder

    setIsLoading(true);
    const order = GeneratedOrder(buyer, cart, totalPrice());
    SaveOrder(cart, order, setIdGenerated);
    clearCart();
  };

  const handleChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmitt = async () => {
    await confirmOrder();
  };

  useEffect(() => {
    if (idGenerated) {
      setIsLoading(false);
    }
  }, [idGenerated]);

  return (
    <>
      {!isLoading && idGenerated === null ? (
        <Form handleChange={handleChange} buyer={buyer} handleSubmitt={handleSubmitt} confirmOrder={confirmOrder} />
      ) : isLoading && idGenerated === null ? (
        <Layout><Loader /></Layout>        
      ) : ( 
        <Layout><h1> Su pedido ha sido generado con éxito. Su número de pedido es: {idGenerated}</h1></Layout>
      )}
    </> 
  );
}





