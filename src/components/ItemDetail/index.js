import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, IDContainer, ItemDetailTitle, ItemDetailSpan, ItemDetailSize, ItemDetailSizeSpan } from "./ItemDetail.styles";
import { Currency } from "../../helpers/Currency";
import Image from '../Image';

import Button from "../../common/Button";
import ItemCount from "../ItemCount";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  const [showCount, setShowCount] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const { title, price, description, image, category, size } = product;

  // Context
  const { addItem } = useContext(CartContext);

  // This function is called when the user clicks the "Add to cart" button.
  const onAdd = (qty) => {
    toast.success(`Added ${qty} "${title}" to cart!`, {
      position: "bottom-left",
      autoClose: 3000,
      hideProgressBar: false,
      closeButton: false,
      toastId: customId,
    });
    setShowCount(false);
    setQuantity(qty);
    addItem(product, qty);
  };

  // Custom ID for Toast
  const customId = "custom-id-yes";

  // useNavigate is used to navigate to the cart page.
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Image src={image} title={title} maxWidth="30%" />

      <IDContainer>
          <ItemDetailTitle>{title.toUpperCase()}</ItemDetailTitle>
          <ItemDetailSpan>{Currency(price)}</ItemDetailSpan>
          <ItemDetailSpan>{description}</ItemDetailSpan>
          <ItemDetailSize>{size.map((t, index) => {return <ItemDetailSizeSpan key={index}>{t}</ItemDetailSizeSpan>})}</ItemDetailSize>
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
