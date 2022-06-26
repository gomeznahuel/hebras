import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import Loader from "../../services/Loader";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import ItemDetail from "../ItemDetail/ItemDetail";
import "react-toastify/dist/ReactToastify.css";

// Custom ID for Toast
const customId = "custom-id-yes";

// ItemListContainer component
const ItemDetailContainer = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  // Notify user when getProduct() is wrong.
  const notify = (message) =>
    toast.error(message, {
      toastId: customId,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: "3000",
    });

  // Get product from API
  useEffect(() => {
    setTimeout(() => {
      const getItem = async () => {
        try {
          const response = await fetch("/data/mock.json");
          const data = await response.json();
          setProduct(data[0]);
          setLoading(false);
        } catch (error) {
          notify(`Something went wrong: ${error}`);
        }
      };
      getItem();
    }, 2000);
  }, []);

  return (
    <div>
      {loading ? ( <Loader /> ) : (
        <>
          <Filter />
          <ItemDetail product={product} />
          <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </>
      )}
    </div>
  );
};

export default ItemDetailContainer;
