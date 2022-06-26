import { ItemCountContainer, TextContainer, CountContainer, ItemCountButton, AddToCartButton, Count } from "./ItemCount.elements.js";
import useCounter from "../../hooks/useCounter.js";

const ItemCount = ({ stock, initialCount, onAdd }) => {

  const { count, counter } = useCounter(initialCount);

  return (
    <ItemCountContainer>
      <TextContainer>
        <Count>Matcha</Count>
      </TextContainer>
      <CountContainer>
        <ItemCountButton onClick={() => counter.subtract()} disabled={count < initialCount}>-</ItemCountButton>
        <Count>{count}</Count>
        <ItemCountButton onClick={() => counter.add()} disabled={count === stock}>+</ItemCountButton>
      </CountContainer>
      <AddToCartButton onClick={() => onAdd(count)} disabled={count < initialCount}>
        Add to cart
      </AddToCartButton>
    </ItemCountContainer>
  );
};

export default ItemCount;
