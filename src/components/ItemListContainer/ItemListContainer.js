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

  return (
    <Wrapper>
      {/* {loading ? <div>Loading...</div> : <ItemList items={items} />} */}
      {greeting}
    </Wrapper>
  );
};

export default ItemListContainer;
