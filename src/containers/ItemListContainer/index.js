import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import ItemList from "../../components/ItemList";
import Filter from "../../common/Filter";

// Loader
import Loader from "../../services/Loader";

// Toastify
import { Wrapper } from "./ItemListContainer.styles";
import { ToastContainer, toast } from "react-toastify";
import { Layout } from "../../Layout/Layout";
import { getCategories, getProducts } from "../../helpers/GetProducts";
import "react-toastify/dist/ReactToastify.css";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  // Notify user when getProducts() is wrong.
  const notify = (message) =>
    toast.error(message, {
      toastId: customId,
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: "3000",
    });

  // Custom ID for Toast
  const customId = "custom-id-yes";

  const { categoryId } = useParams();

  // Get products from Firebase

  useEffect(() => {
    setLoading(true);
    getProducts(categoryId)
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        notify(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]); // eslint-disable-line

  // Get categories from Firebase
  useEffect(() => {
    setLoading(true);
    getCategories()
      .then((categories) => {
        setCategories(categories);
      })
      .catch((error) => {
        notify(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []); 

  return (
    <Layout>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Filter categories={categories} />
          <Wrapper>
            <ItemList products={products} />
          </Wrapper>
          <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </>
      )}
    </Layout>
  );
};

export default ItemListContainer;
