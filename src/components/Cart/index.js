import React, { useContext } from "react";
import { TableTD, TableTR } from "./style";
import Image from "../../components/Image";
import { Currency } from "../../helpers/Currency";
import { CartContext } from "../../context/cart/CartContext";
import Button from "../../common/Button";

export const Cart = ({ id, title, image, quantity }) => {
  const { removeItem, priceForProduct } = useContext(CartContext);

  return (
    <TableTR>
      <TableTD>{title.toUpperCase()}</TableTD>
      <TableTD>
        <Image src={image} alt={title} maxWidth="25%" />
      </TableTD>
      <TableTD>{Currency(priceForProduct(id))}</TableTD>
      <TableTD>{quantity}</TableTD>
      <TableTD>
        <Button handleClick={() => removeItem(id)} textButton="Remove" width={"fit-content"} height={"3em"} />
      </TableTD>
    </TableTR>
  );
};
