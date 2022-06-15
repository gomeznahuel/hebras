import { useState } from "react";
import { ItemCountContainer, TextContainer, CountContainer, ItemCountButton, AddToCartButton, Count } from "./ItemCount.elements.js";

const ItemCount = ({ stock, initialCount, onAdd }) => {
  const [count, setCount] = useState(initialCount);

  class Counter {
    constructor(count) {
      this.count = count;
    }

    add() {
      if (this.count < stock) {
        this.count++;
        setCount(this.count);
      }
    }

    subtract() {
      if (this.count >= initialCount) {
        this.count--;
        setCount(this.count);
      }
    }
  }

  const counter = new Counter(count);

  return (
    <ItemCountContainer>
      <TextContainer>
        <Count>Matcha</Count>
      </TextContainer>
      <CountContainer>
        <ItemCountButton onClick={() => counter.subtract()}>-</ItemCountButton>
        <Count>{count}</Count>
        <ItemCountButton onClick={() => counter.add()}>+</ItemCountButton>
      </CountContainer>
      <AddToCartButton onClick={() => onAdd(count)} disabled={count === 0}>
        Add to cart
      </AddToCartButton>
    </ItemCountContainer>
  );
};

export default ItemCount;
