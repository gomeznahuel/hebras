import { Wrapper, ImageContainer, IDContainer } from "./ItemDetail.elements";
import { toast } from "react-toastify";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ product }) => {
  const { title, price, description, image, category } = product;

  const onAdd = (count) => {
    toast.success(`Added ${count} "${title}" to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeButton: false,
      toastId: customId,
    });
  };

  // Custom ID for Toast
  const customId = "custom-id-yes";

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

      <ItemCount stock={5} initialCount={1} onAdd={onAdd} />

      </IDContainer>
    </Wrapper>
  );
};

export default ItemDetail;
