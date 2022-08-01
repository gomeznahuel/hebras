import { ItemCountContainer, CountContainer, Count } from "./style";
import useCounter from "../../hooks/useCounter.js";
import Button from "../../common/Button";

const ItemCount = ({ stock, initialCount, onAdd }) => {
  const { count, counter } = useCounter(initialCount);

  return (
    <ItemCountContainer>
      <CountContainer>
        <Button handleClick={() => counter.subtract()} textButton='-' padding=".3em 1em" disabled={count === initialCount} />
        <Count>{count}</Count>
        <Button handleClick={() => counter.add()} textButton='+' padding=".3em 1em" disabled={count === stock} />
      </CountContainer>
      <Button handleClick={() => onAdd(count)} disabled={count > stock} textButton='Add to cart' />
    </ItemCountContainer>
  );
};

export default ItemCount;
