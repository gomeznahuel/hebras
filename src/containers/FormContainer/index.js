import { useContext, useEffect, useState } from "react";
import { GenerateOrder, SaveOrder} from "../../utils";
import { NavLink } from "react-router-dom";
import { Title, Order, BackToShop } from "./style";
import { CartContext } from "../../context/cart/CartContext";
import { Layout } from "../../Layout/Layout";
import { Form } from "../../components/Form";
import Button from "../../common/Button";
import { Loader } from "../../helpers";
import { CopyOrder } from "../../components/CopyToClipboard";

export const FormContainer = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [isLoading, setIsLoading] = useState(false);
  const [idGenerated, setIdGenerated] = useState(null);
  const [isEmpty, setIsEmpty] = useState(false);
  const [buyer, setBuyer] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    confirmEmail: "",
  });


  const confirmOrder = async () => {
    setIsLoading(true);
    const order = GenerateOrder(buyer, cart, totalPrice());
    SaveOrder(cart, order, setIdGenerated, setIsEmpty);
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
      {(!isLoading && idGenerated === null) || isEmpty ? (
        <Form handleChange={handleChange} buyer={buyer} handleSubmitt={handleSubmitt} confirmOrder={confirmOrder} cart={cart} />
      ) : isLoading && idGenerated === null ? (
        <Loader />
      ) : (
        <Layout>
          <Order>
            <Title>¡Su pedido ha sido generado con éxito!</Title>
            <CopyOrder toCopy={idGenerated} />
          </Order>
          <BackToShop>
            <NavLink to="/products">
              <Button textButton="Volver a la tienda" />
            </NavLink>
          </BackToShop>
        </Layout>
      )}
    </>
  )};