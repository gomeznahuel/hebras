import { useEffect, useState } from "react";
import Loader from "../../helpers/Loader";
import { getProduct } from "../../services/GetProduct";
import { ProductNotFound } from "../../components/NotFound/ProductNotFound";
import { notifyError } from "../../helpers/Notify";
import ItemDetail from "../../components/ItemDetail";

// useParams hook
import { useParams } from "react-router-dom";
import { Layout } from "../../Layout/Layout";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isProductAvailable, setIsProductAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId)
      .then((product) => {
        if (product) {
          setProduct(product);
          setIsProductAvailable(true);
        } else {
          setIsProductAvailable(false);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        notifyError(error.message);
      });
  }, [productId]);

  return (
    <Layout>
      {isLoading ? <Loader /> : (
        <>
          {isProductAvailable ? <ItemDetail product={product} /> : <ProductNotFound />}
        </>
      )}
    </Layout>
  );
};

export default ItemDetailContainer;
