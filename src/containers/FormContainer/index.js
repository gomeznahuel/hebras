import { CartContext } from "../../context/CartContext";
import { useContext, useEffect, useState } from "react";
import { Layout } from "../../Layout/Layout";
import { Form } from "../../components/Form/Form";
import { useFormik } from "formik";
import { validations } from "../../utils/validations";
import GeneratedOrder from "../../utils/GenerateOrder";
import Loader from "../../helpers/Loader";
import SaveOrder from "../../utils/SaveOrder";

export const FormContainer = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [idGenerated, setIdGenerated] = useState(null);
  const { cart, clearCart, totalPrice } = useContext(CartContext);

  // Formik with the buyer object
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
    },
    validate: validations,
    onSubmit: (values) => {
      setIsLoading(true);
      confirmOrder(values);
      formik.resetForm();
    },
  });

    const confirmOrder = (values) => {
    const order = GeneratedOrder(values, cart, totalPrice());
    SaveOrder(cart, order, setIdGenerated);
    clearCart();
  };

  useEffect(() => {
    if (idGenerated) {
      setIsLoading(false);
    }
  }, [idGenerated]);

  return (
    <>
      {!isLoading && idGenerated === null ? (
        <Form formik={formik} />
      ) : isLoading && idGenerated === null ? (
        <Layout><Loader /></Layout>        
      ) : ( 
        <Layout><h1> Su pedido ha sido generado con éxito. Su número de pedido es: {idGenerated}</h1></Layout>
      )}
    </> 
  );
}





