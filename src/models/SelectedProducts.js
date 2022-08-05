import { NavLink } from "react-router-dom";
import { Title } from "../common";
import { Image } from "../components";
import { Card } from "./style";
import { Button } from "../common";

export const SelectedProducts = ({ id, name, title, image }) => {
  return (
    <Card>
      <Title
        textTitle={title.toUpperCase()}
        margin={".4em 0 .2em 0"}
        fontSize={"2rem"}
      />
      <Image src={image} alt={name} maxWidth="55%" />
      <NavLink to={`/item/${id}`}>
        <Button textButton="View product" />
      </NavLink>
    </Card>
  );
};
