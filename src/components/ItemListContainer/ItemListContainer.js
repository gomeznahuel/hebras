import { useEffect, useState } from "react";
import { Wrapper } from "./ItemListContainer.elements";
import Filter from "../Filter/Filter";
import ItemList from "../ItemList/ItemList";
import Loader from "../../services/Loader";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom ID for Toast
const customId = "custom-id-yes";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Notify user when getProducts() is wrong.
  const notify = (message) =>
    toast.error(message, {
      toastId: customId,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: "3000",
    });

  useEffect(() => {
    setTimeout(() => {
      const getProducts = async () => {
        try {
          const response = await fetch("/data/mock.json");
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          notify(`Something went wrong: ${error}`);
        } finally {
          setLoading(false);
        }
      };
      getProducts();
    }, 2000);
  }, []);

  return (
    <>
      <Wrapper>
        {loading && <Loader />}
        {!loading && ( <><Filter /><ItemList products={products} /></>)}
      </Wrapper>
      
      <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
    </>
  );
};

export default ItemListContainer;
