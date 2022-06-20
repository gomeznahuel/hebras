import ItemCount from "../ItemCount/ItemCount";
import { Wrapper } from "./ItemListContainer.elements";
// import { hebrasApi } from "../../data/api";
// import { useEffect, useState } from "react";
// import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  // const [items, setItems] = useState([]);
  // const [loading, setLoading] = useState(true);

  /*
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(hebrasApi);
      }, 1000);
    })
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  */

  const onAdd = (count) => {
    alert(`Added ${count} matcha to cart`);
  };

  return (
    <>
      <Wrapper>
        {/* {loading ? <div>Loading...</div> : <ItemList items={items} />} */}
        {greeting}
      </Wrapper>

      <ItemCount stock={5} initialCount={1} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
