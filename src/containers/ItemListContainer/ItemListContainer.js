import { useEffect, useState } from "react";
import { Wrapper } from "./ItemListContainer.elements";
import axios from "axios";
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
  const [isLoading, setIsLoading] = useState(true);

  // Notify user when getProducts() is wrong.
  const notify = (message) =>
    toast.error(message, {
      toastId: customId,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: "3000",
    });

  const { categoryId } = useParams();

  // Get products from API
  useEffect(() => {
    setIsLoading(true);
    if (categoryId) {
      axios
        .get(`https://fakestoreapi.com/products/category/${categoryId}`)
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          notify(err.message);
          setIsLoading(false);
        });
    } else {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => {
          setProducts(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          notify(err.message);
          setIsLoading(false);
        });
    }
  }, [categoryId]);

  // Get categories from API
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        notify(err.message);
      });
  }, []);

  return (
    <>
      <Wrapper>
        {isLoading ? ( <Loader /> ) : (
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
