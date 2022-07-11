import { ItemListWrapper } from "./ItemList.styles";
import Item from "../Item";

const ItemList = ({ products }) => {
  return (
    <ItemListWrapper>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </ItemListWrapper>
  );
};

export default ItemList;
