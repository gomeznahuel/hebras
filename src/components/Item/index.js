import { ItemContainer, ItemTitle, ItemPrice } from "./Item.styles";
import { useNavigate } from "react-router-dom";
import { Currency } from "../../helpers/Currency";
import Button from "../../common/Button";
import Image from "../Image";

const Item = ({ product }) => {
  const { title, price, image } = product;
  const navigate = useNavigate();

  const handleDetail = () => {
    navigate(`/item/${product.id}`);
  };

  return (
    <ItemContainer>
      <Image src={image} title={title} maxWidth="100%" />
      <ItemTitle>{title.toUpperCase()}</ItemTitle>
      <ItemPrice>{Currency(price)}</ItemPrice>
      <Button textButton="View details" handleClick={handleDetail} />
    </ItemContainer>
  );
};

export default Item;
