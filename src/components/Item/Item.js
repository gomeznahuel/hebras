import { ItemContainer, ItemIMG } from "./Item.elements";
import Button from "../Button/Button";

const Item = ({ product }) => {
  const { title, price, image, description } = product;
  
  return (
    <ItemContainer>
      <h1>{title}</h1>
      <ItemIMG src={image} alt={title} />
      <p>{description}</p>
      <p>{price}</p>
      <Button textButton="Add to cart" />
    </ItemContainer>
  );
};

export default Item;
