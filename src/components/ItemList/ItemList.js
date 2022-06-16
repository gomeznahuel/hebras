import { ItemListContainer } from "./ItemList.elements";
import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <ItemListContainer>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ItemListContainer>
  );
};

export default ItemList;
