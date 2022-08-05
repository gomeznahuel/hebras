import { useEffect, useState } from "react";
import Loader from "../../helpers/Loader";
import { getProduct } from "../../services/GetProduct";
import { notifyError } from "../../helpers/Notify";
import {ItemDetail, ProductNotFound } from '../../components';
import { Layout } from "../../Layout/Layout";

// useParams hook
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isProductAvailable, setIsProductAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId)
      .then((product) => {
        product
          ? setProduct(product) || setIsProductAvailable(true)
          : setIsProductAvailable(false);
        setIsLoading(false);
      })
      .catch((error) => notifyError(error.message));
  }, [productId]);

  return (
    <Layout>
      {isLoading ? <Loader /> : <> { isProductAvailable ? <ItemDetail product={product} /> : <ProductNotFound text="Producto no encontrado" />} </> }
    </Layout>
  );
};

export default ItemDetailContainer;
