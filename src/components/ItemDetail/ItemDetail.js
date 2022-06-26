import { Wrapper, ImageContainer, IDContainer } from "./ItemDetail.elements";

const ItemDetail = ({ product }) => {
  const { title, price, description, image, stock } = product;
  return (
    <Wrapper>
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>

      <IDContainer>
        <div>
          <h1>{title}</h1>
          <p>{price}</p>
          <p>{description}</p>
          <p>Stock: {stock}</p>
        </div>

        <div>
          <button>Add to cart</button>
        </div>
      </IDContainer>
    </Wrapper>
  );
};

export default ItemDetail;
