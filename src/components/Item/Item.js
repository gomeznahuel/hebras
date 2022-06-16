import { ItemIMG } from "./Item.elements";
import Button from "../Button/Button";

const Item = ({ item }) => {
  return (
    <div className="item">
      <h1>{item.title}</h1>
      <ItemIMG src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>{item.price}</p>
      <Button textButton="Add to cart" />
    </div>
  );
};

export default Item;
