import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";
import { notifyError } from "../helpers/Notify";

const SaveOrder = (cart, orden, setIdGenerated, setIsEmpty) => {
  const batch = writeBatch(firestoreDb);
  const outOfStock = [];

  cart.forEach((productoEnCart) => {
    getDoc(doc(firestoreDb, "products", productoEnCart.id)).then(
      async (documentSnapshot) => {
        const producto = {
          ...documentSnapshot.data(),
          id: documentSnapshot.id,
        };

        if (producto.stock >= productoEnCart.quantity) {
          batch.update(doc(firestoreDb, "products", producto.id), {
            stock: producto.stock - productoEnCart.quantity,
          });
        } else {
          outOfStock.push(producto);
        }
      }
    );
  });

  // If cart is empty, return log with error
  if (cart.length === 0) {
    notifyError("El carrito está vacío");
    setIsEmpty(true);
    return null;
  } else if (outOfStock.length === 0) {
    // From here we can save the order
    addDoc(collection(firestoreDb, "orders"), orden)
      .then(({ id }) => {
        batch.commit().then(() => {
          setIdGenerated(id); //
        });
      })
      .catch((err) => {
        notifyError(err.message);
      });
  } else {
    let mensaje = "";
    for (const producto of outOfStock) {
      mensaje += `${producto.title}`;
    }
    notifyError(`${mensaje} no hay suficiente stock`);
  }
};

export default SaveOrder;
