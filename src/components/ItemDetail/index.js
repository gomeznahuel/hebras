import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Currency } from "../../helpers/Currency";
import { Wrapper, IDContainer, ItemDetailTitle, ItemDetailSpan } from "./style";
import Image from '../Image';

import Button from "../../common/Button";
import ItemCount from "../ItemCount";

import { CartContext } from "../../context/cart/CartContext";
import { notifySuccess } from "../../helpers/Notify";

const ItemDetail = ({ product }) => {
  const [showCount, setShowCount] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { title, price, description, image, category } = product;

  // Context
  const { addItem } = useContext(CartContext);

  // This function is called when the user clicks the "Add to cart" button.
  const onAdd = (qty) => {
    notifySuccess(`Added ${qty} "${title}" to cart!`);
    setShowCount(false);
    setQuantity(qty);
    addItem(product, qty);
  };

  // useNavigate is used to navigate to the cart page.
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Image src={image} title={title} maxWidth="30%" />

      <IDContainer>
          <ItemDetailTitle>{title.toUpperCase()}</ItemDetailTitle>
          <ItemDetailSpan>{Currency(price)}</ItemDetailSpan>
          <ItemDetailSpan>{description}</ItemDetailSpan>
          <ItemDetailSpan>Category: {category}</ItemDetailSpan>
        {showCount ? (
          <ItemCount stock={product.stock} initialCount={quantity} onAdd={onAdd} />
        ) : (
          <Button type="button" handleClick={() => navigate("/cart")} textButton="Finish shopping" />
        )}
      </IDContainer>
    </Wrapper>
  );
};

export default ItemDetail;
