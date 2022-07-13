import { useEffect, useState } from "react";
import Loader from "../../services/Loader";
import { doc, getDoc } from "firebase/firestore";
import { firestoreDb } from "../../firebase/config";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import ItemDetail from "../../components/ItemDetail";
import "react-toastify/dist/ReactToastify.css";

// useParams hook
import { useParams } from "react-router-dom";

// Custom ID for Toast
const customId = "custom-id-yes";

// ItemListContainer component
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
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
        } else {
          console.log("No such document!");
        }
        setIsLoading(false);
      } catch (error) {
        notify(error.message);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ItemDetail product={product} />
          <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </>
      )}
    </>
  );
};

export default ItemDetailContainer;
