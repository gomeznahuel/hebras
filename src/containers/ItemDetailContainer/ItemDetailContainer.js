import { useEffect, useState } from "react";
import Loader from "../../services/Loader";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

// Custom ID for Toast
const customId = "custom-id-yes";

// ItemListContainer component
const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  // Notify user when getProduct() is wrong.
  const notify = (message) =>
    toast.error(message, {
      toastId: customId,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: "3000",
    });

  const { productId } = useParams();

  // Get only one product from API
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`); 
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        notify(error.message);
      }
    };
    getProduct();
  }, [productId]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ItemDetail product={product} />
          <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;