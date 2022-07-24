import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";

// Get all products
export const getProducts = async (categoryId) => {
  try {
    const collectionRef = categoryId
      ? query(collection(firestoreDb, "products"), where("category", "==", categoryId))
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

// Get all categories
export const getCategories = async () => {
  try {
    const response = await getDocs(collection(firestoreDb, "categories"));
    const categories = response.docs.map((cat) => {
      return { id: cat.id, ...cat.data() };
    });
    return categories;
  } catch (error) {
    console.log(error);
  }
};
