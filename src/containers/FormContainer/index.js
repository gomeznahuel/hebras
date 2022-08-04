import { CartContext } from "../../context/cart/CartContext";
import { useContext, useEffect, useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Form } from "../../components/Form";
import GeneratedOrder from "../../utils/GenerateOrder";
import Loader from "../../helpers/Loader";
import SaveOrder from "../../utils/SaveOrder";
import { Title, CopyContainer, Order, OrderID, BackToShop } from "./style";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Button from "../../common/Button";
import { NavLink } from "react-router-dom";
import { notifySuccess } from "../../helpers/Notify";

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
    // confirmEmail: "",
  });

  const confirmOrder = async () => {
    setIsLoading(true);
    const order = GeneratedOrder(buyer, cart, totalPrice());
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
        <Layout><Loader /></Layout>
      ) : (
        <Layout>
          <Order>
            <Title>¡Su pedido ha sido generado con éxito!</Title>

            <>
              {idGenerated && (
                <CopyContainer>
                  <OrderID>
                    {idGenerated}
                  </OrderID>
                  <CopyToClipboard text={idGenerated} onCopy={() => notifySuccess("Copiado al portapapeles")}>
                    <OrderID>
                      <Button textButton="Copiar al portapapeles" />
                    </OrderID>
                  </CopyToClipboard>
                </CopyContainer>
              )}
            </>
          </Order>
          <BackToShop>
            <NavLink to="/products">
              <Button textButton="Volver a la tienda" />
            </NavLink>
          </BackToShop>
        </Layout>
      )}
    </>
  );
}