import { date } from "../../helpers/Date";
import { FooterContainer } from "./Footer.elements";

const Footer = () => {
  return <FooterContainer>&copy; {date} - Nahuel Gómez</FooterContainer>;
};

export default Footer;
