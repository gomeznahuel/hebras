import { useEffect, useState } from "react";
import { Wrapper } from "./ItemListContainer.elements";
import Filter from "../../common/Filter/Filter";
import ItemList from "../../components/ItemList/ItemList";
import Loader from "../../services/Loader";

// Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// useParams hook
import { useParams } from "react-router-dom";

// Custom ID for Toast
const customId = "custom-id-yes";

// ItemListContainer component
const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  

  // Notify user when getProducts() is wrong.
  const notify = (message) =>
    toast.error(message, {
      toastId: customId,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: "3000",
    });
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/categories`)
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((error) => {
        notify(`Something went wrong: ${error}`);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products`)
      .then((response) => response.json())
      .then((data) => {
        if (categoryId) {
          setProducts(data.filter((product) => product.category === categoryId));
          setLoading(false);
        } else {
          setProducts(data);
          setLoading(false);
        }
      })
      .catch((error) => {
        notify(`Something went wrong: ${error}`);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);    

  return (
    <>
      <Wrapper>
        {loading ? ( <Loader /> ) : (
          <>
            <Filter categories={categories} />
            <ItemList products={products} />
          </>
        )}
      </Wrapper>

      <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
    </>
  );
};

export default ItemListContainer;
