import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore";
import { firestoreDb } from "../firebase/config";

const SaveOrder = (cart, orden) => {
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

        if (outOfStock.length === 0) {
          addDoc(collection(firestoreDb, "orders"), orden)
            .then(({ id }) => {
              batch.commit().then(() => {
                alert(`Orden guardada con id: ${id}`);
              });
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          let mensaje = "";
          for (const producto of outOfStock) {
            mensaje += `${producto.title}`;
          }
          console.log(
            `No hay stock suficiente para los siguientes productos: ${mensaje}`
          );
        }
      }
    );
  });
};

export default SaveOrder;
