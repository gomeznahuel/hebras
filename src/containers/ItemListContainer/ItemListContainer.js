import { useEffect, useState } from "react";
import { Wrapper } from "./ItemListContainer.elements";
import Filter from "../../components/Filter/Filter";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../services/Loader";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import ItemCount from "../ItemCount/ItemCount";

// Custom ID for Toast
const customId = "custom-id-yes";

// ItemListContainer component
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // onAdd function for ItemCount
  // const onAdd = (count) => {
  //   toast.success(`Added ${count} matcha to cart!`, {
  //     position: "top-right",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeButton: false,
  //     toastId: customId,
  //   });
  // };

  // Notify user when getProducts() is wrong.
  const notify = (message) =>
    toast.error(message, {
      toastId: customId,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: "3000",
    });

  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        notify(`Something went wrong: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Wrapper>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Filter />
            <ItemList products={products} />
          </>
        )}
      </Wrapper>

      <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
      {/* <ItemCount stock={5} initialCount={1} onAdd={onAdd} /> */}
    </>
  );
};

export default ItemListContainer;
