import { useEffect, useState } from "react";
import Loader from "../../helpers/Loader";
import { doc, getDoc } from "firebase/firestore";
import { firestoreDb } from "../../firebase/config";
import { ProductNotFound } from "../../components/NotFound/ProductNotFound";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import ItemDetail from "../../components/ItemDetail";
import "react-toastify/dist/ReactToastify.css";

// useParams hook
import { useParams } from "react-router-dom";
import { Layout } from "../../Layout/Layout";

// Custom ID for Toast
const customId = "custom-id-yes";

// ItemListContainer component
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [isProductAvailable, setIsProductAvailable] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Notify user when getProduct() is wrong.
  const notify = (message) =>
    toast.error(message, {
      toastId: customId,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: "3000",
    });

  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const docRef = doc(firestoreDb, "products", productId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const productDetail = { id: docSnap.id, ...docSnap.data() };
          setProduct(productDetail);
          setIsProductAvailable(true);
        } else {
          // console.log("No such document!");
          // notify("Product not found!");
          setIsProductAvailable(false);
        }
        setIsLoading(false);
      } catch (error) {
        notify(error.message);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {/* <ItemDetail product={product} /> */}
          {isProductAvailable ? (
            <ItemDetail product={product} />
          ) : (
            <ProductNotFound />
          )}
          <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </>
      )}
    </Layout>
  );
};

export default ItemDetailContainer;
