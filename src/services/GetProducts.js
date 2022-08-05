import { getDocs, collection, query, where } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { notifyError } from "../helpers/Notify";

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
    notifyError(error);
  }
};