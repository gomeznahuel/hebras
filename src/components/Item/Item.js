import { ItemContainer, ItemIMG } from "./Item.elements";
import Button from "../../common/Button/Button";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const { title, price, image, description } = product;
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <ItemContainer>
      <h1>{title}</h1>
      <ItemIMG src={image} alt={title} />
      <p>{description}</p>
      <p>${price}</p>
      <Button textButton="View details" handleClick={handleDetail} />
    </ItemContainer>
  );
};

export default Item;
