import { getDocs, collection } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { notifyError } from "../helpers/Notify";

export const getCategories = async () => {
  try {
    const response = await getDocs(collection(firestoreDb, "categories"));
    const categories = response.docs.map((cat) => {
      return { id: cat.id, ...cat.data() };
    });
    return categories;
  } catch (error) {
    notifyError(error);
  }
};
