import { doc, getDoc } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";

export const getProduct = async (productId) => {
  try {
    const docRef = doc(firestoreDb, "products", productId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const productDetail = { id: docSnap.id, ...docSnap.data() };
      return productDetail;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};
