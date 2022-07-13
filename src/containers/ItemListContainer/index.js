import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Components
import ItemList from "../../components/ItemList";
import Filter from "../../common/Filter";

// Firebase
import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../../firebase/config";

// Loader
import Loader from "../../services/Loader";

// Toastify
import { ToastContainer, toast } from "react-toastify";
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

  useEffect(() => {
    setLoading(true);
    const collectionRef = categoryId
      ? query(collection(firestoreDb, "products"), where("category", "==", categoryId))
      : collection(firestoreDb, "products");

    // Get all products
    getDocs(collectionRef)
      .then((response) => {
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setProducts(products);
      })
      .catch((error) => {
        notify(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

    // Get categories for filter
  useEffect(() => {
    getDocs(collection(firestoreDb, "categories")).then((response) => {
      const categories = response.docs.map((cat) => {
        return { id: cat.id, ...cat.data() };
      });
      setCategories(categories);
    });
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Filter categories={categories} />
          <ItemList products={products} />
          <ToastContainer style={{ fontSize: "1.2rem", fontWeight: "bold" }} />
        </>
      )}
    </>
  );
};

export default ItemListContainer;
