import { useState } from "react";
import { ItemCountContainer, TextContainer, CountContainer, ItemCountButton, AddToCartButton, Count } from "./ItemCount.elements.js";

const ItemCount = ({ stock, initialCount, onAdd }) => {
  const [count, setCount] = useState(initialCount);

  class Counter {
    constructor(count) {
      this.count = count;
    }

    add() {
      setCount(this.count + 1);
    }

    subtract() {
      setCount(this.count - 1);
    }
  }

  const counter = new Counter(count);

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
