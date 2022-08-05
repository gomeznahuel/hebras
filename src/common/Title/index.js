import { TitleHeading } from "./style";

export const Title = ({ fontSize, margin, textTitle }) => {
  return <TitleHeading style={{ margin, fontSize }}>{textTitle}</TitleHeading>;
};
