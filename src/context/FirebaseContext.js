import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { useState, useEffect, createContext } from "react";

export const FirebaseContext = createContext();

const FirebaseProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getProducts = async (categoryId) => {
      try {
        const collectionRef = categoryId
          ? query(
              collection(firestoreDb, "products"),
              where("category", "==", categoryId)
            )
          : collection(firestoreDb, "products");

        const response = await getDocs(collectionRef);
        const products = response.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        return products;
      } catch (error) {
        console.log(error);
      }
    };
    getProducts()
      .then((products) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [setProducts]);

  return (
    <FirebaseContext.Provider value={{ products, loading }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
