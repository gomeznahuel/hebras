import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Wrapper, ImageContainer, IDContainer,} from "./ItemDetail.elements";
import Button from "../../common/Button";
import ItemCount from "../ItemCount";

import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ product }) => {
  // const [showCount, setShowCount] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const { title, price, description, image, category } = product;

  // Context
  const { addItem } = useContext(CartContext);

  // I added the product stock because the API doesn't have it.
  product.stock = 10;

  // This function is called when the user clicks the "Add to cart" button.
  const onAdd = (qty) => {
    toast.success(`Added ${qty} "${title}" to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeButton: false,
      toastId: customId,
    });
    // setShowCount(false);
    setQuantity(qty);
    addItem(product, qty);
  };

  // Custom ID for Toast
  const customId = "custom-id-yes";

  const navigate = useNavigate();

  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>

      <IDContainer>
        <div>
          <h1>{title}</h1>
          <p>${price}</p>
          <p>{description}</p>
          <p>Category: {category}</p>
        </div>

        {/* {showCount ? ( <ItemCount stock={product.stock} initialCount={quantity} onAdd={onAdd} /> ) : ( <NavLink to="/cart">Go to /Cart</NavLink> )} */}
        {!quantity ? ( <ItemCount stock={product.stock} initialCount={quantity} onAdd={onAdd} />
        ) : (
          <Button type="button" handleClick={() => navigate("/cart")} textButton="Go to /Cart" width="20%" />
        )}
      </IDContainer>
    </Wrapper>
  );
};

export default ItemDetail;
