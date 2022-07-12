import { ItemContainer, ItemIMG } from "./Item.styles";
import Button from "../../common/Button";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const { title, price, image } = product;
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <ItemContainer>
      <h4>{title}</h4>
      <ItemIMG src={image} alt={title} />
      <p>${price}</p>
      <Button textButton="View details" handleClick={handleDetail} />
    </ItemContainer>
  );
};

export default Item;
