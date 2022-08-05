import { ItemCountContainer, CountContainer, Count, OutOfStock } from "./style";
import useCounter from "../../hooks/useCounter.js";
import Button from "../../common/Button";
import { NavLink } from "react-router-dom";

const ItemCount = ({ stock, initialCount, onAdd }) => {
  const { count, counter } = useCounter(initialCount);

  return (
    <>
      {stock > initialCount ? (
        <ItemCountContainer>
          <CountContainer>
            <Button handleClick={() => counter.subtract()} textButton="-" padding=".3em 1em" disabled={count === initialCount} />
            <Count>{count}</Count>
            <Button handleClick={() => counter.add()} textButton="+" padding=".3em 1em" disabled={count === stock} />
          </CountContainer>
          <Button handleClick={() => onAdd(count)} disabled={count > stock} textButton="Add to cart" />
        </ItemCountContainer>
      ) : (
        <ItemCountContainer>
          <OutOfStock>Sin stock</OutOfStock>
          <NavLink to="/products">
            <Button textButton="Back to products" />
          </NavLink>
        </ItemCountContainer>
      )}
    </>
  );
};

export default ItemCount;
